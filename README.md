# 🎓 College Finder Web Application

## 📌 Overview

The **College Finder Web Application** is a full-stack project developed to help students explore and compare top educational institutions in India, including IITs, NITs, and IIMs.

The application provides structured and searchable information such as rankings, fees, entrance exams, placement packages, and official websites.

---

## 🚀 Features

* 🔍 Search colleges by name
* 🎯 Filter by category (IIT / NIT / IIM)
* 📍 Filter by state
* 📊 View details: fees, rankings, exams, placements
* 🌐 Direct link to official college websites
* 🗺️ View college location on Google Maps
* ⚡ Fast data loading using backend API

---

## 🛠️ Tech Stack

| Component | Technology Used       |
| --------- | --------------------- |
| Frontend  | HTML, CSS, JavaScript |
| Backend   | Node.js, Express.js   |
| Database  | SQLite                |
| Tools     | VS Code, GitHub       |

---

## 📂 Project Structure

```
College Finder/
│
├── frontend/
│   └── main.html
│
├── backend/
│   ├── server.js
│   ├── college.db
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
```

### 2️⃣ Navigate to backend folder

```
cd backend
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Run the server

```
node server.js
```

👉 Server will run at:

```
http://localhost:3000
```

---

## 🌐 Run Frontend

* Open `main.html` using Live Server (VS Code)
* OR simply open it in your browser

---

## 📊 API Endpoint

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| GET    | `/colleges` | Fetch all college data |

---

## 📈 Dataset

* Includes **75+ institutions**

  * IITs
  * NITs
  * IIMs
* Data includes:

  * Location
  * Exams
  * Fees
  * Rankings
  * Placement details

---

## 🎯 Project Objective

To develop a full-stack web application that provides structured, dynamic, and searchable information about top Indian colleges using a Node.js backend and SQLite database.

---

## ⚠️ Limitations

* Data is static (not real-time)
* No user login system
* Limited to IITs, NITs, and IIMs

---

## 🔮 Future Enhancements

* Add more colleges
* Real-time admission updates
* User login & personalized recommendations
* Admin dashboard for data management

---

## 👩‍💻 Developer

**Rakshitha Shetty**

---

## 📄 License

This project is developed for educational and internship purposes.
