"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function loginpage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlelogin = (e) => {
        e.preventDefault();

        const rawData = localStorage.getItem("auth:users");
        const users = rawData ? JSON.parse(rawData) : {};

        if(!username || !password) {
            alert("Please fill in all fields");
            return;
        }

        if(users[username] && users[username] === password) {

            localStorage.setItem("auth:loggedIn", "true");
            localStorage.setItem("auth:currentUser", username);
    
            // alert("Login successful");
            router.push("/survey"); // Redirect to dashboard or home page
        } else {
            alert("Invalid username or password");
        }

    }
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
            Sign In
        </h1>
        <form 
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        onSubmit={handlelogin}>

            <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded mb-4"
            onChange={(e) => setUsername(e.target.value)}
            value={username}/>

            <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded mb-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>

            <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            >
                login
            </button>
            
            <button
            type="button"
            onClick={() => router.push("/signup")}
            className="ml-4 bg-gray-500 text-white p-2 rounded">
                New User? Sign Up
            </button>

        </form>
    </div>);
}
