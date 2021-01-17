class router{
    constructor(routes){
        this.routes = routes
        this._initialRoute()
    }

    _initialRoute(){
        const pathName = window.location.pathname.split('/')
        const pathSegs = pathName.length > 1? pathName.slice(1) : ''

        this.loadRoute(...pathSegs)
    }
}