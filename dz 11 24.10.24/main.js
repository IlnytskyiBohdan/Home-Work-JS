//  DZ 11.1

function createPifagorasTable(size) {
  const table = document.createElement("table");

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  document.getElementById("table-container").appendChild(table);
}

createPifagorasTable(10);

//  DZ 11.2

const textBlock = document.getElementById("textBlock");
const button = document.getElementById("colorToggleButton");

button.addEventListener("click", function () {
  textBlock.classList.toggle("newColor");

});

//  DZ 11.3

// const imageFolderPath = "./img";

// const images = [
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
//   "7.jpg",
//   "8.jpg",
//   "9.jpg",
// ];

// const randomIndex = Math.floor(Math.random() * images.length);
// const randomImage = images[randomIndex];
// const imageElement = document.getElementById("randomImage");

// imageElement.src = `${imageFolderPath}/${randomImage}`;

const imageFolderPath = "./img";


const randomIndex = Math.floor(Math.random() * 9) + 1;


const randomImage = `${randomIndex}.jpg`;

const imageElement = document.getElementById("randomImage");
imageElement.src = `${imageFolderPath}/${randomImage}`;

