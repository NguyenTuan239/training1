// Function to handle the next button logic
function handleNextButtonClick() {
    // Update lists to get the current state of the DOM
    let lists = document.querySelectorAll('.item2');
    document.getElementById('slide2').appendChild(lists[0]);

    setTimeout(function() {
        let list = document.querySelectorAll('.item1');
        let item = list[0];
        document.getElementById('slide1').appendChild(item);
    }, 100); // Small timeout for synchronization
}

// Function to handle the previous button logic
function handlePrevButtonClick() {
    // Update lists to get the current state of the DOM
    let lists = document.querySelectorAll('.item2');
    document.getElementById('slide2').prepend(lists[lists.length - 1]);

    setTimeout(function() {
        let list = document.querySelectorAll('.item1');
        let item = list[list.length - 1];
        document.getElementById('slide1').prepend(item);
    }, 100); // Small timeout for synchronization
}

// Initial event listeners
document.getElementById('nextButton').onclick = handleNextButtonClick;
document.getElementById('prevButton').onclick = handlePrevButtonClick;
document.getElementById('item2-list1-click').onclick = handleNextButtonClick;

// Variables to track mouse drag
let isDragging = false;
let startX = 0;
let isHandleNextButton = false;
let isHandlePrevButton = false;

// Handle mouse down event
function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX; // Capture the starting X position of the mouse
}

// Handle mouse move event
function handleMouseMove(event) {
    if (!isDragging) return;

    let currentX = event.clientX;
    let diffX = currentX - startX;

    // Determine the direction of the drag
    if (diffX < -50) { // Dragged left
        isHandleNextButton = true;
        isDragging = false; // Reset dragging state
    } else if (diffX > 50) { // Dragged right
        isHandlePrevButton = true;
        isDragging = false; // Reset dragging state
    }
}

// Handle mouse up event
function handleMouseUp() {
    isDragging = false; // Reset dragging state
    if(isHandleNextButton){
        handleNextButtonClick()
    }else if(isHandlePrevButton){
        handlePrevButtonClick()
    }
    isHandleNextButton = false;
    isHandlePrevButton = false;
}

// Attach event listeners for mouse drag
function attachMouseDragEvents() {
    const container = document.querySelector('.section-1')
    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}
attachMouseDragEvents();

document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.getElementById('reset');
    var dialog = document.getElementById('reset-dialog');
    var confirmButton = document.getElementById('confirm-reset');
    var cancelButton = document.getElementById('cancel-reset');

    // Show dialog
    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        dialog.style.display = 'block';
    });

    // Confirm reset and reload page
    confirmButton.addEventListener('click', function() {
        dialog.style.display = 'none';
        location.reload();
    });

    // Cancel reset
    cancelButton.addEventListener('click', function() {
        dialog.style.display = 'none';
    });

    // Close dialog if user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === dialog) {
            dialog.style.display = 'none';
        }
    });
});
// JavaScript to handle the scroll movement


    // const sec2List = document.getElementById('sec2-list');
    // const nextBt = document.getElementById('next-bt');
    // const prevBt = document.getElementById('prev-bt');
    
    // const scrollAmount = sec2List.querySelector('.continue-watch-item').offsetWidth + parseInt(getComputedStyle(sec2List).gap);

    // nextBt.addEventListener('click', () => {
    //     sec2List.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    // });

    // prevBt.addEventListener('click', () => {
    //     sec2List.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    // });