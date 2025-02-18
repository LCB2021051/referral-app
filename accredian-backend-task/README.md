# 🛠️ Refer & Earn - Backend (Express.js + Prisma + PostgreSQL)

This is the **backend** for the Refer & Earn system, built with **Express.js, Prisma, and PostgreSQL**.

## 🚀 Live API URL

🔹 **Backend URL:** [API Server](https://referral-app-cjrm.onrender.com)

---

## 📂 **Project Structure**

```
backend/
│── prisma/ (Database schema & migrations)
│── routes/ (API Endpoints)
│── server.js (Express Server)
│── .env (Database & Email Config)
│── package.json (Dependencies)
│── README.md (This file)
```

---

## 🛠️ **Setup Instructions**

### 📌 **1️⃣ Install Dependencies**

```sh
cd accredian-backend-task
npm install
```

### 📌 **2️⃣ Set Environment Variables**

Create a **`.env`** file and add:

```sh
DATABASE_URL="postgresql://username:password@your-host-url:5432/refer_db"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
```

### 📌 **3️⃣ Setup Database with Prisma**

```sh
npx prisma migrate deploy
```

### 📌 **4️⃣ Start the Backend Server**

```sh
node server.js
```

The API will be available at **`http://localhost:5000`**.

---

## 📌 **API Endpoints**

| Method | Endpoint     | Description                                      |
| ------ | ------------ | ------------------------------------------------ |
| `POST` | `/api/refer` | Sends referral email & stores data in PostgreSQL |

### **📌 Example API Request**

```sh
curl -X POST https://referral-app-cjrm.onrender.com/api/refer -H "Content-Type: application/json" -d '{
  "referrerName": "John Doe",
  "referrerEmail": "john@example.com",
  "friendName": "Jane Doe",
  "friendEmail": "jane@example.com"
}'
```

---

## 🚀 **Deployment on Render**

1. Push the backend code to GitHub.
2. Go to [Render](https://render.com/) and **deploy a new Web Service**.
3. Add environment variables:
   ```
   DATABASE_URL="your-postgresql-url"
   EMAIL_USER="your-email"
   EMAIL_PASS="your-app-password"
   ```
4. Click **Deploy** 🚀.

---

## 💡 **Features**

✅ **Handles referral submissions securely**  
✅ **Stores referrals in PostgreSQL database**  
✅ **Sends referral emails via Nodemailer**  
✅ **Deployed on Render**

---

## 👨‍💻 **Contributors**

- **Vivek Korah** – _Backend Developer_

---

## 📜 **License**

This project is licensed under the **MIT License**.
