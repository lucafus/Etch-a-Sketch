    const grid = document.getElementById('grid');
    const btnr = document.getElementById('reset');
    const btne = document.getElementById('edit');
    const btnb = document.getElementById('black');
    const btnred = document.getElementById('red');


    btne.addEventListener("click", function() {

    grid.innerHTML = "";

    let userinput = prompt("Type you size: ");


    if (userinput > 0 && userinput <= 100) {alert(`We are going to create a grid of ${userinput} x ${userinput} `);}
    else { alert("Please select a value between 100 and 1");
    return;}

   

        for (let i = 1; i < userinput * userinput; i++) {
            const gridItem = document.createElement('div');
            grid.appendChild(gridItem);
            gridItem.className = 'grid-item';

            const itemSizePercentage = 100 / userinput;
            gridItem.style.width = `calc(${itemSizePercentage}%)`; // Consider border
            gridItem.style.height = `calc(${itemSizePercentage}%)`; // Consider border
  
            gridItem.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "red";
            });


            btnred.addEventListener("click", () => {
                gridItem.addEventListener("mouseenter", (event) => {
                    event.target.style.backgroundColor = "red";
                });
            });
         

            btnr.addEventListener("click", () => {
                gridItem.style.backgroundColor = "white";
            });


            btnb.addEventListener("click", () => {
                gridItem.addEventListener("mouseenter", (event) => {
                    event.target.style.backgroundColor = "black";
                });
            });
         
        };

        
    });


