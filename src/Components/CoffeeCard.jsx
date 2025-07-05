import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees, setCoffees}) => {
  const { name, Price, Barista, Supplier, Taste, _id, Photourl } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

            //   remove coffee from state
            const remainingCoffees = coffees.filter(cof =>cof._id !== _id);
            setCoffees(remainingCoffees);
            }
          });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm grid grid-cols-3 gap-4 items-center">
      <div>
        <figure>
          <img src={Photourl} alt="Movie" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{Barista}</h2>
        <p>{Price}</p>
        <div className="card-actions justify-end"></div>
      </div>
      <div>
        <div className="join join-vertical">
          <Link to={`/coffeedetails/${_id}`}>
          <button className="btn ">Details</button>
          </Link>
          <Link to={`/updatecoffee/${_id}`}>
          <button className="btn my-4">Upadate</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn ">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
