import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Hero from "./components/Hero";
import MoveRightLoader from "./components/MoveRightLoader";
import Timeline from "./components/Timeline";
import PrismaticBurst from "./components/PrismaticBurst";
import Experience from "./components/Experience";
import AboutSection from "./components/AboutSection";

function App() {
    return (
        <div className="App relative flex flex-col min-h-screen transition-colors duration-150 dark:bg-gradient-to-r dark:bg-black dark:text-white" data-theme="light">
            <div className="relative w-full h-screen">
                <div className="fixed bottom-3 left-8 z-30">
                    <p className="transform -rotate-90 origin-bottom-left text-xl font-bold">
                        CODE • CREATE • INNOVATE
                    </p>
                </div>

                {/* PrismaticBurst background */}
                <PrismaticBurst />

                {/* Bottom gradient overlay for PrismaticBurst */}
                <div className="absolute hidden dark:block bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

                {/* Full-width header */}
                <div className="absolute top-0 left-0 w-full z-30">
                    <Header />
                    <Hero />
                </div>

                {/* Hero centered */}
                {/* <div className="absolute inset-0 flex items-center justify-center z-20 sm:mt-18">
                <Hero />
                </div> */}
            </div>

            {/* Experience section positioned absolutely below hero */}
            <div className="relative w-full sm:w-[60%] mx-auto mt-24 sm:-mt-32 z-20">
                <Experience />

                {/* Bottom gradient overlay for Experience */}
                <div className="absolute hidden dark:block bottom-0 left-0 w-full h-8 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Other components below the hero section */}
            <div className="overflow-x-hidden">
                <AboutSection />
                <MoveRightLoader />
                <Timeline />
                <Main />
            </div>

            <Footer />

            {/* Global bottom gradient overlay */}
            <div className="fixed hidden dark:block bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-40" />
        </div>
    );
}

export default App;
