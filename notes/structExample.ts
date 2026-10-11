/*
my-expo-app/
├── app/                    # File-based routing (Screens & Layouts)
│   ├── _layout.tsx         # Root layout (Providers, Navigation wrappers)
│   ├── index.tsx           # Home screen (/)
│   └── (tabs)/             # Grouped route for bottom tabs
│       ├── _layout.tsx
│       ├── explore.tsx
│       └── profile.tsx
│
├── assets/                 # Static assets
│   ├── fonts/
│   ├── images/
│   └── animations/
│
├── components/             # Reusable UI building blocks
│   ├── common/             # Buttons, Cards, Inputs, Loaders
│   └── navigation/         # Custom headers, tab bars
│
├── constants/              # Global app constants and configuration
│   ├── Colors.ts           # Color palette, themes (dark/light)
│   └── Config.ts           # API URLs, environment keys
│
├── hooks/                  # Custom React hooks
│   ├── useAuth.ts
│   └── useColorScheme.ts
│
├── services/               # External integrations & API clients
│   ├── api.ts              # Axios/Fetch setup
│   └── firebase.ts         # Firebase/Supabase client config
│
├── store/                  # Global state management (Zustand, Redux, Context)
│   └── useUserStore.ts
│
├── types/                  # TypeScript interface & type definitions
│   └── user.ts
│
├── utils/                  # Pure helper functions & formatters
│   ├── formatters.ts       # Currency, date formatting
│   └── validators.ts       # Email/password validation logic
│
├── app.json                # Expo core configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
*/