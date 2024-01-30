const bilAmount = document.querySelector('#amounts')
// console.log(bilAmount)
const noOfPeople = document.querySelector('.noOf')
const genBill = document.querySelector('#gen-bill')
const reset = document.querySelector('#reset')

const eachPersonBill = document.querySelector('.each-per span')
const total = document.querySelector('.total span')
const tipAmount = document.querySelector('.tip-amount span')
const custip = document.querySelector('.cus-tip ')
const tipcon = document.querySelector('.tip-con')
let tipPercentage


genBill.addEventListener('click',()=>{
    // console.log('hello')
    const billamount= parseInt(bilAmount.value)
    console.log(billamount)
    const numberOfPeople = parseInt(noOfPeople.value)
    // const cusTip = parseInt(custip.value)

    
    const totalBill = billamount+billamount*tipPercentage/100
    const tip = billamount*tipPercentage/100
    const eachBill = totalBill/numberOfPeople
    // console.log(eachBill)

    eachPersonBill.innerText = `₹ ${eachBill}`
    total.innerText = `₹ ${totalBill}`
    tipAmount.innerText= `₹ ${tip}`
})

tipcon.addEventListener('click',(e)=>{
    
    if(e.target !== tipcon){
        // console.log(e.target);
        // console.log(e.target.innerText)
        // console.log(parseInt(e.target.innerText))
        [...tipcon.children].forEach((tip)=> tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.innerText)
        // console.log(tipPercentage)
        custip.value=" "
        
    }

})

custip.addEventListener('input',()=>{
    tipPercentage = parseInt(custip.value);
    [...tipcon.children].forEach((tip)=> 
    tip.classList.remove('selected'))


})

noOfPeople.addEventListener('input',()=>{
    if(noOfPeople.value){
        genBill.disabled = false
    }
    else{
        genBill.disabled = true
    }
})

genBill.addEventListener('click',()=>{
    // console.log("click generate")
    if(genBill){
        reset.disabled = false
    }
})


reset.addEventListener('click',()=>{
    if(reset){
        genBill.disabled = true;
        total.innerText=''
        tipAmount.innerText=''
        eachPersonBill.innerText=''
        custip.value=''
        noOfPeople.value=''
        bilAmount.value=''
        reset.disabled=true;
        [...tipcon.children].forEach((tip)=> tip.classList.remove('selected'))


    }
   
})
