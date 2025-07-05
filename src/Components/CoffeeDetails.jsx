import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();
    console.log(coffeeDetails);
    return (
        <div>
            <h1>Hello I am Coffee Details</h1>
        </div>
    );
};

export default CoffeeDetails;