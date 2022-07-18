// This event waits until the DOM has fully loaded, this in case the script tag is on the head tag.
document.addEventListener('DOMContentLoaded', function () {

    // Reurns an HTML Collection.
    // var titles = document.getElementsByClassName('title');

    // Check if the element is an Array or not.
    // console.log(Array.isArray(titles));

    // Convert HTML Collections to Aarray.
    // console.log(Array.isArray(Array.from(titles)));


    // Cycle through HTML Collections/Array (better than for loops)
    // Array.from(titles).forEach(function(item){
    //     console.log(item);
    // });

    // Query Selector, # -> ID, . -> Class. Just like CSS.
    // const wrap = document.querySelector('#wrapper');

    // const wmf = document.querySelector('#book-list li:nth-child(2) .name');

    // querySelector only returns one, you need to use querySelectorAll for multiples, returns a Node List.
    // var books = document.querySelectorAll('#book-list li .name')

    // books.forEach(function(book) {
    //     book.textContent += ' (book title)';
    // })

    const bookList = document.querySelector('#book-list');
    // bookList.innerHTML = '<h2>Books and more books...<h2>';
    // bookList.innerHTML += '<p>This is how you add HTML<p>';

    // const banner = document.querySelector('#page-banner');

    // console.log('#page-banner node type is:', banner.nodeType);
    // console.log('#page-banner node name is:', banner.nodeName);
    // console.log('#page-banner has child nodes:', banner.hasChildNodes());

    // cloneNode() needs to have true in order to clone the child elements nested, if false, only clones the original div.
    // const clonedBanner = banner.cloneNode(true);
    // console.log(clonedBanner);

    // go upwards the DOM.
    // console.log('the parent node is:', bookList.parentNode);
    // console.log('the parent node is:', bookList.parentElement.parentElement);

    // node all the children.
    // console.log(bookList.children);

    // next on cascading list. 
    // console.log('book-list next sibiling is:', bookList.nextElementSibling);

    const list = document.querySelector('#book-list ul');

    // delete books
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    // add book-list section.
    const addForm = document.forms["add-book"];

    // add books
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;

        // create Elements.
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add content.
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;

        // add classes.
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to document, order matters.
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    // hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', (e) => {
        if (hideBox.checked) {
            list.style.display = "none";
        } else {
            list.style.display = "block";
        }
    });

    // filter books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach((book) => {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else {
                book.style.display = "none";
            }
        });
    });

    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
        if (e.target.tagName == "LI") {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach((panel) => {
                if (panel == targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
});

