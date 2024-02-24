import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Router from "./Router";
import { makeRoutes } from "./utils";

const root = document.querySelector('#root');
const nav = document.querySelector('#navigation');

const routes = {
  '/': Home,
  '/service': Service,
  '/contact': Contact,
};

const navList = makeRoutes(routes);
nav.appendChild(navList);


new Router(root, routes);
