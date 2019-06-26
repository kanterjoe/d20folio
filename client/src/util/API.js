import axios from 'axios';
export default {
    getAllCharacters: () => axios.get('/api/characters')
            .then(response => response.data),
    getCharacter: id => axios.get('/api/character/' + id)
            .then(response => response.data),
    createCharacter: character => axios.post('/api/character', character)
            .then(response => response.data),
    updateCharacter: (id, character) => axios.put('/api/character/' + id, character)
            .then(response => response.data),
    deleteCharacter: id => axios.delete('/api/character/' + id)
            .then(response => response.data),
    getMyCharacters: () => axios.get('/api/characters/mine')
            .then(response => response.data),
}


// for example: 

//API.getAllCharacters().then(characters => /*somethign*/)