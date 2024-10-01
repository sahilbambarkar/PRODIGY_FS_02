import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate
import './AddEdit.css';
import fireDb from "../firebase"; // Import your firebase setup
import { toast } from "react-toastify";
import { ref, push, onValue, update } from "firebase/database"; // Import ref, push, and update functions

const initialState = {
    name: "",
    email: "",
    contact: "",
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const { name, email, contact } = state;
    const navigate = useNavigate(); // Initialize useNavigate
    const { id } = useParams(); // Get the ID from URL params

    useEffect(() => {
        const dbRef = ref(fireDb, 'Employee data');

        onValue(dbRef, (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        });

        return () => {
            setData({});
        };
    }, []);

    useEffect(() => {
        if (id) {
            setState({ ...data[id] }); // Set state to existing data for editing
        } else {
            setState({ ...initialState }); // Reset to initial state for adding new contact
        }
    }, [id, data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return re.test(String(email).toLowerCase());
    };

    const validateContact = (contact) => {
        const re = /^[789]\d{9}$/; // Regex for 10-digit number starting with 7, 8, or 9
        return re.test(contact);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (!name) {
            toast.error("Name is required.");
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            toast.error("Name must contain only letters.");
            return;
        }

        if (!email) {
            toast.error("Email is required.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!contact) {
            toast.error("Contact number is required.");
            return;
        }

        if (!validateContact(contact)) {
            toast.error("Contact number must be 10 digits and start with 7, 8, or 9.");
            return;
        }

        const dbRef = ref(fireDb, 'Employee data');

        if (id) {
            // Update existing contact
            update(ref(fireDb, `Employee data/${id}`), state)
                .then(() => {
                    toast.success("Details updated successfully");
                    setTimeout(() => navigate("/"), 500); // Navigate after successful update
                })
                .catch((err) => {
                    toast.error(err.message); // Handle errors
                });
        } else {
            // Add new contact
            push(dbRef, state)
                .then(() => {
                    toast.success("Details added successfully");
                    setTimeout(() => navigate("/"), 500); // Navigate after successful submission
                })
                .catch((err) => {
                    toast.error(err.message); // Handle errors
                });
        }
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <form
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your Name...'
                    value={name || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your Email...'
                    value={email || ""}
                    onChange={handleInputChange}
                />

                <label htmlFor='contact'>Contact:</label>
                <input
                    type='number'
                    id='contact'
                    name='contact'
                    placeholder='Your Contact No. ...'
                    value={contact || ""}
                    onChange={handleInputChange}
                />

                <input type='submit' value={id ? "Update" : "Save"} />
            </form>
        </div>
    );
}

export default AddEdit;