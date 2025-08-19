"use client";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
export default function financialpage() {
    const router =useRouter();
    const [formData, setFormData] = useState({
        incomerange: "",
        homeownership: "",
        debts: ""
    });
    const onchange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }   
    const onsubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("survey:financial", JSON.stringify(formData));
        router.push("/summary");
    }

    return (
        <div>
            <form 
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
             onSubmit={onsubmit}>
                <h2 className="text-2xl font-bold mb-4">
                    Financial Information
                </h2>
                
                <div className="mb-4">
                    <label className="block mb-2">
                        What is your monthly income range?
                    </label>
                    <select
                        id="incomerange"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.incomerange}
                    >
                        <option value="">Select</option>
                        <option value="below_1000">Below $1,000</option>
                        <option value="1000_3000">$1,000 - $3,000</option>
                        <option value="3000_5000">$3,000 - $5,000</option>
                        <option value="above_5000">Above $5,000</option>
                    </select>
                </div> 

                <div className="mb-4">
                    <label className="block mb-2">
                        Do you own or rent your home?
                    </label>
                    <select
                        id="homeownership"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.homeownership}
                    >
                        <option value="">Select</option>
                        <option value="own">Own</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">
                        Do you have any outstanding debts?
                    </label>
                    <select
                        id="debts"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.debts}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                
                <div className="mb-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={() => router.push("/health")}>
                            Previous Page
                    </button>
                </div>

                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
}