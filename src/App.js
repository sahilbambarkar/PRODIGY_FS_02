import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

// Import Clerk components and provider
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';

// Use your actual Clerk Publishable Key here
const clerkPublishableKey = <yourclerkapikey>;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <ToastContainer position="top-right" />
          <Routes>
            {/* Public Routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <SignedIn>
                  <Home />
                </SignedIn>
              }
            />
            <Route
              path="/add"
              element={
                <SignedIn>
                  <AddEdit />
                </SignedIn>
              }
            />
            <Route
              path="/update/:id"
              element={
                <SignedIn>
                  <AddEdit />
                </SignedIn>
              }
            />
            <Route
              path="/view/:id"
              element={
                <SignedIn>
                  <View />
                </SignedIn>
              }
            />
            <Route path="/about" element={<About />} />

            {/* Redirect to sign-in if the user is signed out */}
            <Route
              path="*"
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
