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
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
}


//Do the same thing with async await function


const userDataAsinc = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log('data load error');
    }
}


userDataAsinc();