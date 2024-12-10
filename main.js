const priceInput = document.querySelector(".price-input");
const tipInput = document.querySelector(".Tip-input");
const btnCalc = document.querySelector(".calculate");
const totalSpan = document.querySelector(".Total-input")


function calculateTotal(){
    const priceInputValue = priceInput.value;
    const tipInputValue = tipInput.value;
    const totalValue = priceInputValue *(1 + tipInputValue/100);
    totalSpan.innerText = totalValue.toFixed(2);
    totalSpan.classList.add("changed");
    setTimeout(()=>{
        totalSpan.classList.remove("changed")
    }, 500)
}

btnCalc.addEventListener("click", calculateTotal)