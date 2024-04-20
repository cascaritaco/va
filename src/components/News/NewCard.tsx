import React from "react";
import ColumnType from "../../types/table";

// const NewCard:React.FC<ColumnType> = () => {
const NewCard = ({title, description}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
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
