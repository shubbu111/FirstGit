var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event 
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems)
// Add Item

function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deletebtn = document.createElement('button');

    // add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete'

    // append text node
    deletebtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deletebtn);

    //append li to list
    itemList.appendChild(li);

    // create edit button
    var editbtn = document.createElement('button')
    //add classed to edit button
    editbtn.className = 'btn btn-danger btn-sm float-right delete'
    //append text node
    editbtn.appendChild(document.createTextNode('Edit'));
    //append button to li
    li.appendChild(editbtn);
    //append li to button
    editbtn.appendChild(li);
}

// remove item 
function removeItem(e){
    // e.target.classList.contains('delete') we want to check what we click contains class delete
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get li's
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}





