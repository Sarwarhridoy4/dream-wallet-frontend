# 💳 Digital Wallet Management System (DWMS)

A **full-stack, role-based Digital Wallet solution** built to simulate real-world e-wallet platforms like **bKash** or **Nagad**.  
The platform allows **Users, Agents, and Admins** to interact securely — from sending/withdrawing money to managing wallets, agents, and transactions.

This project showcases **modern frontend engineering, robust backend APIs, and professional-grade UI/UX**.

---

## 🌐 Live Applications

- **Frontend (React + Redux Toolkit + RTK Query):**  
  👉 [https://dream-wallet-steel.vercel.app](https://dream-wallet-steel.vercel.app)

- **Backend API (Node.js + Express + MongoDB):**  
  👉 [https://digital-wallet-management-system-kappa.vercel.app](https://digital-wallet-management-system-kappa.vercel.app)

---

## 📂 GitHub Repositories

- 🖥️ **Frontend Repo:** [dream-wallet-frontend](https://github.com/Sarwarhridoy4/dream-wallet-frontend)
- ⚙️ **Backend Repo:** [Digital_Wallet_Management_System](https://github.com/Sarwarhridoy4/Digital_Wallet_Management_System)

---

## 🔑 Demo Credentials

| Role  | Email             | Password              |
| ----- | ----------------- | --------------------- |
| Admin | admin@example.com | supersecurepassword   |
| Agent | agent@example.com | supersecurepassworD@1 |
| User  | user@example.com  | supersecurepassworD@0 |

---

## 📖 System Overview

The **Digital Wallet Management System (DWMS)** is designed to:

- Provide a **public landing platform** for visitors
- Implement **role-based dashboards** tailored for **User, Agent, Admin**
- Ensure **secure financial operations** (deposit, withdraw, send money, commission)
- Deliver **responsive, intuitive UI/UX** with modern tooling
- Enable **system-wide monitoring & management** via Admin

---

## 👥 System Roles & Use Cases

### 👤 User

- Deposit money (via Agent cash-in simulation)
- Withdraw money (via Agent cash-out simulation)
- Send money to another User (via phone/email lookup)
- Manage wallet, transactions, and personal profile

### 🏦 Agent

- Perform **Cash-in / Cash-out** for users
- Maintain transaction logs & commission tracking
- Manage personal profile

### 🛡️ Admin

- View global system stats (users, agents, wallets, transactions)
- Approve / suspend Agents
- Block / unblock Users
- Adjust system-level fees (optional)
- Audit all transactions with advanced filters

---

## 🔒 Security Features

- **JWT Authentication** (access & refresh tokens)
- **Role-based access control** (Admin, Agent, User)
- **Password hashing** with bcrypt
- **Route protection** on frontend & backend
- **Secure API consumption** with RTK Query interceptors
- **Cloudinary integration** for secure KYC & profile uploads

---

## 📊 Feature Checklist

| Feature                                                       | Status |
| ------------------------------------------------------------- | :----: |
| Public Landing (Home, About, Features, FAQ, Contact, Pricing) |   ✅   |
| Authentication (Register/Login/Forgot/Reset)                  |   ✅   |
| Role-based Dashboards (User, Agent, Admin)                    |   ✅   |
| User Wallet (deposit, withdraw, send)                         |   ✅   |
| Agent Cash-in / Cash-out                                      |   ✅   |
| Admin Manage Users/Agents/Wallets                             |   ✅   |
| Transaction History (pagination + filters)                    |   ✅   |
| Data Visualization (cards, charts, tables)                    |   ✅   |
| Guided Tour (Driver.js, 5+ steps)                             |   ✅   |
| Dark/Light Theme Toggle                                       |   ✅   |
| Toast Notifications                                           |   ✅   |
| Loading Skeletons                                             |   ✅   |
| Accessibility & Responsive Design                             |   ✅   |

---

## 🛠️ Tech Stack

### Frontend

- React (Vite + TypeScript)
- Redux Toolkit + RTK Query
- Tailwind CSS + ShadCN/UI + Lucide Icons
- Driver.js (guided tours)

### Backend

- Node.js + Express.js
- MongoDB + Mongoose
- JWT + bcrypt for security
- Cloudinary (image storage for profile/KYC)

### Deployment

- Vercel (Frontend & Backend)

---

## 🗂️ Project Structure

### Frontend

```

src/
├── components/ # UI & reusable components
├── contexts/ # Role & theme providers
├── hooks/ # Custom React hooks
├── layouts/ # Dashboard & main layouts
├── pages/ # Public & private pages
├── redux/ # RTK store & APIs
├── routes/ # App routes
└── utils/ # Auth & helper utilities

```

### Backend

```

src/
├── config/ # DB, Cloudinary, JWT configs
├── controllers/ # Request handlers
├── middlewares/ # Auth & role-based guards
├── models/ # Mongoose schemas
├── routes/ # API routes
├── services/ # Business logic
└── utils/ # Helpers & validators

```

---

## ⚡ Setup Instructions

### 🔹 Frontend

```bash
git clone https://github.com/Sarwarhridoy4/dream-wallet-frontend.git
cd dream-wallet-frontend
npm install
```

Create `.env`:

```env
VITE_API_URL=https://digital-wallet-management-system-kappa.vercel.app/api
```

Run locally:

```bash
npm run dev
```

### 🔹 Backend

```bash
git clone https://github.com/Sarwarhridoy4/Digital_Wallet_Management_System.git
cd Digital_Wallet_Management_System
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```

Run locally:

```bash
npm run dev
```

---

## 🧩 Architecture Diagram

```
[Frontend: React + RTK Query]
        |
        v
[Backend API: Express.js]
        |
        v
[MongoDB Database]  <---->  [Cloudinary Media Storage]
```

For a detailed architecture breakdown with Mermaid diagrams, see:
- [System Architecture](./docs/system-architecture.md)

---

## 📸 Screenshots (Placeholders)

- 🏠 Landing Page
- 🔑 Authentication (Login/Register)
- 👤 User Dashboard
- 🏦 Agent Dashboard
- 🛡️ Admin Dashboard

_(Insert screenshots or GIFs here)_

---

## 🎥 Demo Video

📹 A short 5–10 minute walkthrough demonstrating:

- Registration/Login (all roles)
- Wallet operations (deposit, withdraw, send money)
- Transaction history + filtering
- Admin/Agent management features

_(Insert video link here)_

---

## 📌 Roadmap

- [x] Role-based dashboards
- [x] Authentication & authorization
- [x] Transactions (cash-in/out, send money)
- [x] Guided tour with Driver.js
- [ ] Multi-language support
- [ ] Real-time notifications (Socket.io)
- [ ] AI-powered fraud detection (future scope)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch (`git checkout -b feature-name`)
3. Commit (`git commit -m "add new feature"`)
4. Push & open PR

---

## 📜 License

Licensed under the **MIT License**.

---

## 👨‍💻 Author

**Sarwar Hossain**

- 🔗 [GitHub](https://github.com/Sarwarhridoy4)
- 🔗 [LinkedIn](#)
- 🔗 [Portfolio](#)

```

---

✨ This version is **professional-grade**:
- Reads like a **project report** (good for submissions & portfolios)
- Documents **requirements, features, roles, security, setup, architecture, roadmap**
- Has placeholders for **screenshots & demo video**

Would you like me to also **design the screenshots placeholders into a real screenshot grid** (markdown tables with image preview slots), so your README looks polished even before you upload images?

```
