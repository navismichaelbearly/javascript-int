function getUsers() {
    // return fetch('https://jsonplaceholder.typicode.com/users',{
    //     method: "GET",
    //     headers: { "Content-Type": "application/json"}
    // }).then(res => res.json())
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId){
    // return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    //     method: "GET",
    //     headers: { "Content-Type" : "application/json"}
    // }).then(res => res.json())
    return getFetch('https://jsonplaceholder.typicode.com/posts',{userId: userId})
}

function getFetch(url,params = {}) {
    
    //FETCH API IMPLEMENTATION
    /*
    const queryString = Object.entries(params).map(param=>{
        return `${param[0]}=${param[1]}`
    }).join("&")
    return fetch(`${url}?${queryString}`,{
        method: "GET",
        headers: { "Content-Type" : "application/json"}
    }).then(res => res.json())
    */
    return axios({
        url: url,
        method: "GET",
        params: params
    }).then(res => res.data)
}

getUsers().then( users => {
    users.forEach(user => {
        getUserPosts(user.id).then( posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    });
})

console.log("bearly")