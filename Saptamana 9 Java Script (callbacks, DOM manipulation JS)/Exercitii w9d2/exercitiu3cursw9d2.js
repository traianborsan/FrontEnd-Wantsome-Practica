//Step 1
const list = document.querySelector('ul');
// step 2
// create new list item
const newItem = document.createElement('li');
newItem.textContent = 'Python';
// // add new item in our dom
list.appendChild(newItem);

// create another li item
const anotherNewItem = document.createElement('li');
anotherNewItem.textContent = '.Net'
list.insertBefore(anotherNewItem, list.firstElementChild)

// // modify item
const modifiedItem = document.createElement('li');
modifiedItem.textContent = 'More Javascript!';
list.replaceChild(modifiedItem, list.children[0]);

list.removeChild(list.lastElementChild);
// list.remove();