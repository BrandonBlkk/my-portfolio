import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Hero from "./components/Hero";
import MoveRightLoader from "./components/MoveRightLoader";

function App() {
    return (
        <div className="App flex flex-col min-h-screen transition-colors duration-150 dark:bg-slate-900 dark:text-white">
            <MoveRightLoader/>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
