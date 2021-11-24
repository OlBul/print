// ----------  MenuBurger  --------------------
const headerLink = document.querySelector('a.header__link');
headerLink.addEventListener('click', () => {
    headerLink.classList.toggle('active'); 
})

const burgerMenu = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
burgerMenu.addEventListener('click', () =>{
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

// ----------  TotalQuantity  --------------------
const leftTotalMinus = document.querySelector('.left__total-minus');
const leftTotalQuantity = document.querySelector('.left__total-quantity');
const leftTotalPlus = document.querySelector('.left__total-plus');
const leftTotalPrice = document.querySelector('.left__total-price');
const currency = document.querySelector('.currency');
const customSeal = document.querySelector('#seal');
const customStamp = document.querySelector('#stamp');
const customFacsimile = document.querySelector('#facsimile');
const newPrintDay = document.querySelector('.new-print__day');
const overprintPrintDay = document.querySelector('.overprint-print__day');
const facsimileDay = document.querySelector('.facsimile__day');
const newPrintHour = document.querySelector('.new-print__hour');
const overprintPrintHour = document.querySelector('.overprint-print__hour');
const facsimileHour = document.querySelector('.facsimile__hour');
const newStampDay = document.querySelector('.new-stamp__day');
const overprintStampDay = document.querySelector('.overprint-stamp__day');
const facsimileStampDay = document.querySelector('.facsimile-stamp__day');
const newStampHour = document.querySelector('.new-stamp__hour');
const overprintStampHour = document.querySelector('.overprint-stamp__hour');
const facsimileStampHour = document.querySelector('.facsimile-stamp__hour');
const newPrint = document.querySelector('#print');
const imprint = document.querySelector('#imprint');
const tomorrow = document.querySelector('#tomorrow');
const urgently = document.querySelector('#urgently');
const customButton = document.querySelectorAll('.custom-button')
const itemRowPrice = document.querySelector('.item-row__price')
//const leftText = document.querySelector('.left-text');

leftTotalMinus.addEventListener('click', clickMinus);
leftTotalPlus.addEventListener('click', clickPlus);



function clickMinus(){
    --leftTotalQuantity.value;  
    leftTotalPrice.innerHTML =  parseInt(itemRowPrice.innerHTML) * leftTotalQuantity.value + currency.innerHTML;    
    if (leftTotalQuantity.value <= 0){
        leftTotalMinus.setAttribute('disabled', true);       
    }   
};

function clickPlus(){
    ++leftTotalQuantity.value;      
         if(leftTotalQuantity.value >= 0){
            leftTotalMinus.removeAttribute('disabled');           
            leftTotalPrice.innerHTML =  parseInt(itemRowPrice.innerHTML) * leftTotalQuantity.value + currency.innerHTML;
    }    
};



customSeal.addEventListener('click', priceCustomSeal);
customStamp.addEventListener('click', pricecustomStamp);
customFacsimile.addEventListener('click', pricecustomFacsimile);

function priceCustomSeal(){    
    leftTotalPrice.innerHTML = newPrintDay.innerHTML;   
    itemRowPrice.innerHTML = newPrintDay.innerHTML; 
    leftTotalQuantity.value = 1;
    newPrint.removeAttribute('disabled');
    imprint.removeAttribute('disabled');
};


function pricecustomStamp(){
    leftTotalPrice.innerHTML = newStampDay.innerHTML;  
    itemRowPrice.innerHTML = newStampDay.innerHTML 
    newPrint.setAttribute('disabled', true);
    imprint.setAttribute('disabled', true);  
    leftTotalQuantity.value = 1;
};

function pricecustomFacsimile(){
    leftTotalPrice.innerHTML = facsimileStampDay.innerHTML;
    itemRowPrice.innerHTML = facsimileStampDay.innerHTML
    newPrint.setAttribute('disabled', true);
    imprint.setAttribute('disabled', true);
    leftTotalQuantity.value = 1;
};

newPrint.addEventListener('click', priceNewPrint);
imprint.addEventListener('click', priceImprint)

function priceNewPrint(){    
        leftTotalPrice.innerHTML = newPrintDay.innerHTML; 
        itemRowPrice.innerHTML = newPrintDay.innerHTML;   
        leftTotalQuantity.value = 1;
};

function priceImprint(){    
        leftTotalPrice.innerHTML = overprintPrintDay.innerHTML; 
        itemRowPrice.innerHTML = overprintPrintDay.innerHTML; 
        leftTotalQuantity.value = 1;  
};


tomorrow.addEventListener('click', priceTomorrow);
urgently.addEventListener('click', priceUrgently);

function priceTomorrow(){
    
    if (customSeal.checked && newPrint.checked){
        leftTotalPrice.innerHTML = newPrintDay.innerHTML + currency.innerHTML;
    } else if (customSeal.checked && imprint.checked){
        leftTotalPrice.innerHTML = overprintPrintDay.innerHTML + currency.innerHTML;
    }else if (customStamp.checked){
        leftTotalPrice.innerHTML = newStampDay.innerHTML;
    }else if (customFacsimile.checked){
        leftTotalPrice.innerHTML = facsimileStampDay.innerHTML;
    }
};

function priceUrgently(){
    if (customSeal.checked && newPrint.checked){
        leftTotalPrice.innerHTML = newPrintHour.innerHTML + currency.innerHTML;
    } else if (customSeal.checked && imprint.checked){
        leftTotalPrice.innerHTML = overprintPrintHour.innerHTML + currency.innerHTML;
    }else if (customStamp.checked){
        leftTotalPrice.innerHTML = newStampHour.innerHTML;
    }else if (customFacsimile.checked){
        leftTotalPrice.innerHTML = facsimileStampHour.innerHTML;
    }
};







/*leftTotalMinus.addEventListener('click', getNumberMinus);
leftTotalPlus.addEventListener('click', getNumberPlus);

function getNumberMinus(){
    const price =0;
    leftTotalQuantity.value = --leftTotalQuantity.value;  
    price += parseInt(leftTotalPrice.innerHTML) * leftTotalQuantity.value + currency.innerHTML;
    leftTotalPrice.innerHTML =  price;   
        if (leftTotalQuantity.value <= 0){      
        leftTotalMinus.setAttribute('disabled', true);   
        }    
};

function getNumberPlus(){
    const price = 0;
    leftTotalQuantity.value = ++leftTotalQuantity.value;
    price += parseInt(leftTotalPrice.innerHTML) * leftTotalQuantity.value + currency.innerHTML;
    leftTotalPrice.innerHTML = price;
   if (leftTotalQuantity.value > 0){
        leftTotalMinus.removeAttribute('disabled');
    }    
};

customSeal.addEventListener('click', function(){
    leftTotalPrice.innerHTML = newPrintDay.innerHTML;
    newPrint.removeAttribute('disabled');
    imprint.removeAttribute('disabled');
    leftTotalQuantity.value = 1;
});

customStamp.addEventListener('click', function(){
    leftTotalPrice.innerHTML = newStampDay.innerHTML;
    newPrint.removeAttribute('disabled');
    imprint.removeAttribute('disabled');
    leftTotalQuantity.value = 1;
});

customFacsimile.addEventListener('click', function(){
    leftTotalPrice.innerHTML = facsimileStampDay.innerHTML;
    leftTotalQuantity.value = 1;
    if (leftTotalPrice.innerHTML == facsimileStampDay.innerHTML){
        newPrint.setAttribute('disabled', true);
        imprint.setAttribute('disabled', true);         
    } 
});

newPrint.addEventListener('click', function(){
    leftTotalPrice.innerHTML = newPrintDay.innerHTML; 
       
});


imprint.addEventListener('click', function(){
    leftTotalPrice.innerHTML = overprintPrintDay.innerHTML;  
});

tomorrow.addEventListener('click', function(){

})*/