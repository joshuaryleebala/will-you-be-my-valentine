document.getElementById('noButton').addEventListener('click', () => {
    const noButton = document.getElementById('noButton');
    noButton.innerText = "YESS!!!";
    noButton.style.backgroundColor = '#66bb6a';
    noButton.style.transform = 'scale(1.5)';
    noButton.onclick = () => showYay();
});

document.getElementById('yesButton').addEventListener('click', showYay);

function showYay() {
    document.querySelector('.container').innerHTML = '<div id="message">ok CUTE! 💋</div>';
};