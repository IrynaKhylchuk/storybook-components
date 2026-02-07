# Storybook Components App

A small **React component library** built with **Storybook**. This library includes reusable UI components with multiple states and props, fully documented and visualized in Storybook.  

---

## 🚀 Project Goal

Create a set of reusable UI components:

- **Input** – Multi-type input with password visibility toggle and clearable option  
- **Toast** – Notification system with auto-dismiss and transition animations  
- **Sidebar Menu** – Nested, animated sidebar menu  

All components are displayed in **Storybook** with multiple configurations and visual states.  

---

## Project Structure
```bash
src/
├── components/
│   ├── Input/
│   ├── Toast/
│   └── SidebarMenu/
├── stories/
└── index.ts
```
---

## 🧩 Components Overview

### 📥 Input Component
- **Props & Features:**
  - `type`: `"text" | "password" | "number"`  
  - Password type includes a toggle to show/hide password
  - Manual clear button  
- **Storybook Examples:**
  - Text, password, and number inputs  
  - Clearable and non-clearable versions  

---

### 🔔 Toast Component
- **Props & Features:**
  - `type`: `"info" | "success" | "danger"`  
  - `duration`: auto-dismiss time in milliseconds  
  - Optional manual close button  
  - Fade transitions  
- **Storybook Examples:**
  - Multiple types and durations  
  - Manual close functionality  

---

### 📝 Sidebar Menu
- **Props & Features:**
  - Slides in from the right  
  - Supports nested submenus (accordion style)  
  - Closes when clicking outside  
- **Storybook Examples:**
  - 1-level and 2-level nested items  
  - Opened and closed states  

---

## 📚 Setup Instructions

1. **Clone the repository:**  
```bash
git clone https://github.com/IrynaKhylchuk/storybook-components.git
cd Library
npm install

```
2. Run Storybook:
```bash
npm run storybook
```
3. Build for production:
```bash
npm run build
```
4. Linting & Formatting
```bash
npm run lint    # Run ESLint
npm run format  # Run Prettier
```

# 🖼 Screenshots

## Input Component
1. Text `clearable = false/true`
<img width="996" height="211" alt="Screenshot 2026-02-07 014133" src="https://github.com/user-attachments/assets/8cbce71d-c721-4c4e-87df-f5f0de2bf518" />
<img width="977" height="196" alt="Screenshot 2026-02-07 014146" src="https://github.com/user-attachments/assets/ec7b61b0-5d12-41d7-b116-2d18af2a24b2" />

---

2. Number `clearable = false/true`
<img width="957" height="189" alt="Screenshot 2026-02-07 014402" src="https://github.com/user-attachments/assets/ad922f14-5912-4e22-8530-0fb83bdd422c" />
<img width="982" height="205" alt="Screenshot 2026-02-07 014410" src="https://github.com/user-attachments/assets/ac0013a6-6986-4581-a7c5-8a09a0db9ac2" />

---

3. Password `clearable = false/true` `visibility = show/hide`
<img width="969" height="199" alt="Screenshot 2026-02-07 014343" src="https://github.com/user-attachments/assets/085a5e56-c4db-43af-a3a4-1ffac412f973" />
<img width="980" height="198" alt="Screenshot 2026-02-07 014355" src="https://github.com/user-attachments/assets/37cbf252-70ff-4e4e-b11d-c6c9ec5c0077" />

---

## Toast Component
1. `type="info"`
<img width="1594" height="828" alt="Screenshot 2026-02-07 014111" src="https://github.com/user-attachments/assets/c0d49a1b-18b4-4983-a422-6aacd34a1a71" />

---
   
2. `type="success"`
<img width="1572" height="808" alt="Screenshot 2026-02-07 014055" src="https://github.com/user-attachments/assets/9ff341f7-6f2e-48e1-bae7-b2e37931357b" />

---
   
3. `type="danger"`
<img width="1590" height="811" alt="Screenshot 2026-02-07 014104" src="https://github.com/user-attachments/assets/aaa63776-9be7-4bdb-bb78-123fce3335f5" />

---
   
## Sidebar Menu
1. `isOpen=false`
<img width="1616" height="751" alt="Screenshot 2026-02-07 000322" src="https://github.com/user-attachments/assets/bdec8949-a77a-451f-82b4-ef831504efc7" />

---

2. `isOpen=true`
<img width="1618" height="753" alt="Screenshot 2026-02-07 000314" src="https://github.com/user-attachments/assets/2c981d60-7ced-41a5-91f7-0d20996f532e" />

---

3. 1-level nested items
<img width="1616" height="826" alt="Screenshot 2026-02-07 014030" src="https://github.com/user-attachments/assets/fc2da9ab-920e-4fbc-af88-abf8790709b7" />

---

4. 2-level nested items
<img width="1618" height="830" alt="Screenshot 2026-02-07 014037" src="https://github.com/user-attachments/assets/9e6cc5fe-375e-471d-bbdd-5cfafad7949c" />

