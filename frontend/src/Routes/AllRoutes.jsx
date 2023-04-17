import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from '../Pages/Home';
import User from '../Pages/User';
import NotFound from '../Pages/NotFound';
import Signin from '../Pages/Signin';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signin/:user' element={<User/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};

export default AllRoutes;