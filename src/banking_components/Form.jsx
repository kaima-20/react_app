
import { useState } from "react"
const Form = ({balance, setBalance}) => {
    // a state to track amount they typed
    const [amount, setAmount] =  useState('')

    function withdraw(){
        if(amount=""){
            alert('Oga, how much you wan withdraw?');
            return false;
        }
        if(amount > balance){
            alert('Oga, insufficient balance')
            return false;
        }

        var amount_to_withdraw = Number(amount)
        setBalance(balance - amount_to_withdraw)
    }

    function deposit(){
        if(amount=""){
            alert('Oga, how much you wan deposit?');
            return false;
        }
        var amount_to_deposit = Number(amount)
        currentBalance = balance + amount_to_deposit
        setBalance = (currentBalance)
    }
  return (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            {/* how to manage input in react */}
            <div className="mb-2">
                <input type="number" className="form-control" value={amount} onChange={function(e){
                    setAmount(e.target.value)
                }}/>
            </div>
            <div className="mb-2">
                <button className="btn btn-danger col-6" onClick={withdraw}>Withdraw</button>
                <button className="btn btn-primary col-6" onClick={deposit}>Deposit</button>
            </div>
            
        </div>

    </div>
  )
}

export default Form