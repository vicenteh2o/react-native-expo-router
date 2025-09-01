# 📱 Proyecto con Arquitectura Feature-Based + Clean Architecture

Este proyecto sigue una **arquitectura basada en features** con capas inspiradas en **Clean Architecture** para mantener escalabilidad, separación de responsabilidades y reutilización de código.

---

## 🏗️ Arquitectura del Proyecto

```bash
app/
├── (tabs)/
│   ├── home/
│   │   └── index.js
│   ├── profile/
│   │   └── index.js
│   └── settings/
│       └── index.js
│
│── _layout.js         # Configuración de Tabs y redirección inicial
│
├── auth/
│   ├── login.js
│   └── register.js
│
├── shared/            # Cosas compartidas entre features
│   ├── components/    # Botones, inputs, modales reutilizables
│   ├── hooks/         # Hooks comunes
│   └── services/      # AuthService, etc.
│
├── store/             # Estado global (Zustand, Redux, React context, etc.)
│
├── utils/             # Helpers/utilidades
│
└── features/          # Cada módulo aislado (Feature-Based + Clean)
    ├── home/
    │   ├── components/ # UI específica del feature
    │   ├── hooks/      # Lógica: hooks, viewmodels
    │   ├── service/    # Servicios específicos del feature
    │   └── screens/    # Pantallas (pueden mapear a app/(tabs))
    │
    ├── auth/
    │   ├── components/
    │   ├── hooks/
    │   ├── service/
    │   └── screens/
    │
    ├── profile/
    │   ├── components/
    │   ├── hooks/
    │   ├── service/
    │   └── screens/
```

## Levantar proyecto

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

   ***

   ## 🚦 Navegación (Expo Router)

   Este proyecto utiliza [Expo Router](https://expo.github.io/router/docs/) para la navegación.

   ### Estructura principal

   - El archivo `app/_layout.tsx` controla la navegación raíz y redirige según el estado de autenticación:

     - Si el usuario no está autenticado, redirige a `/auth`.
     - Si está autenticado, carga el Tab Navigator principal.

   - El Tab Navigator está definido en `app/(tabs)/_layout.tsx`:
     - **Home Tab** (`app/(tabs)/index.tsx`): Página principal con enlaces a detalles de usuario.
     - **User Details Tab** (`app/(tabs)/users/[id].tsx`): Muestra detalles de usuario según el ID en la ruta.

   #### Ejemplo de navegación

   - Desde la Home puedes:
     - Ir a `/users/1` usando el enlace "Go to user 1".
     - Ir a `/users/2` usando el botón "Go to user 2".

   ### Pantalla de autenticación

   - Si no estás autenticado, se muestra la pantalla de login en `app/auth/index.tsx`.

   ### Fragmento de estructura de archivos relevante

   ```
   app/
      _layout.tsx         # Lógica de navegación raíz
      (tabs)/
         _layout.tsx       # Navegación por pestañas
         index.tsx         # Tab principal (Home)
         users/[id].tsx    # Detalles de usuario
      auth/
         index.tsx         # Pantalla de autenticación
   ```

   ### Personalización

   - Los iconos y estilos de las pestañas se configuran en `app/(tabs)/_layout.tsx`.
   - La navegación entre pantallas usa `<Link />` y `router.push()` de Expo Router.

   ***

   Para más detalles, consulta la [documentación de Expo Router](https://expo.github.io/router/docs/).

   ***

   ## 🔄 TanStack Query: Queries y Mutations

   Este proyecto utiliza [TanStack Query](https://tanstack.com/query/latest) para gestionar el estado de datos asíncronos (fetch y mutaciones).

   ### Ejemplo de uso

   En `app/(tabs)/index.tsx` se implementa:

   - **Query**: Para obtener la lista de todos (fetchTodos)
   - **Mutation**: Para agregar un nuevo todo (addTodo)

   #### Query

   ```tsx
   const { data, isLoading } = useQuery({
     queryFn: () => fetchTodos(search),
     queryKey: ["todos", search],
   });
   ```

   #### Mutation

   ```tsx
   const { mutateAsync } = useMutation({
     mutationFn: addTodo,
     onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["todos"] });
     },
   });

   // Para agregar un todo:
   await mutateAsync({ title });
   ```

   #### Servicios

   Los servicios están en `app/shared/services/index.ts`:

   - `fetchTodos(query)`: Simula una petición asíncrona y filtra los todos por título.
   - `addTodo({ title })`: Simula agregar un nuevo todo.

   TanStack Query gestiona el caché y la actualización automática de los datos tras una mutación.

   ***

   Para más información, consulta la [documentación oficial](https://tanstack.com/query/latest).

   ***

## 📝 Formik + Yup: Validación de formularios en Auth

La pantalla de autenticación (`app/auth/index.tsx`) utiliza [Formik](https://formik.org/) para gestionar el estado y envío del formulario, y [Yup](https://github.com/jquense/yup) para la validación de los campos.

### Implementación

- **Formik** gestiona los valores, errores y el envío del formulario de login.
- **Yup** define el esquema de validación en `app/auth/schema/validationSchema.ts`:

```ts
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
```

### Ejemplo de uso en la pantalla Auth

```tsx
<Formik
  initialValues={{ email: "", password: "" }}
  validationSchema={validationSchema}
  onSubmit={handleLogIn}
>
  {({ handleChange, values, handleBlur, errors, handleSubmit }) => (
    <>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={values.email}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="password"
        value={values.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
    </>
  )}
</Formik>
```

### Beneficios

- Validación automática y mensajes de error personalizados.
- Manejo sencillo del estado y envío del formulario.
- Código limpio y escalable para formularios complejos.

---

Para más información, consulta la [documentación de Formik](https://formik.org/) y [Yup](https://github.com/jquense/yup).

---

## 🗂️ Redux Toolkit: Manejo de estado global

Este proyecto utiliza [Redux Toolkit](https://redux-toolkit.js.org/) para manejar el estado global de la aplicación, por ejemplo el usuario autenticado.

### Implementación

- El store se configura en `app/store/index.ts`:

```ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

- El slice de usuario está en `app/store/userSlice.ts`:

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../shared/entities/user";

const initialState: User = {
  id: "",
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
```

- Los hooks personalizados están en `app/store/hooks/index.ts`:

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### Ejemplo de uso en un componente

```tsx
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser, clearUser } from "../store/userSlice";

const dispatch = useAppDispatch();
const user = useAppSelector((state) => state.user);

// Para actualizar el usuario:
dispatch(setUser({ id: "1", name: "John Doe", email: "john@example.com" }));

// Para limpiar el usuario:
dispatch(clearUser());
```

### Beneficios

- Estado global centralizado y tipado.
- Integración sencilla con React Native y Expo Router.
- Código limpio y escalable para manejar múltiples features.

---

Para más información, consulta la [documentación de Redux Toolkit](https://redux-toolkit.js.org/).
