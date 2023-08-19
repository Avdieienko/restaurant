import React from 'react';
import './styles/App.css';
import { Nav } from './Nav';
import {Home} from "./Home"
import { About } from './About';
import { FindUs } from './FindUs';
import { Reserve } from './Reserve';
import { Footer } from './Footer';
import {Route, Routes} from "react-router-dom"
import { useState, useEffect } from 'react';
import logo from "./images/logo.png"
import BeatLoader from "react-spinners/BeatLoader"
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  const [loading,setLoading] = useState(false);



  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    setLoading(true)
    if(loaded){
      setTimeout(() =>{
        setLoading(false)
      },3000)
    }
  },[loaded])

  const [appeared, setAppeared] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{setAppeared(true)},6000)
        },[])

    const popClick = ()=>{
        setAppeared(false);
    }


  return(
    <>
    {
      loading ?
      <div className={`App ${loaded ? "loaded_app":""}`}>
        {loaded?<h1 className='side_text'>イギリスの日本食レストラン</h1>:null}
        <div><img className={loaded ? "loaded_img" : ""} alt="logo" src={logo} onLoad={()=>setLoaded(true)}></img>
        {loaded?<BeatLoader loading={loading} size={20} aria-label="Loading Spinner" color="#C41E1E"/>:null}</div>
        {loaded?<h1 className='side_text'>イギリスの日本食レストラン</h1>:null}
      </div>
      :
      <>
        <Nav></Nav>
        <ParallaxProvider>
          <Routes>
            <Route path="/restaurant/" element={<Home></Home>}/>
            <Route path="/restaurant/about" element={<About></About>}/>
            <Route path = "/restaurant/find-us" element={<FindUs></FindUs>}/>
            <Route path="/restaurant/reserve" element = {<Reserve/>} />
          </Routes>
        </ParallaxProvider>
        <Footer/>
        <div className={`pop_up ${appeared ? "appeared":""}`}>
            <div className="pop_up_wrapper">
                <h1 className='pop_up_attention'>Attention</h1>
                <p>This webpage is imaginary and was created as a personal project for portfolio. Nothing here is real.</p>
                <div className="close_button" onClick={popClick} role="button">Close</div>
            </div>
        </div>
      </>
    }

    </>
  );
}

export default App;
