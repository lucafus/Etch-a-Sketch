
const container = document.getElementById('container');

const btnr = document.getElementById('reset');


for (let i = 1; i < 897; i++) {
    const gridItem = document.createElement('div')
    container.appendChild(gridItem);
    gridItem.className = 'grid-item';
    gridItem.addEventListener ("mouseenter",
    (event) => {
        event.target.style.backgroundColor = "red";
            }
    
            );

    btnr.addEventListener("click", () => {
        gridItem.style.backgroundColor = "white";
        });

     };



