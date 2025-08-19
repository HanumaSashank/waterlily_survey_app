"use client";

import next from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",    
    gender: "",
    maritalStatus: "",
    dependents: "",
    city: "",
    state: "",
    country: "",
    education: ""
  });

    const onchange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }

    const nextpage = (e) => {
        e.preventDefault();
        localStorage.setItem("survey:demographics", JSON.stringify(formData));
        router.push("/health");
    }
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form className="flex flex-col items-center justify-center min-h-screen bg-gray-100" onSubmit={nextpage}>
            <h2 className="text-2xl font-bold mb-4">
                Demographic Information
            </h2>

            <div className="mb-4">
                <label className="block mb-2">
                    Enter Your Full Name:
                </label>
                <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="border p-2 rounded mb-4"
                    onChange={onchange}
                    value={formData.fullName}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    What is your Date of Birth?
                </label>
                <input
                    id="dob"
                    type="date"
                    className="border p-2 rounded mb-4"
                    onChange={onchange}
                    value={formData.dob}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    What is your Gender?
                </label>
                <select 
                    id="gender"
                    className="border p-2 rounded mb-4"
                    onChange={onchange}
                    value={formData.gender}
                >
                    <option value="">Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Others</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    What is your Marital Status?
                </label>
                <select 
                    id="maritalStatus"
                    className="border p-2 rounded mb-4"
                    onChange={onchange}
                    value={formData.maritalStatus}
                >
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    How many dependents do you have?
                </label>
                <input
                    id="dependents"
                    type="number"
                    placeholder="Number of Dependents"
                    className="border p-2 rounded mb-4"
                    min = "0"
                    onChange={onchange}
                    value={formData.dependents}
                    required/>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    What is your current Address?
                </label>
                <div className="flex space-x-4">
                    <input 
                        id="city"
                        type="text"
                        placeholder="City"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.city}
                        // required
                    />
                    <input
                        id="state"
                        type="text"
                        placeholder="State"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.state}
                        // required
                    />
                    <input
                        id="country"
                        type="text"
                        placeholder="Country"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.country}
                        // required
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-2">
                    What is your highest level of education?
                </label>
                <select 
                    id="education"
                    className="border p-2 rounded mb-4"
                    onChange={onchange}
                    value={formData.education}
                >
                    <option value="">Select</option>
                    <option value="highschool">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                </select>
            </div>

            <div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded">
                        Next Page
                    </button>
            </div>

        </form>
    </div>
  );
}