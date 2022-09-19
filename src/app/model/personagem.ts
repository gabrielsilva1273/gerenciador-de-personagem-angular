import { InformacoesPersonagem } from "./informacoes-personagem";
import { Pericia } from "./pericia";
import { Talento } from "./talento";

export interface Personagem {
    id?:string
    ownerId?:string
    nome?:string
    idade?:number
    gos?:string
    nacionalidade?:string
    experiencia?:number
    nivel?:number
    dinheiro?:number
    hidratacao?:number
    saciedade?:number

    titulo?:string
    aparencia?:string
    personalidade?:string
    habito?:string
    vicio?:string
    historia?:string
    moralidade?:string

    informacoesPersonagem?:InformacoesPersonagem

    quantidadePericias?:number
    pontosPericiasParaDistribuir?:number
    periciaList?:Array<Pericia>

    quantidadeTalentos?:number
    talentoList?:Array<Talento>

    inventario?:Array<string>
}