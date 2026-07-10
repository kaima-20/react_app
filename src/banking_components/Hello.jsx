
import xyz from './hello.module.css' //how to import module css

const Hello = () => {
  return (
    <div>

    {/* how to use a module css classname */}
    <h1 className={xyz.heda}>Good morning from hello component</h1>
    </div>
  )
}

export default Hello