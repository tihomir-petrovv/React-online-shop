import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import "./Sidebar.css"
import {AiOutlineShoppingCart} from 'react-icons/ai'


function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><AiOutlineShoppingCart/></h1>
        </div>
        <Category/>
        <Price/>
        <Colors/>
    </section>
    </>
  )
}

export default Sidebar