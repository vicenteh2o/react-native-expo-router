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
