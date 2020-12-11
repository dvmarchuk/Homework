fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postResults =>{
        for (const posts of postResults){
            let div = document.createElement('div');
            div.classList.add('posts-box');
            div.innerText = `${posts.userId} - ${posts.id} - ${posts.title} - ${posts.body}`
            document.body.appendChild(div);
        }
    })

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commentsResults =>{
        for(const comments of commentsResults){
            let div = document.createElement('div');
            div.classList.add('comments-box');
            div.innerText = `${comments.postId} - ${comments.id} - ${comments.name} - ${comments.email} - ${comments.body}`
            document.body.appendChild(div);

        }
    })


