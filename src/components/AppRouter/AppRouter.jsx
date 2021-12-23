import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import Footer from '../Footer/Footer.js'
import HomePage from '../../pages/HomePage/HomePage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';
import CartPage from  '../../pages/CartPage/CartPage';
import CategoryPage from '../../pages/CategoryPage/CategoryPage';
import CategoriesList from '../CategoriesList/CategoriesList.jsx';

export default function AppRouter() {
    
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                <Route path='/category' element={<CategoriesList/>}/>
                <Route path='/category/:category/' element={<CategoryPage/>}/>
                <Route path='/item/:id' element={<ItemDetailPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/about' element={<AboutUsPage/>}/>
                <Route path='/' element={ <HomePage/>}/>
                <Route path='*' element={ <NotFoundPage/>}/>
               

                
                </Routes>
            <Footer/>
        </BrowserRouter>  
    )
}