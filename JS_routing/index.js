import Content from "./Content";
import Router from "./Router";

const root = document.querySelector('#root');
const nav = document.querySelector('#navigation');

const routes = [
  {path: '/', Component: Content},
  {path: '/menu1', Component: Content},
  {path: '/menu2', Component: Content},
];

const navList = makeNavigtaion(routes);
nav.appendChild(navList);


new Router(root, routes);

function makeNavigtaion(routes){

  const fragment = new DocumentFragment();

  routes.forEach(route => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = route.path;
    a.href = route.path;
    li.appendChild(a);
    fragment.append(li);
  });

  return fragment;
}

