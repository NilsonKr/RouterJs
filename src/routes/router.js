import header from '../templates/header.js';
import error404 from '../pages/error404.js';

class router{                   
    constructor(routes){
        this.routes = routes      
         this.findRoute()
    }
    _loadRoute(pathSegs){
        document.getElementById('header').innerHTML = header()  //Insert the header on any page always

        let matchedRoute = this._matchUrlToRoute(pathSegs)  //Find the route that have the right template
      
        if(matchedRoute === undefined){         //if the route didnt find we put the Error404
            matchedRoute = {
                template: () => error404()
            }
        }

       /*  const url = `/${pathSegs}`     */  
                             
       /*  history.pushState({},'',url)        //Push the url to the history */

        document.getElementById('main').innerHTML = matchedRoute.template()     //Finally render the right template for this route
    }
    _matchUrlToRoute(urlSegs){
       
        const matchedUrl = this.routes.find(route => {              //Find a route on our file of routes 
            const routePathSegs = route.path.split('/').slice(1)

            if(urlSegs[0].length !== routePathSegs[0].length){                //Validating the route untill found one or not
                return false
            }

            return routePathSegs.every((routePathSeg, i) => routePathSeg === urlSegs[i])
        })
        return matchedUrl
    }

    findRoute(){
        /* debugger */
        const hashName = window.location.hash.slice(1).split('/')[1] || ''      //Get the path or slock where we are and delete the '/'
        console.log(hashName)
     /*    const pathSegs = hashName.length > 1? pathName.slice(1) : '/'  */     //Get the path segmenting lacking only the name of the path  example path: '/whatever'  outcome : 'whatever'

        this._loadRoute([hashName])
    }
}

export default router