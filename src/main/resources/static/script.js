/* run on page load */
countChar();

/*
function countChar oninput
 */
function countChar() {
    /* retrieve max length from comment attribute */
    const maxLength = petition.getAttribute('maxlength');
    counter.textContent = maxLength - petition.value.length;
}


/*
id attributes in tags can be called as global variables
https://html.spec.whatwg.org/multipage/nav-history-apis.html#named-access-on-the-window-object
const commentList = document.getElementById('commentList');
 */