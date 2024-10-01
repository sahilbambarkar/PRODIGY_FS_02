import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import fireDb from '../firebase';
import { ref, onValue } from "firebase/database"; // Import ref and onValue functions
import "./View.css";

const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
   

    useEffect(() => {
        const dbRef = ref(fireDb, `Employee data/${id}`); 

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) { 
                setUser(snapshot.val()); 
            } else {
                setUser({}); 
            }
        });

        return () => {
            setUser({}); // Cleanup on unmount
        };
    }, [id]);

    return (
        <div style={{ marginTop: "150px" }}>
            <div className='card'>
                <div className='card-header'>
                    <p>User's Details</p>
                </div>
                <div className='container'>
                    <strong>ID:  </strong>
                    <span>{id}</span>
                    <br /><br />
                    <strong>Name:  </strong>
                    <span>{user.name}</span>
                    <br /><br />
                    <strong>Email:  </strong>
                    <span>{user.email}</span>
                    <br /><br />
                    <strong>Contact:  </strong>
                    <span>{user.contact}</span>
                    <br /><br />

                    <Link to="/">
                        <button className='btn btn-edit'>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default View;