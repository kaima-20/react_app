import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App.jsx'
// import Layout from './Layout.jsx'
// import Blogger from './Blogger.jsx'
// import Playground from './Playground.jsx'
// import Banking from './Banking'
// import Invento from './Invento'
import { ProductProvider } from './context/ProductContext'
import Meal from './Meal'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Layout /> */}
    {/* <Blogger /> */}
    {/* <Playground/> */}

    {/* <Banking/> */}
    {/* <ProductProvider>
      <Invento/>
    </ProductProvider> */}
    <Meal/>
  </StrictMode>,
)
