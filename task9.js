let slider = document.querySelector("#slider");
let next = document.querySelector("#nextBtn");
let prev = document.querySelector("#prevBtn");

let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsGaSwYZsm8KoZQBEOnA00Qb0Hr77rQe8CEZeEfkYJQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6jBl6qJ7Dcf2bn0lprSdeVUq3kPhfOg4wH14TraphQ&s"
];

let index = 0;

slider.src = images[index];

next.addEventListener("click", function () {
    index++;

    if (index >= images.length) {
        index = 0; 
    }

    slider.src = images[index];
});

prev.addEventListener("click", function () {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    slider.src = images[index];
});