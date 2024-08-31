let elUsersList = document.querySelector(".users-list");


// Users Part start
fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
    renderUsers(data);
})

function renderUsers(arr){
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-2 rounded-lg bg-slate-300"
        elItem.innerHTML = `
            <p><strong>ID:</strong> ${item.id}</p>
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Username:</strong> ${item.username}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Phone Number:</strong> ${item.phone}</p>
            <button onclick="handlePostShow(${item.id})" class="bg-green-600 text-white font-bold border-none w-full p-2 rounded-lg mt-3">Show Posts</button>
        `
        elUsersList.appendChild(elItem);
    });
}

// Users Part end

// Posts Part start
let elPostsList = document.querySelector(".posts-list")

function handlePostShow(id){
    let loadingText = document.createElement("span");
        loadingText.textContent = "Loading...";
        loadingText.style.color = "white";
        elPostsList.innerHTML = ""; 
        elPostsList.appendChild(loadingText);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {
            setTimeout(() => renderPosts(data), 500)
        });
}
function renderPosts(arr){
    elPostsList.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-2 rounded-lg bg-slate-300"
        elItem.innerHTML = `
            <p><strong>ID:</strong> ${item.id}</p>
            <p><strong>User ID:</strong> ${item.userId}</p>
            <p><strong>Title:</strong> ${item.title}</p>
            <p><strong>Body:</strong> ${item.body}</p>
            <button onclick="handleCommentsShow(${item.id})"  class="bg-green-600 text-white font-bold border-none w-full p-2 rounded-lg mt-3">Show Comments</button>
        `
        elPostsList.appendChild(elItem);
    });
}


// Posts Part end



// Comments Part start


let elCommentsList = document.querySelector(".comments-list")

function handleCommentsShow(id){
    let loadingText = document.createElement("span");
        loadingText.textContent = "Loading...";
        loadingText.style.color = "white";
        elCommentsList.innerHTML = ""; 
        elCommentsList.appendChild(loadingText);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => res.json()).then(data => {
            setTimeout(() => renderComments(data), 500)
        });
}
function renderComments(arr){
    elCommentsList.innerHTML = null
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-2 rounded-lg bg-slate-300"
        elItem.innerHTML = `
            <p><strong>ID:</strong> ${item.id}</p>
            <p><strong>User ID:</strong> ${item.postId}</p>
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Body:</strong> ${item.body}</p>
            <p><strong>Email:</strong> ${item.email}</p>
        `
        elCommentsList.appendChild(elItem);
    });
}


// Comments Part end