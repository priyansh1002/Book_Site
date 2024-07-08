// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Home from "./pages/Home/Home.jsx"
// import About from "./pages/About/About.jsx"
// import BookList from './components/BookList/BookList.jsx'
// import BookDetails from './components/BookDetails/BookDetails.jsx'
// import { AppProvider } from './context.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path='/' element={<Home />}>
//       <Route path='about' element={<About />} />
//       <Route path='book' element={<BookList />} />
//       <Route path='/book/:id' element={<BookDetails />} />
//     </Route>
//     </>
//   )
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <AppProvider>
//     <RouterProvider router={router} />,
//   </AppProvider>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.jsx';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
