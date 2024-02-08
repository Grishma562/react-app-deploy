//import AsyncFunction from "./components/AsyncFunction";
//import Auth from "./components/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import HoverComponentWithHover from "./components/HoverComponent";
import React, { Suspense, lazy } from 'react';
import StyledCard from "./components/StyledCard";
//import Optimize from "./components/Optimize";
import ParentComponent from "./components/ParentComponent";

const LazyAuthentication = lazy(() => import('./components/Auth'));
const LazyAsyncFunction = lazy(() => import('./components/AsyncFunction'));

function  Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shop/>}></Route>
                <Route path="/async" element={<Suspense fallback={<div><h2>Loading...</h2></div>}><LazyAsyncFunction/></Suspense>}></Route>
                <Route path="/hover" element={<HoverComponentWithHover/>}></Route>
                <Route path="/auth" element={<Suspense fallback={<div><h2>Loading...</h2></div>}><LazyAuthentication/></Suspense>}></Route>
                <Route path="/card" element={
                     <div>
                     <StyledCard title="First Card" content="This is the content of the first card." color="lightblue" contentColor="blue" contentSize="20px"/>
                     <StyledCard title="Second Card" content="This is the content of the second card." color="lightgreen" contentColor="green" contentSize="18px"/>
                   </div>
                }></Route>
                <Route path="/optimize" element={<ParentComponent/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;