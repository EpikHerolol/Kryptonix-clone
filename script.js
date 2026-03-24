

const amazonCards = document.querySelectorAll(".amazoncard");
amazonCards.forEach(card =>{
    const img = card.querySelector(".cardimg img");
    const btn = card.querySelector(".imgbtn1");
    console.log(card);
    console.log(img);
    card.addEventListener("mouseenter", ()=>{
        const txt = btn.querySelector(".imgbtn1_txt");
        img.classList.add("cardimg_hover");
        img.classList.remove("cardimg_leave");
        
        txt.classList.add("change");
        setTimeout(()=>{
            btn.style.backgroundColor = "#e65c2e";
            txt.innerText="Add To Cart";
            txt.classList.remove("change");
        },200); 
    })
    card.addEventListener("mouseleave", ()=>{
        const txt = btn.querySelector(".imgbtn1_txt");
        img.classList.remove("cardimg_hover");
        img.classList.add("cardimg_leave");
        
        txt.classList.add("change");
        setTimeout(()=>{
            btn.style.backgroundColor = "#7FD07E";
            txt.innerText="In Stock";
            txt.classList.remove("change");
        },200);
    });
});
