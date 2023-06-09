import Button from "./Button.jsx";
import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial) 
    
    const add = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const subtract = () => {
        if (quantity >= 1){
            setQuantity(quantity - 1)
        }
    }
    
    const handleAdd = () => {
        if (quantity > 0) {
            onAdd(quantity);
        }
    };

    return (
    <div className="counter">
        <div className="controls">
            <Button label={"-"} customClass="button" handleCLick={subtract}/>
            <span className="number">{quantity}</span>
            <Button label={"+"} customClass="button" handleCLick={add}/>
        </div>
        <div className="add">
            <Button label={"Agregar"} customClass="button" handleCLick={handleAdd} disabled={!stock}/>
        </div>
    </div>
    );
};

export default ItemCount;