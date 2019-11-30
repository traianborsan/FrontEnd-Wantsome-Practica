const div = document.querySelector('div');
div.className = 'alert';

const secondDiv = document.querySelector('.active');
// //add hidden class
secondDiv.classList.add('hidden')
secondDiv.classList.toggle('hidden')
secondDiv.classList.remove('hidden');

secondDiv.classList.replace('active', 'alert')