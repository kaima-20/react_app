
const Content = ({count, fruits, products, updater}) => {
    function handle_decrease(){
        updater(count-1)

        console.log(count)
    }
    function handle_increase(){
        updater(count+1)

        console.log(count)
    }


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handle_increase}>Increase</button>
            <button onClick={handle_decrease}>Decrease</button>
            <ul>
            {
                fruits.map(function(fruit, index){
                    return <li key={index}>  {fruit} </li>
                })
            }
            </ul>
            <h3>Available Products</h3>
            <table className="table">
                <thead>
                    <tr>Id</tr>
                    <tr>Name</tr>
                    <tr>Price</tr>
                </thead>
                <tbody>
                    {
                        products.map(function(pro){
                            return (
                                <tr key={pro.id}>
                                    <td> {pro.id} </td>
                                    <td> {pro.name} </td>
                                    <td> {pro.price} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            
        </div>

    )
}

export default Content