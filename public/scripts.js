// JavaScript functionality for the website

// This code implements basic functionalities such as event listeners, form validation, etc.

document.addEventListener('DOMContentLoaded', function () {
    console.log('Document is ready!');

    // Example functionality: Show an alert on button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function () {
            alert('Button clicked!');
        });
    }
});