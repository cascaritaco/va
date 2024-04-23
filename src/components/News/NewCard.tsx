import React from "react";

const NewCard = ({title, description}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title"> {title} </h2>
            <p> {description} </p>
            <div className="card-actions justify-end">
        </div>
    </div>
    </div>
  );
};

export default NewCard;
