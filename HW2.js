// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(postResults =>{
//         for (const posts of postResults){
//             let div = document.createElement('div');
//             div.classList.add('posts-box');
//             div.innerText = `${posts.userId} - ${posts.id} - ${posts.title} - ${posts.body}`
//             document.body.appendChild(div);
//         }
//     })
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(commentsResults =>{
//         for(const comments of commentsResults){
//             let div = document.createElement('div');
//             div.classList.add('comments-box');
//             div.innerText = `${comments.postId} - ${comments.id} - ${comments.name} - ${comments.email} - ${comments.body}`
//             document.body.appendChild(div);
//
//         }
//     })








let rules = [
    {
        title: 'The first rule of the Fight Club.',
        body: 'Dont tell anyone about the Fight Club.'
    },
    {
        title: 'The second rule of the Fight Club.',
        body: 'Never tell anyone about the Fight Club.'
    },
    {
        title: 'The third rule of the Fight Club.',
        body: 'Only two are involved in the fight.'
    },
    {
        title: 'The fourth rule of the Fight Club.',
        body: 'No more than one fight at a time.'
    },
    {
        title: 'Fifth Rule of the Fight Club.',
        body: 'Fighters fight barefoot and naked to the waist.'
    },
    {
        title: 'Sixth Rule of the Fight Club.',
        body: 'The fight lasts as long as it takes.'
    },
    {
        title: 'The Seventh Rule of the Fight Club.',
        body: 'If the opponent has lost consciousness or pretends to have lost, or says "Enough" - the fight is over.'
    },
    {
        title: 'Eighth and last rule of the Fight Club.',
        body: 'A novice must accept a fight.'
    },

];

let createTitle = function (rule){
    let paragraph = document.createElement('p1');
    paragraph.innerText = `${rule.title}\n`;
    document.body.appendChild(paragraph)
}

let createBody = function (rule){
    let body = document.createElement('p1');
    body.innerText = `${rule.body}\n\n`;
    document.body.appendChild(body)
}

let mapRules = rules.map(function(rule){
    createTitle(rule);
    createBody(rule);
});
