  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
// import './App.css'
import Catalog from '../ui/catalog';
import Footer from '../navigation/footer';
// import Form from './components/Form';
import Header from '../navigation/header';

function CatalogPage() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header>
      </Header>

      <Catalog></Catalog>
      <Footer></Footer>

    </>
  )
}

export default CatalogPage;
