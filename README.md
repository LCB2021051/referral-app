# 🎉 Refer & Earn System - Full Stack Web Application

This is a **Full Stack Refer & Earn System** built using **Next.js (Frontend)** and **Express.js + Prisma + MySQL (Backend)**. Users can **refer their friends via email** and earn rewards.

---

## 🚀 Live Deployment Links

🔹 **Frontend (Vercel):** [Referral App](https://referral-app-omega.vercel.app)  
🔹 **Backend (Render):** [API Server](https://referral-app-cjrm.onrender.com)

---

## 🚀 Tech Stack

### **Frontend (Next.js)**

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Styling**: Tailwind CSS
- **State Management**: React Hooks (`useState`)
- **API Integration**: Fetch API

### **Backend (Express.js)**

- **Framework**: Express.js
- **Database ORM**: Prisma
- **Database**: MySQL
- **Email Service**: Nodemailer (Gmail SMTP)

---

## 📂 Project Structure

```
refer-earn-system/
│── frontend/ (Next.js)
│   ├── app/ (App Router for pages)
│   ├── components/ (Reusable components)
│   ├── public/ (Static assets)
│   ├── .env.local (API URL config)
│   ├── package.json (Dependencies)
│   └── next.config.js (Next.js settings)
│
│── backend/ (Express.js)
│   ├── prisma/ (Database Schema & Migrations)
│   ├── routes/ (API Endpoints)
│   ├── server.js (Express Server)
│   ├── .env (Database & Email Config)
│   ├── package.json (Dependencies)
│   ├── .gitignore (Ignore unnecessary files)
│   └── README.md (This file)
```

---

## 🎨 **Frontend Setup (Next.js)**

### 📌 **1️⃣ Install Dependencies**

```sh
cd frontend
npm install
```

### 📌 **2️⃣ Create `.env.local`**

```sh
NEXT_PUBLIC_API_URL="https://your-backend-url.com"
```

### 📌 **3️⃣ Run the Frontend**

```sh
npm run dev
```

Visit **`http://localhost:3000`** in your browser.

---

## 🛠️ **Backend Setup (Express + Prisma + MySQL)**

### 📌 **1️⃣ Install Dependencies**

```sh
cd backend
npm install
```

### 📌 **2️⃣ Configure Database & Email Settings (`.env`)**

Create a **`.env`** file and add:

```sh
DATABASE_URL="mysql://root:password@localhost:3306/refer_db"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
```

📌 **For Gmail SMTP**: [Generate an App Password](https://myaccount.google.com/apppasswords)

### 📌 **3️⃣ Setup Database (Prisma)**

```sh
npx prisma migrate dev --name init
```

This **creates the MySQL database & tables automatically**.

### 📌 **4️⃣ Start the Backend Server**

```sh
node server.js
```

The API will run at **`http://localhost:5000`**.

---

## 📌 **API Endpoints (Backend)**

| Method | Endpoint     | Description                                 |
| ------ | ------------ | ------------------------------------------- |
| `POST` | `/api/refer` | Sends referral email & stores data in MySQL |

### **📌 Example API Request**

```sh
curl -X POST http://localhost:5000/api/refer -H "Content-Type: application/json" -d '{
  "referrerName": "John Doe",
  "referrerEmail": "john@example.com",
  "friendName": "Jane Doe",
  "friendEmail": "jane@example.com"
}'
```

---

## 🚀 **Deployment Guide**

### **Frontend (Vercel)**

1. Push the `frontend/` code to GitHub.
2. Go to [Vercel](https://vercel.com/) and **import the repository**.
3. Set environment variable:
   ```
   NEXT_PUBLIC_API_URL="https://your-backend-url.com"
   ```
4. Deploy 🚀.

### **Backend (Render)**

1. Push the `backend/` code to GitHub.
2. Go to [Render](https://render.com/) and **deploy a new Web Service**.
3. Add environment variables:
   ```
   DATABASE_URL="your-mysql-url"
   EMAIL_USER="your-email"
   EMAIL_PASS="your-app-password"
   ```
4. Deploy 🚀.

---

## 💡 Features

✅ **User-friendly UI**  
✅ **Secure email referral system**  
✅ **Stores referrals in MySQL database**  
✅ **Deployed on Vercel & Render**

---

## ❓ **Troubleshooting**

### **📌 If Prisma Throws "Database Does Not Exist"**

```sh
npx prisma migrate reset
```

**Then restart the backend**.

### **📌 If "Invalid Login" on Nodemailer**

- Enable **2-Step Verification** on Gmail.
- Generate an **App Password** ([Guide](https://myaccount.google.com/apppasswords)).

---

## 👨‍💻 **Contributors**

- **Vivek Korah** – _Full Stack Developer_

---

## 📜 **License**

This project is licensed under the **MIT License**.
