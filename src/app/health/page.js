"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HealthPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        medications: "",
        disabilities: "",
        insurance: "",
        tobacco: "",
        alcohol: ""
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
        localStorage.setItem("survey:health", JSON.stringify(formData));
        router.push("/financial");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="flex flex-col items-center justify-center min-h-screen bg-gray-100" onSubmit={nextpage}>
                <h2 className="text-2xl font-bold mb-4">
                    Health Information
                </h2>
                
                <div className="mb-4">
                    <label className="block mb-2">
                        Are you currently taking any prescribed medications?
                    </label>
                    <select
                        id="medications"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.medications}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">
                        Do you have any disabilities?
                    </label>
                    <select
                        id="disabilities"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.disabilities}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">
                        Do you have any health insurance coverage?
                    </label>
                    <select
                        id="insurance"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.insurance}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">
                        Do you smoke or use tobacco products?
                    </label>
                    <select
                        id="tobacco"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.tobacco}
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">
                        Do you consume alcohol?if so, how often?
                    </label>
                    <select
                        id="alcohol"
                        className="border p-2 rounded mb-4"
                        onChange={onchange}
                        value={formData.alcohol}
                    >
                        <option value="">Select</option>
                        <option value="never">Never</option>
                        <option value="occasionally">Occasionally</option>
                        <option value="frequently">Frequently</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>

                <div className="mb-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white p-2 rounded"
                        onClick={() => router.push("/survey")}>
                            Previous Page
                    </button>
                </div>


                <div className="mb-4">
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