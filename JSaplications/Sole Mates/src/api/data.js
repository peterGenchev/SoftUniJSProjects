import { get } from './api.js'
import { del } from './api.js'
import { post } from './api.js'
import { put } from './api.js'

export async function getAll() {

    return get('/data/shoes?sortBy=_createdOn%20desc')
}

export async function getById(id) {

    return get('/data/shoes/' + id);
}

export async function deleteById(id) {
    return del('/data/shoes/' + id)
}

export async function createBoots(bootsData) {
    return post('/data/shoes', bootsData)
}

export async function editBoots(id, bootsData) {
    return put('/data/shoes/' + id, bootsData)
}
