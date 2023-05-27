import Card from "./Card";
import Header from "./Header";
import '../styles/home.css';
import { mouses } from "../products/mouses";
import Footer from "./Footer";
export default function Home(){
    return <>
        <main>
            <div className="container-row">
                <h2>Periféricos</h2>

                <div className="row">                
                {
                    mouses.map((mouse, index)=>(
                        <Card key={index} product={mouse}/>
                    ))
                }
                </div>
            </div>
            <div className="container-row">
                <h2>Hardware</h2>
                
                <div className="row">
                {
                    mouses.map((mouse, index)=>(
                        <Card key={index} product={mouse}/>
                    ))
                }
                </div>
            </div>
        </main>
    </>
}