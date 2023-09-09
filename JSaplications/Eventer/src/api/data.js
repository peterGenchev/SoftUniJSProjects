import { get } from './api.js'
import { del } from './api.js'
import { post } from './api.js'
import { put } from './api.js'

export async function getAll() {

    return get('/data/events?sortBy=_createdOn%20desc')
}

export async function getById(id) {

    return get('/data/events/' + id);
}

export async function deleteById(id) {
    return del('/data/events/' + id)
}

export async function createItem(itemData) {
    return post('/data/events', itemData)
}

export async function editItem(id, itemData) {
    return put('/data/events/' + id, itemData)
}







