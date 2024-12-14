'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function ManagerDashboard() {
    const [restaurants, setRestaurants] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (! restaurants) {
            fetch("https://q54hakjlp7.execute-api.us-east-1.amazonaws.com/dev/listAdminRestaurants")
                .then((res) => res.json())
                .then(setRestaurants);
        }
    }, []);

    

    return (
        <div>
            <h1>Manager Dashboard</h1>
            <button onClick={() => router.push("/")}>Logout</button>
            <h2>Your Managed Restaurants</h2>
            {restaurants.map((restaurant: any) => (
            <div key={restaurant.restaurant_id}>
                <h1>Username: {restaurant.username}</h1>
                <h2>Password: {restaurant.password}</h2>
            </div>
        ))}
        </div>
    );
};
