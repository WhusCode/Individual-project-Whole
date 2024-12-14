'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CreateRestaurant() {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurant_name, setRestaurantName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [opening_hours, setOpeningHours] = useState("");
    const [closing_hours, setClosingHours] = useState("");
    const [active, setRestaurantActive] = useState("");
    const router = useRouter();

    const handleCreateRestaurant = async () => {
        const body = {
            restaurant_name,
            address1,
            address2,
            city,
            state,
            opening_hours,
            closing_hours,
            active,
        };

        console.log("body")
        const response = await fetch(
            "https://q54hakjlp7.execute-api.us-east-1.amazonaws.com/dev/createRestaurant",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }
        );
        let result = response.body;
        console.log(response.body)
        const d = await response.json();
        if (response.ok) {
            // router.push({
            //     pathname: '/manager',
            //     query: { constants: JSON.stringify(result)}
            // })

            router.push("/manager")
            
        } else {
            alert(d.message || "Failed to create restaurant.");
        }
    };

    return (
        <div>
            <h1>Tables4U: Create Restaurant</h1>
            <input
                type="text"
                placeholder="Restaurant Name"
                value={restaurant_name}
                onChange={(e) => setRestaurantName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <input
                type="text"
                placeholder="Opening Hours"
                value={opening_hours}
                onChange={(e) => setOpeningHours(e.target.value)}
            />
            <input
                type="text"
                placeholder="Closing Hours"
                value={closing_hours}
                onChange={(e) => setClosingHours(e.target.value)}
            />
            <input
                type="text"
                placeholder="Restaurant Active (true/false)"
                value={active}
                onChange={(e) => setRestaurantActive(e.target.value)}
            />
            <button onClick={handleCreateRestaurant}>Create Restaurant</button>
            {/* Display the token */}
            
                <div>
                <tbody>
                    {restaurants.map((restaurant: any) => (
                        <tr key={restaurant.restaurant_id}>
                            <td>{restaurant.username}</td>
                            <td> </td>
                            <td>{restaurant.password}</td>
                        </tr>
                    ))}
                </tbody>
                </div>
            
        </div>
    );
}
