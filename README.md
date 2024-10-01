# 📇 Contact Manager - CRUD App with Auth
<h3>A Contact Management App using React, Firebase (Realtime DB), and Clerk (for user authentication). It allows users to perform CRUD operations on contact data.</h3>

## 🎯 Features
- 🔐 **Authentication:**Google Sign-In/email with Clerk
- 🛠️ **CRUD Operations:** with Firebase Authentication
- 🔒 **Protected Routes** using Context API
- 🔥 **Firebase backend** integration for real time updates

## 🛠️ Tech Stack
- **React** (Frontend)
- **Firebase** (Backend - real time database)
- **React Router** (Routing)
- **Context API** (State Management)
- **Auth: Clerk** (Google login)


## 📦 Getting Started

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/sahilbambarkar/contacy-manager.git

2. **Install Dependencies**:
```bash
  npm install
```
3. **Firebase Setup**:

🔑 Create a Firebase project from the Firebase Console.

🔑 Enable Realtime firebase Database for updates

4.  **Clerk  Setup**:

🔑 Create a  project from the clerk dashboard.

🔑 Enable login with google,email,password for login


5. **Add  Config**: 

🛡️ Create a .env file with your  credentials:

**Start the development server**:
```bash
npm Start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. **Learnings**:

📖How to integrate clerk Authentication in a React app.
📖Performing the CRUD functionality with validations and after authenticating user
📖Creating protected routes to restrict access based on user authentication.


7. **Deployment**:
Vercel: Deploy your React application to Vercel for easy hosting and automatic deployments.


<h2>Live Demo:https://prodigy-fs-02.vercel.app/</h2> 



