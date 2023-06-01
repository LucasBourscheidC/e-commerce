import { useParams } from "react-router-dom";
import { mouses } from "../products/mouses";
import { kboards } from "../products/kboards";
import { headsets } from "../products/headsets";
import Card from "./Card";

export default function Search(){
    const data = mouses.concat(kboards, headsets)
    const {query} = useParams();
    const searchFilter = data.filter((product) =>
    product.name.toLowerCase().includes(query));
    return <>
        {
          searchFilter.map((product, index)=> <Card key={index} product={product} />)
        }
    </>
}