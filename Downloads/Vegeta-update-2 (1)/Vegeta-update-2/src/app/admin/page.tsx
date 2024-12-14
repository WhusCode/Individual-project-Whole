'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [restaurants, setRestaurants] = useState([]);
    const router = useRouter();

    
    
    const handleDelete = async (restaurantId: string) => {
        const response = await fetch(
            "https://q54hakjlp7.execute-api.us-east-1.amazonaws.com/dev/adminDeleteRestaurant",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ restaurant_id: restaurantId }),
            }
        );

        console.log(response)

        if (response.ok) {
            alert("Restaurant deleted!");
            setRestaurants((prev) => prev.filter((r: any) => r.restaurant_id !== restaurantId));
        } else {
            alert("Failed to delete restaurant.");
        }
    };

    useEffect (() => {
        console.log("request made");
        fetch("https://q54hakjlp7.execute-api.us-east-1.amazonaws.com/dev/listAdminRestaurants")
            .then((res) => res.json())
            .then((data) => setRestaurants(data));
    }, []);

    
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={() => router.push("/")}>Logout</button>
            <h2>All Restaurants</h2>

            {/* {JSON.stringify(restaurants)} */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> </th>
                        <th>Name</th>
                        <th> </th>
                        <th>Address 1</th>
                        <th> </th>
                        <th>Address 2</th>
                        <th> </th>
                        <th>City</th>
                        <th> </th>
                        <th>State</th>
                        <th> </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((restaurant: any) => (
                        <tr key={restaurant.restaurant_id}>
                            <td>{restaurant.restaurant_id}</td>
                            <td> </td>
                            <td>{restaurant.restaurant_name}</td>
                            <td> </td>
                            <td>{restaurant.address1}</td>
                            <td> </td>
                            <td>{restaurant.address2}</td>
                            <td> </td>
                            <td>{restaurant.city}</td>
                            <td> </td>
                            <td>{restaurant.state}</td>
                            <td> </td>
                            <td>
                                <button onClick={() => handleDelete(restaurant.restaurant_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {restaurants.map((restaurant: any) => (
            <div key={restaurant.restaurant_id}>
                <h1>Username: {restaurant.username}</h1>
                <h2>Password: {restaurant.password}</h2>
            </div>
        ))}
        </div>
    );
};

