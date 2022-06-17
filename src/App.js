import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './styles/App.css'
import CartList from "./components/CartList";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, BrowserRouter
} from 'react-router-dom';
function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path='/' element={< Main/>}/>
                    <Route exact path='/shop' element={< CartList/>}/>
                    <Route exact path='/cart' element={< CartList/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
