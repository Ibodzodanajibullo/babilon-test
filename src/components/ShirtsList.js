import React from "react";
function Lists(props) {
    console.log(props);
    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <img  src={props.image}/>
                <div className="d-flex mt-2 flex-column">
                    <h3>{props.name}</h3>
                    <h3 className="ml-auto price">{props.price}</h3>
                </div>
                <button className="btn btn-secondary h-25 deleteBtn">Delete</button>
            </div>
        </>
    );
}
export default Lists