function userDataLoad() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => load(json));
}

function load(data) {
  const userDivElement = document.getElementById("user-list");
  for (const user of data) {
    console.log(data);
    const post = document.createElement("div");
    post.classList.add("user");

    post.innerHTML = `
          <h5>ID - ${user.id}</h5>
          <h4>${user.title}</h4>
          <p>${user.body}</p>
          `;

    userDivElement.appendChild(post);
  }
}
