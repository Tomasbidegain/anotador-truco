import React from "react";
import '../styles/Cuadro.css'

const Cuadro = ( {nombreClase, contador, id, name} ) => {

    const verificarCuadro = () => {
        return contador >= 0 && contador <= 5 && id === '1' ? nombreClase 
            : contador >5 && contador <=10 && id === '2' ? nombreClase 
            : contador > 10 && contador <=15 && id === '3' ? nombreClase
            : contador > 15 && contador <=20 && id === '4' ? nombreClase
            : contador > 20 && contador <=25 && id === '5' ? nombreClase
            : contador > 25 && contador <=30 && id === '6' ? nombreClase
            : '';
    }

    return ( 
        <div className={`cuadrado-th ${verificarCuadro()} ${contador >= 5 && id === '1' && name === 'fifteen' ? 'diagonal'
                                                    :contador >= 10 && id === '2' && name === 'fifteen' ? 'diagonal'
                                                    :contador >= 15 && id === '3' && name === 'fifteen' ? 'diagonal'
                                                    :contador >= 5 && id === '1' && name === 'thirty' ? 'diagonal-th'
                                                    :contador >= 10 && id === '2' && name === 'thirty' ? 'diagonal-th'
                                                    :contador >= 15 && id === '3' && name === 'thirty' ? 'diagonal-th'
                                                    :contador >= 20 && id === '4' && name === 'thirty' ? 'diagonal-th'
                                                    :contador >= 25 && id === '5' && name === 'thirty' ? 'diagonal-th'
                                                    :contador >= 30 && id === '6' && name === 'thirty' ? 'diagonal-th'
                                                    :''} `}>
            <hr className="hr"/>
        </div>
     );
}
 
export default Cuadro;