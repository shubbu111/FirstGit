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


var li = document.getElementsByTagName('li');
console.log(li);
// console.log(li[2]);
// li[2].style.fontWeight = 'Bold';
// li[2].style.backgroundColor = 'green';

// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight = 'Bold';
// }

li[4].style.fontWeight = 'Bold';
li[4].style.backgroundColor = 'grey'

// GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Hello 3';
// items[2].style.fontWeight = 'Bold';
// items[2].style.backgroundColor = 'green';
// items[3].textContent = 'Hello 3';