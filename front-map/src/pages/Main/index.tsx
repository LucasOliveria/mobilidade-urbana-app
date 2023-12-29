import { useState } from 'react'
import './style.css'
import RouteForm from '../../components/RouteForm';

function Main() {
  const [route, setRoute] = useState<any>()

  return (
    <div className='container-main'>
      <div className='container-lateral'>
        <div className='container-buttons'>
          <button>Pesquisar Rota</button>
          <button>Locais de Interesse</button>
        </div>
        <RouteForm setRoute={setRoute} />
      </div>
      <div className='container-map-informations'>
        <h1>{route?.name}</h1>
        <div className='origin-destiny origin'>
          <h2>Origem</h2>
          <p>Nome: {route?.origin.name}</p>
          <p>latitude: {route?.origin.lat}</p>
          <p>longitude: {route?.origin.long}</p>
        </div>
        <div className='origin-destiny destiny'>
          <h2>Destino</h2>
          <p>Nome: {route?.destiny.name}</p>
          <p>latitude: {route?.destiny.lat}</p>
          <p>longitude: {route?.destiny.long}</p>
        </div>
        <div className='origin-destiny route'>
          <h2>Rota</h2>
          <p>{route?.path_to_destination}</p>
        </div>
      </div>
    </div>
  )
}

export default Main;
