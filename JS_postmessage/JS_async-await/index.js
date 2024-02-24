const prefixURL = `https://jsonplaceholder.typicode.com`;
const jsonToJsObject = (res) => {
  return res.json();
};
// 프로미스를 사용한 예시
function getUserNameFromPostId(postId) {
  // debugger;
  return fetch(`${prefixURL}/posts/${postId}`)
    .then(jsonToJsObject)
    .then((post) => post.userId)
    .then((userId) => {
      return fetch(`${prefixURL}/users/${userId}`)
        .then(jsonToJsObject)
        .then((user) => usor.name);
    });
}

getUserNameFromPostId(1)
  .then((name) => console.log("name:", name))
  .catch((err) => {
    console.log(err);
    // ReferenceError: usor is not defined
    //       at index.js:13:30
  });

// async/await를 사용한 예시
async function getUserNameFromPostId2(postId) {
  // debugger;
  const postRes = await fetch(`${prefixURL}/posts/${postId}`);
  const post = await jsonToJsObject(postRes);
  const { userId } = post;
  const userRes = await fetch(`${prefixURL}/users/${userId}`);
  const user = await jsonToJsObject(userRes);
  return usor.name;
}

getUserNameFromPostId2(1)
  .then((name) => console.log("name:", name))
  .catch((err) => {
    console.log(err);
    // ReferenceError: usor is not defined
    //    at getUserNameFromPostId2 (index.js:32:3)
  });
