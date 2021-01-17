import home from '../pages/home.js';
import contact from '../pages/contact.js';
import gamePost from '../pages/posts/game.js';
import spaPost from '../pages/posts/spa.js';
import startPost from '../pages/posts/start.js';


const routes = [
    {
        path: '/',
        template : () => home()
    },
    {
        path: '/contact',
        template : () => contact()
    },
    {
        path: '/game_post',
        template : () => gamePost()
    },
    {
        path: '/spa_post',
        template : () => spaPost()
    },
    {
        path: '/start_post',
        template : () => startPost()
    },

]

export default routes 