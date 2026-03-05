# System Architecture

This document describes the high-level architecture of the Digital Wallet Management System frontend and its integration with backend services.

## 1. High-Level Architecture

```mermaid
flowchart LR
    U[End User Browser] --> F[React + Vite Frontend]
    F --> R[Redux Toolkit Store]
    R --> Q[RTK Query API Layer]
    Q --> B[Express Backend API]
    B --> D[(MongoDB)]
    B --> C[Cloudinary]
```

## 2. Frontend Internal Architecture

```mermaid
flowchart TB
    A[main.tsx / App.tsx] --> P[Providers]
    P --> T[Theme Provider]
    P --> N[Navigation Provider]
    P --> S[Redux Store Provider]

    A --> RT[Router]
    RT --> PUB[Public Pages]
    RT --> DASH[Role-Based Dashboard Pages]

    DASH --> GUARD[Route Guards / withAuth]
    GUARD --> APIs[RTK Query APIs]

    APIs --> BASE[axiosBaseQuery / baseApi]
    BASE --> HTTP[Backend API]
```

## 3. Authentication & Authorization Flow

```mermaid
sequenceDiagram
    participant User as User
    participant UI as Frontend UI
    participant API as Backend API

    User->>UI: Submit login credentials
    UI->>API: POST /auth/login
    API-->>UI: Access token + user role
    UI->>UI: Store auth state (Redux)
    UI->>UI: Evaluate route protector / role checks
    UI-->>User: Redirect to role-specific dashboard
```

## 4. Transaction Data Flow

```mermaid
sequenceDiagram
    participant User as User/Agent/Admin
    participant UI as Frontend UI
    participant RTK as RTK Query
    participant API as Backend API
    participant DB as MongoDB

    User->>UI: Trigger transaction action
    UI->>RTK: Call wallet/transaction endpoint
    RTK->>API: HTTP request with auth token
    API->>DB: Validate and persist transaction
    DB-->>API: Updated wallet/transaction result
    API-->>RTK: Response payload
    RTK-->>UI: Cached data + loading state updates
    UI-->>User: Updated dashboard, tables, and stats
```

## 5. Core Architectural Decisions

- Frontend state management uses Redux Toolkit with RTK Query for API caching and request lifecycle management.
- Route protection is role-aware to enforce dashboard and page access boundaries.
- Backend remains a separate deployment and is consumed through `VITE_API_URL`.
- Media and KYC/profile asset storage is delegated to Cloudinary.

## 6. Deployment View

```mermaid
flowchart LR
    FE[Vercel: Frontend Deployment] --> BE[Vercel: Backend Deployment]
    BE --> MDB[(MongoDB Atlas)]
    BE --> CLD[Cloudinary]
```
