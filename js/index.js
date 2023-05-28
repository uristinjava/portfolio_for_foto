
const list = document.querySelectorAll('.list') //Коллекция элементов li

function addClassActive() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}

list.forEach(e => {
    e.classList.remove('.active');
    e.addEventListener('click', addClassActive)
})