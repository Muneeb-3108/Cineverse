document.getElementById('view-more-btn').onclick = function() {
    document.getElementById('popup').style.display = "block";
}

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}