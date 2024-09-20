// add money function
document.getElementById('btn-add-money')
    .addEventListener("click", function (event) {
        event.preventDefault()

        const addMoney = document.getElementById('add-amount').value;
        const addNumber = parseFloat(addMoney)
 
        const pinNumber = document.getElementById('add-money-pin').value;
        
        if (pinNumber === "1234") {

            const balance = document.getElementById('total-amount').innerText ;
            const balanceNumber = parseFloat(balance);

            const newMoney = balanceNumber + addNumber;

            document.getElementById('total-amount').innerText = newMoney;
          
        }
        else {
            alert('Failed Add Money.')
        }

    })

    // Cash out function 

    document.getElementById('btn-cash-out').addEventListener("click", function (event){
        event.preventDefault();
        console.log('hey i m clicked')

        const cashoutAmount = document.getElementById('cash-out-amount').value;

        const cashAmountNumber = parseFloat(cashoutAmount);
       

        const cashOutPin = document.getElementById('cash-out-pin').value ;

        if(cashOutPin === "1234"){
            const cashOutBalance = document.getElementById('total-amount').innerText ;
            const balanceNumber = parseFloat(cashOutBalance);

            const newCasOutMoney = balanceNumber - cashAmountNumber;

            document.getElementById('total-amount').innerText = newCasOutMoney;
          
        }
        else {
            alert('Failed Add Money.');
        }

    })