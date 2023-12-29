import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import './style.css'
import { api } from '../../api/api';

function RouteForm({ setRoute }: {
  setRoute: Dispatch<SetStateAction<any>>
}) {
  const [routeForm, setRouteForm] = useState({
    origin: "",
    destiny: ""
  })

  const [span, setSpan] = useState("");

  function handleChangeRouteForm(event: ChangeEvent<HTMLInputElement>) {
    setRouteForm({ ...routeForm, [event.target.name]: event.target.value });
    setSpan("");
  }

  async function submitRouteForm(event: FormEvent) {
    event.preventDefault();
    const { origin, destiny } = routeForm

    if (!origin || !destiny) {
      setSpan("Preencha todos os campos!")
    }

    try {
      const places = await api.get(`/places/twoplaces?origin=${origin}&destiny=${destiny}`);

      const placeIdOrigin = places.data[0].candidates[0].place_id
      const placeIdDestini = places.data[1].candidates[0].place_id

      const route = await api.post('/routes', {
        name: `Origem: ${origin} - Destino: ${destiny}`,
        origin_id: placeIdOrigin,
        destiny_id: placeIdDestini
      });


      setRoute({ ...route.data });
    } catch (error: any) {
      console.log(error);

    }

  }

  return (
    <div className='container-form-route'>
      <h2>Buscar Rota</h2>
      <form onSubmit={submitRouteForm}>
        <input type="text" name="origin" value={routeForm.origin} id="origin" placeholder='Insira a Origem' onChange={handleChangeRouteForm} />

        <input type="text" name="destiny" value={routeForm.destiny} id="destiny" placeholder='Insira o Destino' onChange={handleChangeRouteForm} />

        <button className='button-form'>Pesquisar</button>
      </form>
      <span>{span}</span>
    </div>
  )
}

export default RouteForm;
