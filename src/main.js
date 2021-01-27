import routes from './routes/routes.js';
import router from './routes/router.js';
import '../styles/style.css'


const handleRouter = new router(routes)
/* window.addEventListener('load', () => handleRouter.findRoute()) */
window.addEventListener('hashchange', () => handleRouter.findRoute())