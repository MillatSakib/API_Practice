console.log("connected");

/*function loadData()*/ {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(response => response.json())
        .then(json => userData(json))
}


function userData(users) {
    const ul = document.getElementById('allUsers');

    for (user of users) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
}