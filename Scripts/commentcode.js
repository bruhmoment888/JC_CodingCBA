//Maxim Suleac did this
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
    //function being called to set li text
    li.appendChild(text);
    // set li class
    li.className = "comment-style";
    // add li to the comments section
    document.getElementById("comments-section").appendChild(li);
});
