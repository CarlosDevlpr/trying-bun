import type { ElysiaApp } from '../../app'

export default (app: ElysiaApp) => app.get('/', async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await response.json()
    return comments
})