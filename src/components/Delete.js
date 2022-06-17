import React from "react";
 function Delete(props) {
    console.log(props);
    return (
        <>
            <button className="btn btn-secondary h-25 deleteBtn" {...props}>
                Delete
            </button>
        </>
    );
}
export default Delete
