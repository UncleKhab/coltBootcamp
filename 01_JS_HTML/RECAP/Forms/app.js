const commentForm = document.querySelector('#commentForm');
const commentsList = document.querySelector('#comments');
commentForm.addEventListener('submit' , function(e) {
    e.preventDefault();
    const user = this.elements.username.value;
    const comment = this.elements.comment.value;
    addComment(user, comment);
    this.reset();
})

const addComment = (user, comment) => {
    const newComment = document.createElement('li');
    const userString = document.createElement('b');
    const userComment = document.createElement('span');

    userString.append(user);
    userComment.append(`- ${comment}`);
    newComment.append(userString, userComment);
    commentsList.append(newComment);
}


