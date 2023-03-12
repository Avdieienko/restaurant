import './styles/App.css';
import { Nav } from './Nav';
import {Home} from "./Home"
import { About } from './About';
import { FindUs } from './FindUs';
import { Reserve } from './Reserve';
import { Footer } from './Footer';
import {Route, Routes} from "react-router-dom"

function App() {
  return(
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path = "/find-us" element={<FindUs></FindUs>}/>
        <Route path="/reserve" element = {<Reserve/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
