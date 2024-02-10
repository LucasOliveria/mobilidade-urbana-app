import { useState } from 'react';
import RouteBold from '../../assets/route-bold.svg';
import World from "../../assets/world.svg";
import RouteForm from '../../components/RouteForm';
import { TRoute } from '../../types/types';
import DOMPurify from 'dompurify';
import './style.css';

function Main() {
  const [route, setRoute] = useState<TRoute | undefined>()
  const [interests, setInterests] = useState<undefined>()
  const [urlImage, setUrlImage] = useState<string>("");
  const [routesFinder, setRoutesFinder] = useState<boolean>(true);
  const [interestsFinder, setInterestsFinder] = useState<boolean>(false);


  function handleBoolean(type: string) {
    if (type === "routeSearch") {
      setRoutesFinder(true);
      setInterestsFinder(false);
      return
    }

    setInterestsFinder(true);
    setRoutesFinder(false);
  }

  return (
    <div className='container-main'>
      <div className='container-lateral'>
        <div className='container-buttons'>
          <button onClick={() => handleBoolean("routeSearch")} className='button'>Pesquisar Rota</button>
          <button onClick={() => handleBoolean("interests")} className='button'>Locais de Interesse</button>
        </div>
        {routesFinder && <RouteForm setRoute={setRoute} setUrlImage={setUrlImage} setInterests={setInterests}/>}
        {interestsFinder && <div style={{ color: "red" }}><b>Em andamento</b></div>}
      </div>

      {route ?
        <div className='container-route-informations'>
          <h1>{route?.name}</h1>
          <div className='origin-destiny origin'>
            <h2 style={{ color: "#65B91D" }}>Origem</h2>
            <p><b>Nome:</b> {route?.origin.name}</p>
            <p><b>latitude:</b> {route?.origin.lat}</p>
            <p><b>longitude:</b> {route?.origin.long}</p>
          </div>
          <div className='origin-destiny destiny'>
            <h2 style={{ color: "#E94235" }}>Destino</h2>
            <p><b>Nome:</b> {route?.destiny.name}</p>
            <p><b>latitude:</b> {route?.destiny.lat}</p>
            <p><b>longitude:</b> {route?.destiny.long}</p>
          </div>
          <div className='origin-destiny route'>
            <h2 style={{ color: "#2EACBD" }}>Resumo da Rota</h2>
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
              <img src={urlImage} alt="static map" />
            </div>
          }
        </div>
        :
        interests ?
        <div></div>
        :
        <div className='container-world'>
          <img src={World} alt="world" />
        </div>
      }
    </div>
  )
}

export default Main;
