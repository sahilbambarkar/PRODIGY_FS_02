import React, { useEffect, useState } from 'react';
import fireDb from "../firebase";
import { ref, onValue, remove } from "firebase/database";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import "./Home.css";

const Home = () => {
    const [data, setData] = useState({});

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

    const onDelete = (id) => {
        if (window.confirm("Do you really want to delete it?")) {
            const dbRef = ref(fireDb, `Employee data/${id}`);
            remove(dbRef)
                .then(() => {
                    toast.success("Record Deleted Successfully");
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <SignedIn >
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Name</th>
                            <th style={{ textAlign: "center" }}>Email</th>
                            <th style={{ textAlign: "center" }}>Contact</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((id, index) => (
                            <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <button className="btn btn-edit"><BiEdit className="h-4 w-4" />Edit</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => onDelete(id)}><MdDelete className="h-4 w-4" />Delete</button>
                                    <Link to={`/view/${id}`}>
                                        <button className="btn btn-view"><GrView className="h-4 w-4" />View</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SignedIn>

            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}

export default Home;
