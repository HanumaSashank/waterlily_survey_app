"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Waterlily Assessment Survey App
      </h1>

      <p className="text-lg mb-6">
        Please sign in if you're an already existing user or signup if you're a new user.
      </p>

      <div className="flex space-x-4">

        <button 
        type="button"
        onClick={() => router.push("/login")}
        className="mr-2">
          Sign In
        </button>

        <button 
        type="button"
        onClick={() => router.push("/signup")}
        className="ml-2">
          Sign Up
        </button>
        
      </div>
    </div>
    
  );
}
