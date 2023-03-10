function data() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => showData(json));
}
function showData(data) {
  console.log(data);
}
