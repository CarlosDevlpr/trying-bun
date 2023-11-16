import type { ElysiaApp } from '../../app'

export default (app: ElysiaApp) => app.get('/', async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return users
})