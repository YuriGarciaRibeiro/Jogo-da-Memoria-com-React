import './Tile.css';
import { useState,useEffect } from 'react';



const Tile = ({ativos,handleClick,setAtivos,data,certos,setCertos,selecionados,setSelecionados,dataBaralhada}) => {
    
    
    const [mostrar, setMostrar] = useState(false);
    const [desabilitar, setDesabilitar] = useState(false);
    
    

    const handleTile = () => {
        if(ativos < 2 && mostrar === false){
            if(mostrar === false && desabilitar === false){
                setSelecionados([...selecionados,data.Id]);
                setMostrar(!mostrar);
                handleClick(!mostrar);
                
            }
            if(desabilitar === true){
                handleClick(false);
            }
            
            
    }
    
    
}

    useEffect(() => {
        if(ativos ===2){
            setTimeout(() => {
                if(selecionados[0] === selecionados[1]){
                    if(selecionados[0]===data.Id){
                    setCertos([...certos,selecionados[0]]);
                    setSelecionados([]);
                    setAtivos(0);
                    }
                }
                else if(!certos.includes(data.Id)){
                    setSelecionados([]);
                    setMostrar(false);
                    setAtivos(0);
                }
            }, 500);
        }


    }, [ativos]);

    //resetar o jogo
    useEffect(() => {
        if(certos.length === 10 ){
        setMostrar(false);
        setDesabilitar(false);
    }
    }, [certos]);


    return (
    <button className="Tile" onClick={() => (handleTile())}>
        {desabilitar ? data.Id : mostrar ? <img src={data.imagem} className='Imagem' /> : <img src='http://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png' className='Imagem' />}
    </button>
    
)
}

export default Tile