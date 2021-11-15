import './style.scss';
import form from './form';
import list from './list';

// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code.
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function(){
//       resolve("Success!"); // Yay! Everything went well!
//     }, 5000);
// });

// myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage);
// });
document.addEventListener('DOMContentLoaded', async () => {

  const ulEl = document.querySelector('#list');

  const formEl = document.createElement('div');
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  ulEl.innerHTML= await list.render();

  
  if (module.hot) {
    module.hot.accept("./list", async () => {
      console.log("list 모듈 변경됨");
      ulEl.innerHTML= await list.render();
    })
  }
});

