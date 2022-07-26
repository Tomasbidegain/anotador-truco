import React from "react";
import '../App.css'
import fondoTruco from '../assets/img/trucojpg.webp';
import '../styles/Home.css';

const Home = () => {
    return (
    <div className="home">
        <div className='img-text-container'>
          <img src={fondoTruco} alt="" />
            <div className='points-container'>
                <h2>¿A cuantos tantos che?</h2>
                <a href="/15-puntos" ><button>15 TANTOS</button></a>
                <a href="/30-puntos" ><button>30 TANTOS</button></a>
            </div>
        </div>
    </div>
    )
}

export default Home;