import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react'
import './style.css'
import { api } from '../../api/api';
import { google } from '../../api/google';
import { GOOGLE_API_KEY } from "../../config";
import { toast } from 'react-toastify';
import { TRoute } from '../../types/types';

function RouteForm(
  {
    setRoute,
    setUrlImage,
  }
    :
    {
      setRoute: Dispatch<SetStateAction<TRoute | undefined>>
      setUrlImage: Dispatch<SetStateAction<string | null>>
    }
) {
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
    const { origin, destiny } = routeForm;

    if (!origin || !destiny) {
      return setSpan("Preencha todos os campos!");
    }

    const id = toast.loading("Por favor, aguarde...");

    try {
      const places = await api.get(`/places/twoplaces?origin=${origin}&destiny=${destiny}`);

      const placeIdOrigin = places.data[0].candidates[0].place_id
      const placeIdDestini = places.data[1].candidates[0].place_id

      const route = await api.post('/routes', {
        name: `Origem: ${origin} - Destino: ${destiny}`,
        origin_id: placeIdOrigin,
        destiny_id: placeIdDestini
      });

      const polyline = route.data.overview_polyline
      const originPoint = route.data.origin.name
      const destinyPoint = route.data.destiny.name

      const map = await google.get(`/staticmap?size=1600x800&path=color:0x0000ff|weight:5|enc:${polyline}&markers=color:red|label:E|${originPoint}&markers=color:red|label:D|${destinyPoint}&key=${GOOGLE_API_KEY}`, { responseType: "arraybuffer" })

      const arrayBufferView = new Uint8Array(map.data);
      const blob = new Blob([arrayBufferView], { type: 'image/png' });
      const dataUrl = URL.createObjectURL(blob);

      setUrlImage(dataUrl)

      setRoute({ ...route.data });

      toast.update(id, { render: "Tudo Ok!", type: "success", isLoading: false, autoClose: 2000, hideProgressBar: false });
    } catch (error: any) {
      toast.update(id, { render: "Erro inesperado no servidor!", type: "error", isLoading: false, autoClose: 2000, hideProgressBar: false });
    }

  }

  return (
    <div className='container-form-route'>
      <h2>Buscar Rota</h2>
      <form onSubmit={submitRouteForm}>
        <input type="text" name="origin" value={routeForm.origin} id="origin" placeholder='Insira a Origem' onChange={handleChangeRouteForm} />

        <input type="text" name="destiny" value={routeForm.destiny} id="destiny" placeholder='Insira o Destino' onChange={handleChangeRouteForm} />

        <button className='button-form button'>Pesquisar</button>
      </form>
      <span>{span}</span>
    </div>
  )
}

export default RouteForm;
