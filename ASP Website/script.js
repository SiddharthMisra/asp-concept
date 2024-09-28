document.getElementById('postButton').addEventListener('click', function() {
    const postContainer = document.getElementById('postContainer');
    const postInput = document.getElementById('postInput');
    
    if (postInput.value.trim() !== "") {
        const newPost = document.createElement('div');
        newPost.textContent = postInput.value;
        newPost.className = 'post'; // Apply the post class
        postContainer.prepend(newPost);
        postInput.value = "";  // Clear input after posting
    } else {
        alert("Please write something to post!");
    }
});
