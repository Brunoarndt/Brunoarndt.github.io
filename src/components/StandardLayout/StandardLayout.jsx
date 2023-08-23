import Navbar from "../header/Navbar";
import Footer from "../footer/footer";

export default function StandardLayout({children}){
    return(
        <>
        <Navbar/>
        <div> {children} </div>
        <Footer/>
        </>
    );
}