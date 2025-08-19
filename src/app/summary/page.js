"use client";
import { useState, useEffect } from "react";

export default function SummaryPage() {
    const [demographics, setDemographics] = useState({})
    const [health, setHealth] = useState({});
    const [financial, setFinancial] = useState({});

    useEffect(() => {
        const rawDemographics = JSON.parse(localStorage.getItem("survey:demographics"));
        const rawHealth = JSON.parse(localStorage.getItem("survey:health"));
        const rawFinancial = JSON.parse(localStorage.getItem("survey:financial"));
        if (rawDemographics) setDemographics(rawDemographics);
        if (rawHealth) setHealth(rawHealth);
        if (rawFinancial) setFinancial(rawFinancial);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">
                Summary
            </h1>

            <section className="mb-8">
                <h2 className="" >Demographic Information</h2>
                <Item label="Full Name" value={demographics.fullName} />
                <Item label="Date of Birth" value={demographics.dob} />
                <Item label="Gender" value={demographics.gender} />
                <Item label="Marital Status" value={demographics.maritalStatus} />
                <Item label="Dependents" value={demographics.dependents} />
                <Item label="City Name" value={demographics.city} />
                <Item label="State Name" value={demographics.state} />
                <Item label="Country Name" value={demographics.country} />
                <Item label="Education" value={demographics.education} />
            </section>

            <section className="mb-8">
                <h2>Health Information</h2>
                <Item label="Medications" value={health.medications} />
                <Item label="Disabilities" value={health.disabilities} />
                <Item label="Insurance" value={health.insurance} />
                <Item label="Tobacco" value={health.tobacco} />
                <Item label="Alcohol" value={health.alcohol} />
            </section>

            <section className="mb-8">
                <h2>Financial Information</h2>
                <Item label="Income Range" value={financial.incomerange} />
                <Item label="Home Ownership" value={financial.homeownership} />
                <Item label="Debts" value={financial.debts} />
            </section>
                
        </div>
    );

    function Item({ label, value }) {
        return (
            <div className="mb-2">
                <div className="font-semibold">{label}:</div>
                <div>{value || "Not provided"}</div>
            </div>
        );
    }
}