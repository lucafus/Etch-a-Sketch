    const container = document.getElementById('grid');
    const btnr = document.getElementById('reset');
    const btne = document.getElementById('edit');


    btne.addEventListener("click", function() {

    container.innerHTML = "";

    let userinput = prompt("Type you size: ");




    if (userinput > 0 && userinput <= 100) {alert(`We are going to create a grid of ${userinput} x ${userinput} `);}
    else { alert("Please select a value between 100 and 1");
    return;}



    

        for (let i = 1; i < userinput * userinput; i++) {
            const gridItem = document.createElement('div');
            container.appendChild(gridItem);
            gridItem.className = 'grid-item';



            gridItem.addEventListener("mouseenter", (event) => {
                event.target.style.backgroundColor = "red";
            });

            btnr.addEventListener("click", () => {
                gridItem.style.backgroundColor = "white";
            });
                

        };

        
    });


