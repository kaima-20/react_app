import blogpic from './assets/blogpic.jpg'

function Content(){
    let myStyles = {color:'yellow', backgroundColor:'purple', padding: '10px'}
    return <>
    <div className="col-md-6">
        <img src={blogpic} alt="" className='img-fluid rounded' />
    </div>
    <div className="col-md-6">
        <h3 style={myStyles}>Blog Section</h3>
        <p>This is our blog section</p>
        <button onClick={()=>{alert('Welcome to our webpage')}} className='btn btn-dark'>Learn More</button>
    </div>

    </>
}

export default Content