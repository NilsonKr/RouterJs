import routes from './routes/routes.js';
import router from './routes/router.js';


const handleRouter = new router(routes)
window.addEventListener('load', () => handleRouter.findRoute())
window.addEventListener('hashchange', () => handleRouter.findRoute())