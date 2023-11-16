import type { ElysiaApp } from '../../app'

export default (app: ElysiaApp) => app.get('/', async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
})