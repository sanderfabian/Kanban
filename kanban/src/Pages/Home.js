import '../Css/Home.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/HomeComponents/Hero'
import HomeGrid from '../Components/HomeComponents/HomeGrid';
import HomeSection from '../Components/HomeComponents/HomeSection';
import HomeBrowser from '../Components/HomeComponents/HomeBrowser';
import BrowserCards from '../Components/HomeComponents/BrowserCards';
import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Components/HomeComponents/Footer';


export default function Home() {
    const [isClicked, setIsClicked] = useState(false);
    const[ isDoing, setIsDoing]= useState(false);
    const handleToggle = () => {
        setIsClicked(!isClicked);
        setIsDoing(!isDoing);
    };

    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            if (sectionsRef.current) {
                sectionsRef.current.forEach(section => {
                    if (section) observer.unobserve(section);
                });
            }
        };
    }, []);

    return (
        <div >
            <Navbar />
            <div className='bounding bounding-grid'>
                <section ref={el => sectionsRef.current[0] = el} className="fade-in">
                    <Hero />
                </section>
                <section ref={el => sectionsRef.current[1] = el} className="fade-in">
                    <HomeGrid />
                </section>
                <section ref={el => sectionsRef.current[2] = el} className="fade-in">
                    <HomeSection header='About Kanban' subHeader='What can we do for you'>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <span>
                                Kanban is simple to use, effective and easy to look at!
                            </span>
                            <section ref={el => sectionsRef.current[3] = el} className="fade-in">
                                <HomeBrowser>
                                    <div className='browser-grid'>
                                        <div className='browser-cardholder'>
                                        <div style={{ position: 'relative',marginBottom:'50px' }}>
                                                <h3 style={{ color: "#ffffff", background: "#1e1e1e", border: "#F86C6C solid  2px", width: "max-content", borderRadius: "10px", padding: '10px', position: 'absolute', top: '-30px', boxShadow: 'inset 0px 0px 8px 3px #F86C6C50,  0px 0px 4px #F86C6C, 0px 4px 8px #00000030' }}>Pending</h3>
                                            </div>

                                            <BrowserCards task='Click Me!' days={"5"} onSampleClick={handleToggle} clicked={isClicked} taskColor={'#92b173'}/>
                                            <BrowserCards task='New API Endpoints' days={"3"} isDisabled='true'/>
                                        </div>
                                        <div className='browser-cardholder'>
                                            <div style={{ position: 'relative',marginBottom:'50px' }}>
                                                <h3 style={{ color: "#ffffff", background: "#1e1e1e", border: "#BAA088 solid  2px", width: "max-content", borderRadius: "10px", padding: '10px', position: 'absolute', top: '-30px', boxShadow: 'inset 0px 0px 8px 3px #BAA08850,  0px 0px 4px #BAA088, 0px 4px 8px #00000030' }}>In Progress</h3>
                                            </div>

                                            <BrowserCards task='Debug Core' days={"12"} isDisabled='true' pending='false' name='Paul'/>
                                            {isDoing ?(<BrowserCards task='Im Here now!' taskColor={'#92b173'} days={"5"} isDisabled='true' pending='false' name='You'/>): null
                                            }
                                            
                                        </div>
                                    </div>
                                </HomeBrowser>

                            </section>
                        </div>
                    </HomeSection>
                </section>
            </div>

            <Footer></Footer>
        </div>
    );
}