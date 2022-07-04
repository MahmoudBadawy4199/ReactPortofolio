import './App.scss';
import CounterPage from './pages/counter/counter.page';
import HomePage from './pages/home/home.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar/Navbar.Component';
import ShopPage from './pages/shop/shop.page';
import ProductSubpage from './pages/shop/product.Subpage/product.Subpage';
import NotFoundPage from './pages/not_found/not_found.page';
import TodoPage from './pages/todo/todo.page';
import SignUp from './pages/signup';



function App() {
    return (


        <BrowserRouter>
            <NavbarComponent />
            <Routes >
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/product/:id' element={<ProductSubpage />} />
                <Route path='/counter' element={<CounterPage />} />
                <Route path='/todo' element={<TodoPage />} />
                <Route path='/register' element={<SignUp />} />


                <Route path='*' element={<NotFoundPage />} />
            </Routes>

        </BrowserRouter>

    )

}

export default App;
