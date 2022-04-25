
import { useEffect, useState } from "react";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import Spinner from "./helpers/Spinner";

function App() {
  const [calcMoneda,setCalMonedo] = useState([])
  const [resultado,setResultado] = useState({})
  const [cargando,setCargando] = useState(false)
  useEffect(() => {
    
    if (Object.keys(calcMoneda).length > 0) {
      
      const cotizarCripto = async ()=>{
        setCargando(true)
        setResultado({})
        const {moneda,cryptomoneda} = calcMoneda;
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(cryptomoneda)}&tsyms=${encodeURI(moneda)}`
        const resp = await fetch(url);
        const data = await resp.json();
         
        setResultado(data.DISPLAY[cryptomoneda][moneda]);
        setCargando(false)
      } 
      cotizarCripto()
      
    }

  }, [calcMoneda])
  
  return (
    <>
      <div className="w-full h-screen bg-blue-900 flex justify-center font-IB">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:p-5 md:p-10">
          <div>
            <Formulario
            setCalMonedo={setCalMonedo}/>
          </div>

          <div className="p-4">
        
            {resultado.PRICE? (<h2 className="text-center text-5xl font-IBM font-bold  text-blue-200">Resultado de tu Crytomoneda</h2>) : (<h2 className="text-center  text-5xl font-IBM font-bold text-purple-500">  Consulta el precio de tu cryptomoneda  </h2>) }       
            {cargando&& <Spinner/>}   
            {resultado.PRICE && <Listado 
            resultado={resultado}
            /> }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
