import { useState } from 'react';
import RouteBold from '../../assets/route-bold.svg';
import World from "../../assets/world.svg";
import RouteForm from '../../components/RouteForm';
import { TRoute } from '../../types/types';
import DOMPurify from 'dompurify';
import './style.css';

function Main() {
  const [route, setRoute] = useState<TRoute>()
  const [urlImage, setUrlImage] = useState<string | null>("");
  const [routeSearch, setRouteSearch] = useState<boolean>(true);
  const [interests, setInterests] = useState<boolean>(false);


  function handleBoolean(type: string) {
    if (type === "routeSearch") {
      setRouteSearch(true);
      setInterests(false);
      return
    }

    setInterests(true);
    setRouteSearch(false);
  }

  return (
    <div className='container-main'>
      <div className='container-lateral'>
        <div className='container-buttons'>
          <button onClick={() => handleBoolean("routeSearch")} className='button'>Pesquisar Rota</button>
          <button onClick={() => handleBoolean("interests")} className='button'>Locais de Interesse</button>
        </div>
        {routeSearch && <RouteForm setRoute={setRoute} setUrlImage={setUrlImage} />}
      </div>

      {route ?
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
            <h2>Resumo da Rota</h2>
            <p ><b>Rota:</b></p>
            {route?.path_to_destination.map((path, i) => (
              <div className='div-route' key={i} >
                <img src={RouteBold} alt="route bold" />
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(path) }} />
              </div>
            ))}
            <p><b>Distância:</b> {(route?.distance / 1000).toFixed(1)} Km</p>
            <p><b>Duração:</b> {(route?.duration / 60).toLocaleString("pt-BR", { maximumFractionDigits: 0, minimumFractionDigits: 0 })} min</p>
          </div>
          {
            urlImage
            &&
            <div className='url-image'>
              <img src={urlImage} alt="" />
            </div>
          }
        </div>
        :
        <div className='container-world'>
          <img src={World} alt="world" />
        </div>
      }
    </div>
  )
}

export default Main;
