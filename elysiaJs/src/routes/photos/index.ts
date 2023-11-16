import type { ElysiaApp } from '../../app'

export default (app: ElysiaApp) => app.get('/', async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await response.json()
    return photos
})