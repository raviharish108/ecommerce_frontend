import { Announce } from "../../components/announcement/announce"
import { Header } from "../../components/navbar/navbar"
import { News } from "../../components/news/news"
import { Footer } from "../../components/footer/footer"
export function Users(){
    return(
        <div>
             <Announce/>
             <Header/>
             <News/>
             <Footer/>
        </div>
    )
}