import hero from './assets/hero.png'
import Header from './playground_components/Header'
import Content from './playground_components/Content'
import Footer from './playground_components/Footer'
import { useState } from 'react'

const Playground = () => {
    var appname = 'Blogger';
    // var count = 0;

    const [count, setCount] =  useState(0) //count is the container, setCount is the only one that can change count

    var fruits = ['Kiwi', 'Banana', 'BlueBerry', 'Apple']
    var products = [
        {
            id:1,
            name: "Apple Cidar Vinegar",
            price: 2000
        },
        {
            id:2,
            name: "Yellow Garri",
            price: 1000
        }
    ]
    // state is used to keep data that will be changing
    return (
        <>
        {/* <div>
             <img src="/assets/img/woman.jpg" alt="anything" className="img-fluid" />

             <img src={hero} alt="any2" />
        </div> */}

        <Header xyz={appname } abc={count} />
        <Content count = {count } fruits={fruits} products={products} updater={setCount} />
        <Footer/>
        </>
    )
}

export default Playground