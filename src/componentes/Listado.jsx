import React from 'react'

const Listado = ({resultado}) => {
    const {IMAGEURL,PRICE,LASTUPDATE,LOWDAY,HIGHDAY,CHANGEPCT24HOUR} = resultado
  return (
    <div className='p-2 mt-20 animate__animated animate__fadeInDown'>
     <div className='grid grid-cols-2 gap-1'>
       
       <img  src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="imagen cripto"  />

      <div>
          <p className='text-2xl uppercase text-yellow-500 mb-2 font-bold '>El precio es de: <span className='text-white text-2xl font-semibold'  >{PRICE}</span></p>
          <p className='text-2xl uppercase text-yellow-500 mb-2 font-bold '>Precio mas alto del dia: <span className='text-white text-2xl font-semibold' >{HIGHDAY}</span></p>
          <p className='text-2xl uppercase text-yellow-500 mb-2 font-bold '>Precio mas bajo del dia: <span className='text-white text-2xl font-semibold' >{LOWDAY}</span></p>
          <p className='text-2xl uppercase text-yellow-500 mb-2 font-bold '>Variacion ultimas 24 horas: <span className='text-white text-2xl font-semibold'>{CHANGEPCT24HOUR}</span></p>
          <p className='text-2xl uppercase text-yellow-500 mb-2 font-bold '>Ultimas actualizacion: <span className='text-white text-2xl font-semibold'>{LASTUPDATE}</span></p>
      </div>
     </div>
    </div>
  )
}

export default Listado