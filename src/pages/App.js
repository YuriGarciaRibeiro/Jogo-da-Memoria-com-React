import "../styles/App.css";
import Tile from "../components/Tile/Tile";
import { useState, useEffect } from "react";
import data from "../data/data";
import { Inicio } from "../components/Inicio/Inicio";

function App() {
  const [ativos, setAtivos] = useState(0);
  const [dataBaralhada, setDataBaralhada] = useState([]);
  const [certos, setCertos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const [iniciado, setIniciado] = useState(false);

  const handleClick = (situação) => {
    if (situação) {
      setAtivos(ativos + 1);
    } else {
      setAtivos(ativos - 1);
    }
  };

  const handleInicio = () => {
    setIniciado(!iniciado);
  };

  //resetar o jogo quando todos os pares forem encontrados
  useEffect(() => {
    if (certos.length === data.length / 2) {
      setTimeout(() => {
        setCertos([]);
        setDataBaralhada(data.sort(() => Math.random() - 0.5));
      }, 1000);
    }
  }, [certos]);

  //baralhar os dados
  useEffect(() => {
    setDataBaralhada(data.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="App">
      <h1>JOGO DA MEMORIA</h1>
      {iniciado ? (
        <div className="Tabuleiro">
          {Array(20)
            .fill()
            .map((_, index) => (
              <Tile
                key={index}
                ativos={ativos}
                handleClick={handleClick}
                setAtivos={setAtivos}
                data={dataBaralhada[index]}
                certos={certos}
                selecionados={selecionados}
                setSelecionados={setSelecionados}
                setCertos={setCertos}
                dataBaralhada={dataBaralhada}
              />
            ))}
          <button className="parar-buttom" onClick={handleInicio}>
            Parar
          </button>
        </div>
      ) : (
        <>
          <Inicio iniciado={iniciado} handleInicio={handleInicio} />
        </>
      )}
    </div>
  );
}

export default App;
