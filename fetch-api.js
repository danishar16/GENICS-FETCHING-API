fetch("https://api-sports.io/documentation/nba/v2")
.then(response => response.json())
.then(jsonData => console.log(jsonData))

async function getData(){
    let response = await fetch("https://api-sports.io/documentation/nba/v2")
    return response.json();
}

getData()
.then(jsonData => console.log(jsonData))