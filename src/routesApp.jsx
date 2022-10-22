import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Post from './pages/blog/post'
import Categories from './pages/categories/categories'


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:id" element={<Categories />} />
                <Route exact path="/post/:id" element={<Post />} />

            </Routes>
        </BrowserRouter>
    )
}
