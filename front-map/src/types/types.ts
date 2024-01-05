export type TRoute = {
  id: number,
  name: string,
  origin: {
    id: number,
    name: string,
    lat: number,
    long: number,
    OriginDestiny: {
      origin_id: string
    }
  }
  destiny: {
    id: number,
    name: string,
    lat: number,
    long: number,
    OriginDestiny: {
      origin_id: string
    }
  }
  distance: number
  duration: number
  path_to_destination: string[],
  overview_polyline: string,
  url: string
}