import { Personagem } from "./personagem"

export interface Slice {
    pageNumber: number
    personagens: Array<Personagem>
    hasPrevious: boolean
    hasNext: boolean

}
