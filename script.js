let websiteName = document.getElementsByTagName("input")[0];
let websiteUrl = document.getElementsByTagName("input")[1];
var deleteButtonList = document.querySelectorAll(".delete");
let submitButton = document.querySelector(".submit");
let bookmarkList = document.getElementsByClassName("list")[0];


const addNewBookmark = () => {
    let newBookmark = document.createElement("div");
    bookmarkList.appendChild(newBookmark);
    newBookmark.className = "sub container";
    let h4 = document.createElement("h4");
    h4.appendChild(document.createTextNode(websiteName.value));
    let a = document.createElement("a");
    a.href = websiteUrl.value;
    let h5 = document.createElement("h5");
    h5.appendChild(document.createTextNode(`(${websiteUrl.value})`));
    let visitButton = document.createElement("button");
    visitButton.appendChild(document.createTextNode("Visit"));
    visitButton.className = "btn visit";
    a.appendChild(visitButton);
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn delete";
    deleteButton.appendChild(document.createTextNode("Delete"))
    newBookmark.appendChild(h4);
    newBookmark.appendChild(h5);
    newBookmark.appendChild(a);
    newBookmark.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
        deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode)
    })
    // deleteButton.onclick = deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
    deleteButtonList = document.querySelectorAll(".delete")
    websiteUrl.value = ""
    websiteName.value = ""
}


const addNewBookmarkAfterClick = () => {
    if (websiteName.value.length > 0 && websiteUrl.value.length > 0) {
        if (isUrlValid(websiteUrl.value) === true) {
            addNewBookmark();
        } else {
            alert("Enter a valid URL")
        }
    } else {
        alert("Please fill empty boxes.");
    }
}


const isUrlValid = (str) => {
    try {
        url = new URL(str);
    }
    catch{
        return false;
    }
    return true;
}


const addNewBookmarkAfterKeypress = (event) => {
    if (event.keyCode === 13) {
        if (websiteName.value.length > 0 && websiteUrl.value.length > 0) {
            // event.preventDefault();
            if (isUrlValid(websiteUrl.value) === true) {
                addNewBookmark();
            }
            else {
                alert("Please enter a valid URL")
            }
        } else {
            alert("Please fill empty boxes.");
        }

    }
}


submitButton.addEventListener("click", addNewBookmarkAfterClick);
websiteUrl.addEventListener("keypress", addNewBookmarkAfterKeypress);
websiteName.addEventListener("keypress", addNewBookmarkAfterKeypress)


