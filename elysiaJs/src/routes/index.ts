import type { ElysiaApp } from '../app'

export default (app: ElysiaApp) => app.get('/', async () => "API")