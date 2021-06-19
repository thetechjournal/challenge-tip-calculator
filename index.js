const formCalculate = document.getElementById('form-calculate');
const totalAmt = document.getElementById('total-amount');
const totalTip = document.getElementById('total-tip');
const billValue = document.getElementById('bill_value');
const numberOfPeople = document.getElementById('number_of_people');
const totalPerPerson = document.getElementById('total_per_person');
const totalTipPerPerson= document.getElementById('tip_per_person');
const serviceQuality = document.getElementById('service_quality');

formCalculate.addEventListener("submit", (event) => {
        const totalTipAmount = serviceQuality.value * parseInt(billValue.value);
        const tipPerPerson = totalTipAmount / numberOfPeople.value
        const totalAmount = totalTipAmount + parseInt(billValue.value);
        const amountPerPerson = totalAmount / numberOfPeople.value;
        totalAmt.innerHTML = `$${totalAmount}`;
        totalTip.innerHTML = `$${totalTipAmount}`;
        totalPerPerson.innerHTML = `$${amountPerPerson}`;
        totalTipPerPerson.innerHTML = `$${tipPerPerson}`;
        event.preventDefault();
})




