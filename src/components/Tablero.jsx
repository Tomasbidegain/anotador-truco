import React, { useState } from "react";
import Cuadro from "./Cuadro";
import '../styles/Points.css';
import '../styles/Tablero.css';
import Swal from 'sweetalert2';
import fondo from '../assets/img/hombre_truco.png';
import fuegosArtificiales from '../assets/img/confeti1.gif';

const Tablero = ( { name }) => {
    const [contadorNosotros, setContadorNosotros] = useState(0);
    const [contadorEllos, setContadorEllos] = useState(0);
    const [cuadradoNosotros, setCuadradoNosotros] = useState([]);
    const [cuadradoEllos, setCuadradoEllos] = useState([])
    const fifteen = [1,2,3]
    const thirty = [1,2,3,4,5,6]

    const mostrarAlerta = (namePlayer) =>{
        Swal.fire({
            title: '¡Felicidades!',
            text: `${namePlayer} ganaron la partida`,
            button: 'aceptar',
            imageUrl: `${fondo}`,
            imageWidth: 300,
            backdrop: `
                url("${fuegosArtificiales}")
                rgba(0,0,029,0.85)
            `
        }).then((value) => {
            if(value){
              window.location.href = "/";
            }
          });
    }

    const nombreClaseNosotros = () => {
        return cuadradoNosotros.map(cuadrado => ((cuadrado[0] === 1 || cuadrado[0] === 6 || cuadrado[0] === 11 || cuadrado[0] === 16 || cuadrado[0] === 21 || cuadrado[0] === 26 ) && cuadrado[1] === true && name === 'fifteen') ? 'top' 
                                            : ((cuadrado[0] === 1 || cuadrado[0] === 6 || cuadrado[0] === 11 || cuadrado[0] === 16 || cuadrado[0] === 21 || cuadrado[0] === 26 ) && cuadrado[1] === true && name === 'thirty') ? 'top-th' 
                                            : (cuadrado[0] === 2 || cuadrado[0] === 7 || cuadrado[0] === 12 || cuadrado[0] === 17 || cuadrado[0] === 22 || cuadrado[0] === 27 ) && cuadrado[1] === true && name === 'fifteen'?'right'
                                            : (cuadrado[0] === 2 || cuadrado[0] === 7 || cuadrado[0] === 12 || cuadrado[0] === 17 || cuadrado[0] === 22 || cuadrado[0] === 27 ) && cuadrado[1] === true && name === 'thirty' ? 'right-th'
                                            : (cuadrado[0] === 3 || cuadrado[0] === 8 || cuadrado[0] === 13 || cuadrado[0] === 18 || cuadrado[0] === 23 || cuadrado[0] === 28 ) && cuadrado[1] === true && name === 'fifteen'? 'bottom'
                                            : (cuadrado[0] === 3 || cuadrado[0] === 8 || cuadrado[0] === 13 || cuadrado[0] === 18 || cuadrado[0] === 23 || cuadrado[0] === 28 ) && cuadrado[1] === true && name === 'thirty' ? 'bottom-th'
                                            : (cuadrado[0] === 4 || cuadrado[0] === 9 || cuadrado[0] === 14 || cuadrado[0] === 19 || cuadrado[0] === 24 || cuadrado[0] === 29 ) && cuadrado[1] === true && name === 'fifteen'? 'left'
                                            : (cuadrado[0] === 4 || cuadrado[0] === 9 || cuadrado[0] === 14 || cuadrado[0] === 19 || cuadrado[0] === 24 || cuadrado[0] === 29 ) && cuadrado[1] === true && name === 'thirty' ? 'left-th'
                                            : (cuadrado[0] === 5 || cuadrado[0] === 10 || cuadrado[0] === 15 || cuadrado[0] === 20 || cuadrado[0] === 25 || cuadrado[0] === 30 ) && cuadrado[1] === true && name === 'fifteen'? 'diagonal'
                                            : (cuadrado[0] === 5 || cuadrado[0] === 10 || cuadrado[0] === 15 || cuadrado[0] === 20 || cuadrado[0] === 25 || cuadrado[0] === 30 ) && cuadrado[1] === true && name === 'thirty' ? 'diagonal-th'
                                            : ''
                                            ).slice(contadorNosotros-1,contadorNosotros)
    }

    const nombreClaseEllos = () => {
        return cuadradoEllos.map(cuadrado => ((cuadrado[0] === 1 || cuadrado[0] === 6 || cuadrado[0] === 11 || cuadrado[0] === 16 || cuadrado[0] === 21 || cuadrado[0] === 26 ) && cuadrado[1] === true && name === 'fifteen') ? 'top' 
        : ((cuadrado[0] === 1 || cuadrado[0] === 6 || cuadrado[0] === 11 || cuadrado[0] === 16 || cuadrado[0] === 21 || cuadrado[0] === 26 ) && cuadrado[1] === true && name === 'thirty') ? 'top-th' 
        : (cuadrado[0] === 2 || cuadrado[0] === 7 || cuadrado[0] === 12 || cuadrado[0] === 17 || cuadrado[0] === 22 || cuadrado[0] === 27 ) && cuadrado[1] === true && name === 'fifteen'?'right'
        : (cuadrado[0] === 2 || cuadrado[0] === 7 || cuadrado[0] === 12 || cuadrado[0] === 17 || cuadrado[0] === 22 || cuadrado[0] === 27 ) && cuadrado[1] === true && name === 'thirty' ? 'right-th'
        : (cuadrado[0] === 3 || cuadrado[0] === 8 || cuadrado[0] === 13 || cuadrado[0] === 18 || cuadrado[0] === 23 || cuadrado[0] === 28 ) && cuadrado[1] === true && name === 'fifteen'? 'bottom'
        : (cuadrado[0] === 3 || cuadrado[0] === 8 || cuadrado[0] === 13 || cuadrado[0] === 18 || cuadrado[0] === 23 || cuadrado[0] === 28 ) && cuadrado[1] === true && name === 'thirty' ? 'bottom-th'
        : (cuadrado[0] === 4 || cuadrado[0] === 9 || cuadrado[0] === 14 || cuadrado[0] === 19 || cuadrado[0] === 24 || cuadrado[0] === 29 ) && cuadrado[1] === true && name === 'fifteen'? 'left'
        : (cuadrado[0] === 4 || cuadrado[0] === 9 || cuadrado[0] === 14 || cuadrado[0] === 19 || cuadrado[0] === 24 || cuadrado[0] === 29 ) && cuadrado[1] === true && name === 'thirty' ? 'left-th'
        : (cuadrado[0] === 5 || cuadrado[0] === 10 || cuadrado[0] === 15 || cuadrado[0] === 20 || cuadrado[0] === 25 || cuadrado[0] === 30 ) && cuadrado[1] === true && name === 'fifteen'? 'diagonal'
        : (cuadrado[0] === 5 || cuadrado[0] === 10 || cuadrado[0] === 15 || cuadrado[0] === 20 || cuadrado[0] === 25 || cuadrado[0] === 30 ) && cuadrado[1] === true && name === 'thirty' ? 'diagonal-th'
        : '').slice(contadorEllos-1,contadorEllos)
    }

    const sumarNosotros = () => {
        if (contadorNosotros < 30 && name ==='thirty'){
            setCuadradoNosotros([...cuadradoNosotros, [contadorNosotros+1, true]])
            setContadorNosotros(contadorNosotros+1);
            nombreClaseNosotros()
        }
        else if (contadorNosotros < 15 && name ==='fifteen'){
            setCuadradoNosotros([...cuadradoNosotros, [contadorNosotros+1, true]])
            setContadorNosotros(contadorNosotros+1);
            nombreClaseNosotros()
        }
    }

    const restarNosotros = () => {
        if (contadorNosotros > 0 ){
            setCuadradoNosotros(cuadradoNosotros.slice(0, contadorNosotros-1))
            setContadorNosotros(contadorNosotros-1); 
            nombreClaseNosotros()
        } 
    }

    const sumarEllos = () => {
        if (contadorEllos < 30 && name ==='thirty'){
            setCuadradoEllos([...cuadradoEllos, [contadorEllos+1, true]])
            setContadorEllos(contadorEllos+1);
            nombreClaseEllos()
        } 
        else if (contadorEllos < 15 && name ==='fifteen'){
            setCuadradoEllos([...cuadradoEllos, [contadorEllos+1, true]])
            setContadorEllos(contadorEllos+1);
            nombreClaseEllos()
        }
    }

    const restarEllos = () => {
        if (contadorEllos > 0){
            setCuadradoEllos(cuadradoEllos.slice(0, contadorEllos-1))
            setContadorEllos(contadorEllos-1); 
            nombreClaseEllos()
        } 
    }

    if (contadorNosotros === 15 && name === 'fifteen'){
        mostrarAlerta('Nosotros');
    }
    else if (contadorEllos === 15 && name === 'fifteen'){
        mostrarAlerta('Ellos')
    }
    else if (contadorNosotros === 30 && name === 'thirty'){
        mostrarAlerta('Nosotros')
    }
    else if (contadorEllos === 30 && name === 'thirty'){
        mostrarAlerta('Ellos')
    }


    return ( 
        <div className='nosotros-ellos-container'>
        <div className='nosotros-container'>
            <h2>Nosotros</h2>
            <hr className="nosotros-ellos-container-hr"/>
            <div className='nosotros-points-container'>
                {name==='fifteen' ? fifteen.map(arr => 
                    <Cuadro
                        key= {arr.toString()+'nf'}
                        id = {arr.toString()}
                        nombreClase = {nombreClaseNosotros()}
                        contador = {contadorNosotros}
                        name = {name}
                    />
                ): thirty.map(arr => 
                    <>
                        <div key= {arr.toString()+'nt'} className="container-points">
                            <Cuadro
                                key= {arr.toString()+'nt'}
                                id = {arr.toString()}
                                nombreClase = {nombreClaseNosotros()}
                                contador = {contadorNosotros}
                                name = {name}
                            />
                        </div>
                        {arr === 3 ? <hr className="hr-th"/> : <></>}
                    </>  
                )}
            </div>
            <div className='nosotros-buttons-container'>
                <button 
                    onClick={sumarNosotros}
                    className='sumar-nosotros'>+</button>
                <button 
                    onClick={restarNosotros}
                    className='restar-nosotros'>-</button>
            </div>              
        </div>
        <div className='ellos-container'>
            <h2>Ellos</h2>
            <hr className="nosotros-ellos-container-hr"/>
            <div className='ellos-points-container'>
            {name==='fifteen' ? fifteen.map(arr => 
                    <Cuadro
                        key= {arr.toString()+'ef'}
                        id = {arr.toString()}
                        nombreClase = {nombreClaseEllos()}
                        contador = {contadorEllos}
                        name = {name}
                    />
                ): thirty.map(arr => 
                    <>
                        <div key= {arr.toString()+'et'} className="container-points">
                            <Cuadro
                                key= {arr.toString()+'et'}
                                id = {arr.toString()}
                                nombreClase = {nombreClaseEllos()}
                                contador = {contadorEllos}
                                name = {name}
                            />
                        </div>
                        {arr === 3 ? <hr className="hr-th"/> : <></>}
                    </>
                )}
            </div>
            <div className='ellos-buttons-container'>
                <button 
                    onClick={sumarEllos}
                    className='sumar-ellos'>+
                </button>
                <button 
                    onClick={restarEllos}
                    className='restar-ellos'>-
                </button>
            </div>              
        </div>
    </div>
    );
}
 
export default Tablero;