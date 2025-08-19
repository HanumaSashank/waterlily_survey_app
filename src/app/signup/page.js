"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignupPage() {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        const rawData = localStorage.getItem("auth:users");
        const users = rawData ? JSON.parse(rawData) : {};

        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }   
        if (users[username]) {
            alert("Username already exists");
            return;
        }   
        users[username] =  password;
        localStorage.setItem("auth:users", JSON.stringify(users));
        alert("Signup successful, please log in");
        router.push("/login");
}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">
                Sign Up
            </h1>

            <form 
                className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
                onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="username"
                    className="border p-2 rounded mb-4"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />

                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded mb-4"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded">
                        Sign Up
                </button>

                <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="mt-4 bg-gray-300 text-black p-2 rounded">
                        Already have an account? Sign In
                </button>
            </form>
        </div>
    );
}