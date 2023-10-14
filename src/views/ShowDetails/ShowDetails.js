import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import detail from "./../Laptop/Laptop.json";
import "./ShowDetails.css"

export default function ShowDetails() {
    const { id } = useParams();
    const [selectedDetail, setSelectedDetail] = useState(null);

    useEffect(() => {
        const foundDetail = detail.find(item => item.id === id);
        if (foundDetail) {
            setSelectedDetail(foundDetail);
        }
    }, [id]);

    if (!selectedDetail) {
        return <div>Detail not found!</div>;
    }

    return (
        <div className="buynowContainerCards">
            <img src={selectedDetail.img} className="buynow-images"/>
            <h2>{selectedDetail.title}</h2>
            <p>{selectedDetail.description}</p>
            <p>Price: {selectedDetail.price}</p>
            <button className="btn41-43 btn-42">
                Buy Now
                </button>

        
        </div>
    );
}
