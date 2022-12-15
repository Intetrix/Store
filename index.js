let auto = document.querySelector('.authorization');

function authoForm () {
    auto.classList.toggle("active");
}

auto.addEventListener('click', closeForm);

function closeForm (event) {
    let pres = event.target.classList.contains("active");
    if(pres) {
        auto.classList.remove("active");
        return;
    } 
}
