//Maxim Suleac did this
//get the item comments from local storage
var comments = window.localStorage.getItem('comments');
var commentsArray = [];
//if statment
if(comments !== null) {
    //splits up all the vlaues spliting it on the comma
    commentsArray = comments.split(',');
    //looks through each comment and adds it into a list
    commentsArray.forEach(comment => {
        var li = document.createElement("li");
        var text = document.createTextNode(comment);
        li.appendChild(text);
        li.className = "comment-style";
        document.getElementById("comments-section").appendChild(li);
    })
}

//debug testing
console.log('Comments: ', commentsArray);
console.log('Comments: ', typeof(comments));


//varible being set to get the id "post" for the button
var post = document.getElementById("post");
//it keeps track of the click on the button by using a function
post.addEventListener("click", function () {
    //varible being set to get the value of the comment box
    var commentBoxValue = document.getElementById("comment-box").value;

    //creating a varible that references newly created li
    var li = document.createElement("li");
    //gets the text from commentBoxValue
    var text = document.createTextNode(commentBoxValue);
    //adds new comments to the array/collection
    commentsArray.push(commentBoxValue)
    //saves the comments to local storage
    window.localStorage.setItem('comments', commentsArray);
    //function being called to set li text
    li.appendChild(text);
    // set li class
    li.className = "comment-style";
    // add li to the comments section
    document.getElementById("comments-section").appendChild(li);
});
