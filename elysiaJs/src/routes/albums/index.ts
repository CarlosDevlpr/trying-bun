import type { ElysiaApp } from '../../app'

export default (app: ElysiaApp) => app.get('/', async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await response.json()
    return albums
})