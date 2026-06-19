
import './App.css'
import SideBar from './SideBar'
import MainPage from './MainPage'
import FavouriteBooks from './FavouriteBooks'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {fetchSomeBook} from './BooksSlice'
import { openAndCloseSideMenu } from "./BooksSlice"
import { Route, Routes } from 'react-router-dom'
import WantToRead from './WantToRead'
import Header from './Header'
import { Toaster } from 'react-hot-toast'
import ReadedBox from './ReadedBox'

function App() {

let dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchSomeBook())
},[])


const sidebarOpen = useSelector((state) => state.sidebar)


return (
  <div className='bg-[#edede9] flex h-screen overflow-hidden'>
    
    <div className={``}>
      <SideBar/>
    </div>

    {/* Overlay */}
    {sidebarOpen && (
      <div 
      className="fixed inset-0 bg-black/30 z-40 lg:hidden"
      onClick={() => dispatch(openAndCloseSideMenu())}/>
    )}

    {/* Content */}
    <div className="flex-1 overflow-auto">

      <Header/>
      {/* {toaster ? <Toaster position="top-right" /> : ""} */}
      <Toaster position="top-right" /> 

    <Routes>
        <Route path='/' element = {<MainPage/>} />
        <Route path='/favourites' element = {<FavouriteBooks/>} />
        <Route path='/wanttoread' element = {<WantToRead/>} />
        <Route path='/readed' element = {<ReadedBox/>} />
    </Routes>
    </div>


  </div>
)
}

export default App



