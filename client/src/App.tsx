import { useEffect, useRef, useState } from 'react';
import './App.css';
import {
    About,
    Contact,
    Cursor,
    Experience,
    Footer,
    Header,
    HeaderSm,
    Home,
    Projects,
    ScrollIndicator,
} from './components';
import useWindowDimensions from './hooks/use-window-dimensions';

function App() {
    const [menuLink, setMenuLink] = useState<{ menu: string; active: boolean }>(
        { menu: 'home', active: true }
    );

    // intersection observer logic

    // const homeRef = useRef();
    // const sections = [...document.querySelectorAll('section')];

    // const observerCB = (entries: IntersectionObserverEntry[]) => {
    //     entries.forEach((entry) => {
    //         console.log(entry);
    //     });
    // };

    // const options = {
    //     threshold: 1,
    // };

    // useEffect(() => {
    //     const observer = new IntersectionObserver(observerCB, options);

    //     // sections.forEach((section) => {
    //     console.log(homeRef.current);
    //     // @ts-ignore
    //     observer.observe(homeRef.current);
    //     // });
    // }, [homeRef, options]);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        alert('Redirecting to my new portfolio in 3s');

        setTimeout(() => {
            window.open('https://sdesaadshaikh.vercel.app');
        }, 3000);
    }, []);

    return (
        <>
            <ScrollIndicator />
            <Cursor />
            {width > 800 ? (
                <Header menuLink={menuLink} setMenuLink={setMenuLink} />
            ) : (
                <HeaderSm />
            )}
            <div className='main-container space-y-24'>
                <section
                    className={`${width > 1350 ? 'h-[90vh]' : 'h-max'}`}
                    id='home'
                >
                    <Home />
                </section>
                <section id='about'>
                    <About />
                </section>
                <section id='exp'>
                    <Experience />
                </section>
                <section id='projects'>
                    <Projects />
                </section>
                <section id='contact'>
                    <Contact />
                </section>
                <Footer />
            </div>
        </>
    );
}

export default App;
