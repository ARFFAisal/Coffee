import React from 'react';
import { useLoaderData } from 'react-router';

const UpadateCoffee = () => {

    const coffee = useLoaderData();
    const { name, Price, Barista, Supplier, Taste, Details, _id, Photourl } = coffee;

    const handleUpdateAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries())
        console.log(updateCoffee);

        // send update coffee to db
        fetch(`http://localhost:3000/coffees/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateCoffee),
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Update Coffee</h1>
      </div>
      <form onSubmit={handleUpdateAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Barista</label>
            <input
              type="text"
              name="Barista"
              defaultValue={Barista}
              className="input w-full"
              placeholder="Barista name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              name="Supplier"
              defaultValue={Supplier}
              className="input w-full"
              placeholder="Supplier  name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="Taste"
              defaultValue={Taste}
              className="input w-full"
              placeholder="Taste Bud"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="Price"
              defaultValue={Price}
              className="input w-full"
              placeholder="Price per cup"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="Details"
              defaultValue={Details}
              className="input w-full"
              placeholder="Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  my-6 border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="Photourl"
            defaultValue={Photourl}
            className="input w-full"
            placeholder="Photo Url"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Update Coffee"></input>
      </form>
    </div>
    );
};

export default UpadateCoffee;