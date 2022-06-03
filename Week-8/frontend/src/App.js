import logo from "./logo.svg";
import "./App.css";

const PORT = 3000;

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1>React Running on "PORT:{PORT}"</h1>
                <h3>Start your Project Jordan, Good Luck!</h3>
            </header>
            <main></main>
        </div>
    );
}

export default App;
