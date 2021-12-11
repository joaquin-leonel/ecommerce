import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import Footer from '../Footer/Footer.js'
import Item from '../Item/Item.js'
import HomePage from '../../pages/HomePage/HomePage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';
import ItemDetailContainer from  '../../pages/ItemDetailPage/ItemDetailPage';


export default function AppRouter() {
    
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                <Route path='/products/:id' element={<ItemDetailPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/about' element={<AboutUsPage/>}/>
                <Route path='/' element={ <HomePage/>}/>
                <Route path='*' element={ <NotFoundPage/>}/>
               

                
                </Routes>
            <Footer/>
        </BrowserRouter>  
    )
}