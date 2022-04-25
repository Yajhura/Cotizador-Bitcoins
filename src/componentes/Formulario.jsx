import React, { useEffect, useState } from "react";
import useSelect from "../hooks/useSelect";
import monedas from "../database/monedas";
import Spinner from "../helpers/Spinner"
const Formulario = ({setCalMonedo}) => {
  const [error, setError] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [moneda, SelectMonedas] = useSelect("moneda", monedas);
  const [cryptomoneda, SelectCrypto] = useSelect("crypto", crypto);
  useEffect(() => {
    const getApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=15&tsym=USD&";
      const resp = await fetch(url);
      const result = await resp.json();

      const arrayCrip = await result.Data.map((c) => {
        return {
          id: c.CoinInfo.Name,
          nombre: c.CoinInfo.FullName,
        };
      });
      return setCrypto(arrayCrip);
    };
    getApi();
  }, []);

  const handdleSubmit = (e) => {
    e.preventDefault();
    if (moneda === "" || cryptomoneda === "") {
      setError(true);
      return
    }
    setCalMonedo({moneda,cryptomoneda})
  };

  return (
    <>
      <div className="mx-auto p-3 w-4/5 ">
        <form onSubmit={handdleSubmit} className="">
          <legend className="text-center text-5xl text-amber-500 font-bold mb-10">
            Cotiza tu Criptomoneda Favoria al instante
          </legend>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Hay un error! </strong>
              <span className="block sm:inline">
                todos los campos son obligatorios.
              </span>
              <p onClick={()=> setError(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3 ">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </p>
            </div>
          )}
          <div className=" flex flex-col">
            <label
              htmlFor="moneda"
              className="text-white mt-10 mb-5 text-3xl text-left font-semibold"
            >
              Elige tu moneda
            </label>

            <SelectMonedas />
          </div>

          <div className=" flex flex-col">
            <label
              htmlFor="crypto"
              className="text-white mt-10 mb-5 text-3xl text-left font-semibold"
            >
              Elige tu Criptomoneda
            </label>

            <SelectCrypto />
          </div>
          <button
            className="my-5 text-center text-lg font-bold bg-blue-600 p-3 w-full rounded-md text-white"
            type="submit"
          >
            Calcular
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
