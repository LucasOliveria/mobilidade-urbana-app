export type Troute = {
  id: number,
  name: string,
  origin: {
    select: {
      id: number,
      name: string,
      lat: number,
      long: number,
      OriginDestiny: {
        select: {
          origin_id: string
        }
      }
    }
  }
  destiny: {
    select: {
      id: number,
      name: string,
      lat: number,
      long: number,
      OriginDestiny: {
        select: {
          origin_id: string
        }
      }
    }
  }
  distance: number
  duration: number
  path_to_destination: string[]
}