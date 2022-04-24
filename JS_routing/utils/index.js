function makeRoutes(routes){
  const fragment = new DocumentFragment();

  Object.keys(routes).forEach(path => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.classList.add('router');
    a.textContent = path === '/' ? 'Home' : path.slice(1);
    a.href = path;
    li.appendChild(a);
    fragment.append(li);
  });

  return fragment;
}

export { makeRoutes };