import NotFound from "../Pages/NotFound";

class Router {
  constructor(root, routes){
    this.root = root;
    this.routes = routes;

    this.init();
    this.route();
  }

  init() {
    window.addEventListener('click', event => {
      const link = event.target.closest('a');
      if(!link || !link.classList.contains('router')) return;

      event.preventDefault();
      const path = link.getAttribute('href') || 'NotFound';
      this.push(path);
    })

    window.addEventListener('popstate', (event) => {
      this.route();
    });
  }

  route(){
    const prefix = '/';
    const curPath = prefix + window.location.pathname.split('/')[1];
    const Component = this.routes[curPath] || NotFound;

    new Component(this.root);
  }

  push(path){
    window.history.pushState({}, '', path);
    this.route();
  }
}

export default Router;