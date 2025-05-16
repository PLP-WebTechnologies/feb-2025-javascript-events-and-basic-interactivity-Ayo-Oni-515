let eventButton = document.getElementById('event-button');
let eventParagraph = document.getElementById('event-paragraph');


eventButton.addEventListener('click', () => {
    if (eventParagraph.style.fontSize == '1rem'){
        eventButton.textContent = 'Reset';
        eventParagraph.style.fontSize = '3rem';
    } else {
        eventButton.textContent = 'Click Me';
        eventParagraph.style.fontSize = '1rem';
    }
})
