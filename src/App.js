
import './App.css';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Myprofile from './components/Myprofile';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-theme.css';
import './css/main.css'
import './css/font-awesome.min.css'
import './App.css';



function App() {
    return (
        <div className="App">
            <BrowserRouter>
               <Navbar />

                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/My-Prfoile" element={<Myprofile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Signup" element={<Register />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div >
    );
}
export default App;
