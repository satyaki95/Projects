import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from '../fetaures/AddBook';
import BooksView from '../fetaures/BooksView';
import Footer from '../layouts/Footer';
import EditBook from '../fetaures/EditBook';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/show-books' element={ <BooksView /> } />
        <Route path='add-book' element={ <AddBook /> } />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path='*' element={ <Error /> } />
        </Routes> 
        <Footer />
    </BrowserRouter>
  )
}

export default Index;