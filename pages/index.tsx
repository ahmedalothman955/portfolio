import type {NextPage} from 'next'
import Nav from "../components/Nav";
import BoxInfo from "../components/BoxInfo";
import Ourprojects from "../components/Ourprojects";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Myproject from "../components/Myproject";


const Home: NextPage = () => {
    return (
        <div>
            <Nav/>
            <BoxInfo/>
            <Myproject/>
            <Ourprojects/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Home
