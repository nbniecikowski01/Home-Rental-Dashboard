"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => 
    { 
        e.preventDefault();
        if (email === "admin@oceanscode.com" && password === "admin") 
        {
            localStorage.setItem("isLoggedIn", "true");
            router.push("/properties");
        }
        else
        {
            alert("Invalid creds: Use admin@oceanscode.com & admin");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <form onSubmit = {handleLogin} className = "w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-black">Login</h1>

                <label className = "mb-2 block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type = "email"
                    required
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    className = "mb-4 w-full rounded border p-2 text-black"
                    />

                <label className = "mb-2 block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type = "password"
                    required
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    className = "mb-4 w-full rounded border p-2 text-black"
                    />

                <button
                    type = "submit"
                    className = "w-full rounded bg-blue-700 py-2 text-white font-bold hover:bg-blue-700"
                    >
                        Sign In
                    </button>
            </form>
        </div>
    );
}