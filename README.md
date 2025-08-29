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
