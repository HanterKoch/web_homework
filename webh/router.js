class Router{
    static inst = null;
    constructor(){
        this.rout = new Map();
    }
    static create(){
        if(!Router.inst) Router.inst = new Router();
        return Router.inst;
    }

    serveRouter(method, url){
        function error(){};
        return this.rout.has(`${method} ${url}`) ?  this.rout.get(`${method} ${url}`) : error;
    }

    appendRouter(method, url, func){
        function error(){};
        return (typeof(method) != 'string' && typeof(url) != 'string') ? error : this.rout.set(`${method} ${url}`, func);
    }

}

module.exports = Router;