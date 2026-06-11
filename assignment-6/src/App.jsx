import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Revew from './Revew'
import Toolsnav from './Toolsnav'
import Card from './Card'
import Just from './exta/Just'
import Extacard from './exta/Extacard'
import Selected from './exta/Selected'
import Cardsc from './Cardsc'
import { toast, ToastContainer } from 'react-toastify'




  const carddata = async ()=>{
  const res = await fetch('/data.json')
  return res.json(); 
  }

  const  carddatapromis = carddata();
function App() {
const [selectedProducts, setSelectedProducts] = useState([]);

  const [active, setactive] = useState("Products");

  const [count ,setcount ]= useState(0)



  const handelselect =(products)=>(
    setSelectedProducts([...selectedProducts,products]),
    toast(`${products.name} this card is select`)
  
  )
  const handleRemove =(id)=>{
    const remainingProducts = selectedProducts.filter(item => item.id !== id);
  setSelectedProducts(remainingProducts);
  toast.success("Remove Success")
  }

  const handleClearAll = () => {
  setSelectedProducts([]);
  toast.success("Proceed to Checkout")

};


  return (
    <>  
      <Navbar selectedProducts={selectedProducts}></Navbar>
    <Banner></Banner>
    <Revew/>
    <Toolsnav active={active} 
           setactive={setactive}
           selectedProducts={selectedProducts}
           count={count}
           setcount={setcount}
     /> 

  {active === "Products" ? (
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
           <Card carddatapromis={carddatapromis}
           selectedProducts={selectedProducts}
           handelselect={handelselect}
           />
        </Suspense>
      ) : (
        <Selected selectedProducts={selectedProducts}
         setSelectedProducts={setSelectedProducts}
         handleRemove={handleRemove}
         handleClearAll={handleClearAll}
         
        
        />
      )}

    <Just />
    <Extacard />
            <ToastContainer />

   
    
    </>
  )
}

export default App
