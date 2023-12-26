const tbody = document.getElementById("tbody");
const cars = document.getElementById('cars');
const year = document.getElementById('year');
const color = document.getElementById('color');
const price = document.getElementById("price");
const status = document.getElementById('status');
const btn = document.getElementById('btn');
const update = document.querySelectorAll('#update');

function createRow(data) {
    let abs = "";
    if (data.length) {
        data.forEach((el, index) => {
            let trRow = `
            <tr>
                <td>${index+1}</td>
                <td>${el.name}</td>
                <td>${el.year}</td>
                <td>${el.color}</td>
                <td>${el.price}</td>
                <td>${el.status}</td>
                <td id='id_${el.id}'>
                    <span id="delete">O'chirish <i class="fa-regular fa-trash-can"></i> </span>
                    <span id="update">Tahrirlash <i class="fa-regular fa-pen-to-square"></i></span>
                </td>
            </tr>`
            abs += trRow;
        })
    }
    tbody.innerHTML += abs;
};

cars.addEventListener('change', function() {
    let car = this.value;
    let data = JSON.parse(localStorage.getItem('cars')) || [];
    if (data.length) {
        let carsFilter = data.filter(el => {
            return this.value == el.name;
        });

        tbody.innerHTML = " ";
        createRow(carsFilter);
    }

    if (car == "Hammasi") {
        createRow(data);
    }
})

year.addEventListener('change', function() {
    let yearValue = this.value;
    let data = JSON.parse(localStorage.getItem('cars')) || [];
    if (data.length) {
        let yearFilter = data.filter(el => {
            return yearValue != "Hammasi" && +yearValue <= el.year && +yearValue + 10 >= el.year;
        })
        tbody.innerHTML = " ";
        createRow(yearFilter);
    }
    if (yearValue == "Hammasi") {
        createRow(data);
    }
})

color.addEventListener('change', function() {
    let colorValue = this.value;
    let data = JSON.parse(localStorage.getItem('cars')) || [];
    if (data.length) {
        let colorFilter = data.filter(el => {
            return colorValue == el.color;
        })
        tbody.innerHTML = " ";
        createRow(colorFilter);
    }

    if (colorValue == "Hammasi") {
        createRow(data);
    }
})

price.addEventListener('change', function() {
    let priceValue = this.value;
    let data = JSON.parse(localStorage.getItem('cars')) || [];
    if (data.length) {
        let priceFilter = data.filter(el => {
            return priceValue != "Hammasi" && +priceValue >= el.price && +priceValue - 2000 <= el.price;
        })
        tbody.innerHTML = '';
        createRow(priceFilter);
    }
    if (priceValue == "Hammasi") {
        createRow(data);
    }
})

status.addEventListener('change', function() {
    let statusValue = this.value;
    let data = JSON.parse(localStorage.getItem('cars')) || [];
    if (data.length) {
        let statusFilter = data.filter(el => {
            return statusValue == el.status;
        })
        tbody.innerHTML = '';
        createRow(statusFilter);
    }
    if (statusValue == "Hammasi") {
        createRow(data);
    }
})

btn.addEventListener('click', function() {
    window.location.href = "./ads.html";

})

window.onload = function() {

    let data = JSON.parse(localStorage.getItem('cars')) || [];

    createRow(data);

    const delBtn = document.querySelectorAll('#delete');
    if (delBtn.length) {
        delBtn.forEach(remove => {
            remove.addEventListener('click', function() {
                let removeId = this.parentNode.getAttribute('id').substring(3);
                let confirmm = confirm("Rostdan ham ushbu ma'lumotni o'chirmoqchimisiz?");
                if (confirmm) {
                    data = data.filter(car => {
                        return removeId != car.id;
                    })
                    localStorage.setItem('cars', JSON.stringify(data));
                    window.location.reload();
                }
            })
        })
    }
}