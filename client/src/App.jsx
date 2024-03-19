import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
     
    </BrowserRouter>
  )
}
