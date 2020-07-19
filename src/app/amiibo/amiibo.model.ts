export interface Amiibo {
  name: string,
  image: string,
  head: string,
  tail: string
}

export interface AmiiboReturn {
  amiibo: Amiibo[]
}