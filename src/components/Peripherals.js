import { kboards } from "../products/kboards";
import { mouses } from "../products/mouses";
import { headsets } from "../products/headsets";
import Card from "./Card";
import { Link } from "react-router-dom";
import Header from "./Header";
import '../styles/peripherals.css';
import Footer from "./Footer";
import Filters from "./Filters";
import { useEffect, useState } from "react";



export default function Peripherals(){
    const  peripherals = mouses.concat(kboards, headsets)
    peripherals.sort((a, b) => b.sales - a.sales);
    const [selectedFilter, setSelectedFilter] = useState("sales");
    const [currentFilter, setCurrentFilter] = useState(peripherals);
    const handleSelectedFilter = (event) =>{
        setSelectedFilter(event.target.value);
    }
    useEffect(() =>{
        if(selectedFilter === "sales")
        {
            peripherals.sort((a, b) => b.sales - a.sales);
            setCurrentFilter(peripherals);
        }
        else if(selectedFilter === "higherPrice")
        {
            peripherals.sort((a, b) => b.price - a.price);
            setCurrentFilter(peripherals);
        }
        else if(selectedFilter === "lowestPrice")
        {
            peripherals.sort((a, b) => a.price - b.price);
            setCurrentFilter(peripherals);
        }
    }, [selectedFilter])
    return <>
        <div className="container-peripherals-main">
            <div className="container-peripherals">
                <div className="container-link">
                    <Link to="/">Home</Link>
                    <p >{"> Perifericos"}</p>
                </div>
                <Filters selectedFilter={selectedFilter} handleSelectedFilter={handleSelectedFilter}/>
                <div className="inner-container-peripherals">
                    {
                        currentFilter.map((peripherals, index)=>(
                            <Card key={index} product={peripherals}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
}