import { get } from './api.js'
import { del } from './api.js'
import { post } from './api.js'
import { put } from './api.js'

export async function getAll() {

    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
}

export async function getById(id) {

    return get('/data/pets/' + id);
}

export async function deleteById(id) {
    return del('/data/pets/' + id)
}

export async function createPets(petsData) {
    return post('/data/pets', petsData)
}

export async function editPets(id, petsData) {
    return put('/data/pets/' + id, petsData)
}
