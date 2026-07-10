
import { useState } from "react"

import AccountBalance from "./banking_components/AccountBalance"
import Form from "./banking_components/Form"
import Hi from "./banking_components/Hi"
import Hello from "./banking_components/Hello"

const Banking = () => {

  const [balance, setBalance]  = useState(0) // we send requests to an api endpoints that return balb=nce of the user from db and it will be set as default for useState

  return (
    <>
    <div className='row'>
        <div className="col-md-12 text-center">
            <h1>Bankiee</h1>
        </div>
        {
          balance > 1000 ? <p className="alert alert-sucess">You are doing well</p> : <p className="alert alert-warning">Oga Hustle More</p>
        }
    </div>
    <AccountBalance balance={balance} />
    <Form balance={balance} setBalance={setBalance} />
    <hr />
    <Hi/>
    <Hello/>
    </>
  )
}

export default Banking