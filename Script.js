document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('mousedown', onMouseDown);
});

function onMouseDown(event) {
    const element = event.target;
    const offsetX = event.clientX - element.getBoundingClientRect().left;
    const offsetY = event.clientY - element.getBoundingClientRect().top;

    function onMouseMove(event) {
        element.style.left = `${event.clientX - offsetX}px`;
        element.style.top = `${event.clientY - offsetY}px`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        playSound(element.id);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function playSound(elementId) {
    switch (elementId) {
        case 'guitar':
            document.getElementById('guitarSound').play();
            break;
        case 'computer':
            document.getElementById('computerSound').play();
            break;
    }
}
