import React from "react";

function Filter({ data, countBtn }) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className={`col-sm-4 mb-3 ${item.text}`} key={index}>
                        <img src={item.image} alt="" />

                        <div className="d-flex mt-2">
                            <h3>{item.text}</h3>
                            <h3 className="ml-auto price">
                                $<span>{item.price}</span>
                            </h3>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary cartBtn my-3"
                            onClick={() => countBtn(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </>
    );
}
export default Filter
