import type {NextPage} from 'next'
import Nav from "../components/Nav";
import AboutInfo from "../components/AboutInfo";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Box from "../components/Box";
import Img from "../components/Img";


const About: NextPage = () => {
    return (
        <div>
            <Nav/>
            <Img/>
            <AboutInfo/>
            <Box/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default About
