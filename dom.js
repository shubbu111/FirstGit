//Examine the document object
//console.dir(document);

// console.log(document.dommain);
// console.log(document.URL);
// console.log(document.title)
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.getElementById('header-title'));

// GetElementById
// let headerTitle = document.getElementById('header-title')
// let header = document.querySelector('header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Okay';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>shubham</h3>'
// header.style.border ='solid 3px #000'

// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Hello 3';
// items[2].style.fontWeight = 'Bold';
// items[2].style.backgroundColor = 'green';
// // if you want to change background color for all the class then you have to iterate means you have to create a loop 
// for(let i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = 'grey'
// }

//GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].textContent = 'hello 2';
// li[2].style.fontWeight = 'Bold';
// li[2].style.backgroundColor = 'yellow';
// // if you want to change background color for all the class then you have to iterate means you have to create a loop 
// for (let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'blue';
// }

//Query Selector//
// var header1 = document.querySelector('#main-header');
// header1.style.border = 'solid 4px #000'
// var input = document.querySelector('input')
// input.value = 'Hello, World';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'
// var item = document.querySelector('.list-group-item')
// item.style.color = 'blue';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// Query SelectorAll
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'grey'
// }
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<even.length; i++){
//     even[i].style.backgroundColor = 'Red';
// }


// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].style.fontWeight = 'Bold';
// li[2].style.backgroundColor = 'green';

// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight = 'Bold';
// }

// li[2].style.fontWeight = 'Bold';
// li[1].style.backgroundColor = 'green'
// li[2].style.display = 'none'

//Traversing the DOM
var itemList = document.querySelector('#items');
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "grey";
console.log(itemList.parentNode.parentNode);

// parentElement 
// parentElement and parentNode for the most part are interchangeable
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'green';
console.log(itemList.parentElement.parentElement);

// ChildNodes
console.log(itemList.childNodes);
// it is better to use chikdren then childNodes

// Children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'red';

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//lastchild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'blue';

//// create Element
//create div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'Hello';

// add ID 
newDiv.id = 'hello1';

// add attributes
newDiv.setAttribute('title', 'Hello Div');

// create node text
var newDivText = document.createTextNode('HEllo');

// add text to div means use append
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

// var items = document.getElementById('items')

// items.innerhtml = '<li>hello world</li>' + items
// console.log(items)

var newli = document.createElement('li');
var newliText = document.createTextNode('hello');
newli.appendChild(newliText);
var hello = document.querySelector('ul .items');
var h2 = document.querySelector('ul h2');

hello.insertBefore(newli, h2);



