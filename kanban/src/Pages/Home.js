import '../Css/Home.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/HomeComponents/Hero'
import HomeGrid from '../Components/HomeComponents/HomeGrid';

export default function Home() {

    return(
        <div >
            <Navbar/>
            <div className='bounding bounding-grid'>
                <Hero/>
                <HomeGrid/>
            </div>
        </div>
    );
}