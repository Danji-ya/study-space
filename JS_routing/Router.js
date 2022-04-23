class Router {

  constructor(root, routes){
    this.root = root;
    this.routes = new Set(routes);

    this.init();
    this.route();
  }

  init() {
    // TODO: Link같은 역할 (새로고침 없이)

    // TODO: 브라우저 버튼 클릭시 
  }

  route(){
    const curPath = window.location.pathname.slice(1).split('/')[0];
    const route = [...this.routes].find(route => route.path.slice(1).split('/')[0] === curPath);
    const {Component, path} = route;

    // TODO: path 체크 강화

    new Component(this.root, {name: path});
  }
}

export default Router;