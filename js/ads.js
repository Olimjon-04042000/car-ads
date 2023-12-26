const carName = document.getElementById('carName');
const carYear = document.getElementById('carYear');
const carColor = document.getElementById('carColor');
const carPrice = document.getElementById('carPrice');
const backbtn = document.getElementById("backbtn");
const btn = document.getElementById("btn");

const form = document.getElementById('form');

function validate() {

    if (!carName.value) {

        carName.style.outlineColor = 'red';
        carName.focus();
        return;
    }

    if (!carYear.value) {
        carYear.focus();
        carYear.style.outlineColor = 'red';
        return;
    } else if (carYear.value <= 1960 || carYear.value >= new Date().getFullYear() + 1) {
        alert("Yilni noto'g'ri kiritdingiz.Iltimos qaytadan kiriting.");
        carYear.focus();
        carYear.value = '';
        carYear.style.outlineColor = 'red';
        return;
    }

    if (!carColor.value) {
        carColor.style.outlineColor = 'red';
        carColor.focus();
        return;
    }

    if (!carPrice.value) {
        carPrice.style.outlineColor = 'red';
        carPrice.focus();
        return;
    } else if (carPrice.value <= 500) {
        alert("Narxni noto'g'ri kiritdingiz.Iltimos qaytadan kiriting.");
        carPrice.focus();
        carPrice.value = '';
        carPrice.style.outlineColor = 'red';
        return;
    }
}

btn.addEventListener("click", function() {
    validate();
    let data = JSON.parse(localStorage.getItem('cars')) || [];

    if (carName.value && carYear.value && carColor.value && carPrice.value) {
        let newCar = {
            id: Date.now(),
            name: carName.value,
            year: carYear.value,
            color: carColor.value,
            price: carPrice.value,
            status: "Sotilmagan"
        }
        console.log(newCar);
        data.push(newCar);
        localStorage.setItem('cars', JSON.stringify(data));
        form.reset();
        alert("Ma'lumotlar saqlandi.");
    }
});

backbtn.addEventListener("click", function() {
    window.location.href = "./index.html";
});