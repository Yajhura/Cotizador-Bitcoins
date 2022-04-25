import React, { useState } from "react";

const useSelect = (forlabl, arr) => {
  const [state, setState] = useState("")
  const SelectMonedas = () => {
    return (
      <>
        <select
          className="w-full rounded-md p-2 text-gray-600 text-xl overflow-y-scroll"
          value={state}
          onChange={ e => setState( e.target.value )}
          id={forlabl}
        >
          <option className=""  value="">----Seleccione-----</option>
          {arr.map((val) => (
            <option className="" key={val.id} value={val.id}>
              {val.nombre}
            </option>
          ))}
        </select>
      </>
    );
  };

  return [state,SelectMonedas];
};

export default useSelect;
