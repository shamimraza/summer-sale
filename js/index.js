let serial =1;
let total = 0;
function handleClick(target){
    const itemContainer = document.getElementById("name");
    const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
    const h1 = document.createElement("h1")
    h1.innerText =  `
    ${serial}. ${itemName}
    `;
    itemContainer.appendChild(h1)
    serial++;
    const price = target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText =total;
    const button = document.getElementById('make'); 

    if (total > 0) {
    button.removeAttribute('disabled');
    }
    const applyBtn = document.getElementById('apply-btn');
    if(total> 200){
        applyBtn.removeAttribute('disabled');
    }
    
}

function handleClickArea(target){
    const itemContainer = document.getElementById("name");
    const itemName= target.parentNode.childNodes[7].childNodes[3].childNodes[3].innerText;
    const h1 = document.createElement("h1")
    h1.innerText = `
        ${serial}. ${itemName}
    `;
    itemContainer.appendChild(h1)
    serial++;
    const price = target.parentNode.childNodes[7].childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText =total;
    const button = document.getElementById('make'); 

    if (total > 0) {
    button.removeAttribute('disabled');
    }
    const applyBtn = document.getElementById('apply-btn');
    if(total> 200){
        applyBtn.removeAttribute('disabled');
    }
    
}

function handleClickSite(target){
    const itemContainer = document.getElementById("name");
    const itemName= target.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText;
    const h1 = document.createElement("h1")
    h1.innerText = `
        ${serial}. ${itemName}
    `;
    itemContainer.appendChild(h1)
    serial++;
    const price = target.parentNode.childNodes[11].childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText =total;

    // const idValue = document.getElementById('total-price');
    // const is = idValue.innerText;
    // const isNumber = parseInt(is);
    const button = document.getElementById('make'); 

    if (total > 0) {
    button.removeAttribute('disabled');
    }
    const applyBtn = document.getElementById('apply-btn');
    if(total> 200){
        applyBtn.removeAttribute('disabled');
    }

}

function couponHandle(){
    const inputField = document.getElementById('input-field');
    if(inputField.value == 'SELL200'){
        inputField.value= '';
        const discount = (total * 0.2).toFixed(2);
        const discountValue = document.getElementById('discount-value');
        discountValue.innerText= discount;
        const totalAmount = total - discount;
        const totalAmountCard = document.getElementById('total-value');
        totalAmountCard.innerText =totalAmount;
    }else{
        alert('Please Provide a valid Coupon Code')
    }
}





























































// function checkAndEnable() {
//     // Simulating the condition SELL200
//     var conditionMet = true;  // Set to true for demonstration purposes
  
//     if (conditionMet) {
//       var button = document.getElementById("sellButton");
//       button.disabled = true;  // Disable the button
  
//       setTimeout(function() {
//         button.disabled = false;  // Enable the button again after a delay
//         alert("Button is enabled again!");
//       }, 3000);  // Delay in milliseconds (3 seconds in this case)
//     }
//   }