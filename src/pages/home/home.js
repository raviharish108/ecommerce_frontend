import { Announce } from "../../components/announcement/announce";
import { Header } from "../../components/navbar/navbar";
import { Slider } from "../../components/slider/slider";
import { Catagorys } from "../../components/catagory/catagory";
import { Product } from "../../components/products/product";
import { News } from "../../components/news/news";
import { Footer } from "../../components/footer/footer";
export function Home(){
    return(
        <div>
         <Announce/>
         <Header/>
         <Slider/>
         <Catagorys/>
         <Product/>
         <News/>
         <Footer/>
        </div>
    )
}