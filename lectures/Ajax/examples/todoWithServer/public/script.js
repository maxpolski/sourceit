/*
    GET localhost:3000/todos?a=3&b=fajsdfalksfjd&c=4
    POST localhost:3000/todo
        body: {
            todo: {
                title: <String>
            }
        }
    PUT
    DELETE
    OPTIONS

    скинуть ссылку на методы запросов
*/

const xhr = new XMLHttpRequest();
xhr.open('GET', '/todos', true);
xhr.send();
xhr.onreadystatechange = (event) => {
  console.log(event);
};
