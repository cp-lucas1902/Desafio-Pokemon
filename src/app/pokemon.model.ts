export interface PokemonMo  {
    
        national_number: string
        evolution: string
        sprites: {
            normal: "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png"
            large: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
            animated: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
        }
        name: string
        type: Array<string> 
        total: number
        hp: number
        attack: number
        defense: number
        sp_atk: number
        sp_def: number
        speed: number
        favorito:boolean
    
    
}