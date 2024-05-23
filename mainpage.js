// create a function to update the date and time

// create a new `Date` object
const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();
console.log(currentDateTime)
// update the `textContent` property of the `span` element with the `id` of `datetime`
document.getElementById('k39dt').innerHTML = currentDateTime;

const nam = localStorage.getItem('name');
const avlocation = localStorage.getItem('loc');

document.getElementById('k39name').textContent = nam
document.getElementById('avloc').textContent = avlocation