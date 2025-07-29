# Angular Micro Frontends with Nx + Dynamic Module Federation

This project demonstrates a Micro Frontend architecture in Angular using **Nx Workspace** and **Webpack Module Federation**, showcasing **Dynamic Federation** approach.

---

## 🔧 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Nx CLI (optional): `npm install -g nx`

---

## 📦 Install Dependencies

```bash
npm install

### Start the login remote app
```bash
nx serve login

### In a new terminal, start the dashboard host app (static/dynamic)
```bash
nx serve dashboard --devRemotes=login

Visit http://localhost:4200

