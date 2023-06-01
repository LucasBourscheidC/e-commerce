import { useParams } from "react-router-dom";
import { mouses } from "../products/mouses";
import { kboards } from "../products/kboards";
import { headsets } from "../products/headsets";


export default function Search(){
    const data = mouses.concat(kboards, headsets)
    const {query} = useParams();
    const searchFilter = data.filter((product) =>
    product.name.toLowerCase() === query.toLowerCase()
  );    console.log(query);
    console.log(searchFilter);
    return <h1>{query}</h1>;
}