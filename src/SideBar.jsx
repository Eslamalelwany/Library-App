import { Album } from 'lucide-react';
import { Star } from 'lucide-react';
import { Check } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Book } from 'lucide-react';
import { useSelector, useDispatch} from 'react-redux';
import { openAndCloseSideMenu } from "./BooksSlice"
import { CircleX  } from 'lucide-react';
import { NavLink} from 'react-router-dom';

export default function SideBar() {

let dispatch = useDispatch()

const sidebarOpen = useSelector ((state) => {
    return state.sidebar
}) 

let allBooks = useSelector((state) => {
    return state.books
})

console.log(allBooks)
let favArr = useSelector((state) => {
    return state.favourite
})

let readedArr = useSelector((state) => {
    return state.makeAsRead
})

let wantToRArr = useSelector((state) => {
    return state.wantToRead
})


console.log(sidebarOpen)

    return (
    
        <div className={`
    fixed 
    transition-all duration-300 
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    ${sidebarOpen ? "z-50" : "z-0"}
    w-75 lg:w-[20%]  xl:w-[20%] shrink-0 h-screen`}>
        
        <div style={{visibility: sidebarOpen ? "visible" : "hidden",transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)" }} className="h-screen duration-300 bg-[#d6ccc2] w-full shadow-xl z-50">

        <div className="h-[60%]  w-full  flex flex-col justify-evenly items-start ml-6 ">
            <div className='flex justify-between w-60 mr-4 mt-10 '>
                <div className='flex'>
                    <Album className='mr-2' fill='brown' />
                <h1>Bookshelf</h1>
                </div>
                <div>
                <CircleX onClick={() => {
                    dispatch(openAndCloseSideMenu())
                }}  color='red' className='flex cursor-pointer'/>

                </div>
            </div>
            
        {/* sidebar categories */}
            <div className='  w-60 py-7 flex justify-evenly  flex-col '>
                <h1 className=' text-zinc-500 font-bold'>library</h1>
                <ul className='w-full'>

        <NavLink 
        to="/"
        onClick={() => {
            dispatch(openAndCloseSideMenu())
        }}
        className={({ isActive }) => 
        isActive ? "bg-[#e6ccb2] border-l-4 border-[#A0522D] flex items-center gap-2 mt-3" 
                : "flex items-center gap-2 px- py-2"}>
                    <div  className=' contain py-2 px-3   flex justify-evenly  w-full'>
                        <li className=' flex mr-auto'> <Book className='mr-2' />All Books</li> 
                        <span>{allBooks.length}</span>
                    </div>
                
        </NavLink>


        <NavLink 
        to="/wanttoread"
        onClick={() => {
            dispatch(openAndCloseSideMenu())
        }}
        className={({ isActive }) => 
        isActive ? "bg-[#e6ccb2] border-l-4 border-[#A0522D] flex items-center gap-2 " 
                : "flex items-center gap-2 px- py-2"}>
                        <div className='contain py-2  px-3  flex justify-evenly  w-full'>  
                        
                        <li className='flex mr-auto' > <Bookmark  className='mr-2'/>want to read</li> 
                        <span>{wantToRArr.length}</span>
                    </div>        
        </NavLink>

        <NavLink 
        to="/readed"
        onClick={() => {
            dispatch(openAndCloseSideMenu())
        }}
        className={({ isActive }) => 
        isActive ? "bg-[#e6ccb2] border-l-4 border-[#A0522D] flex items-center gap-2 " 
                : "flex items-center gap-2 px- py-2"}>
                    <div className=' contain py-2   px-3 flex justify-evenly  w-full'>
                        <li className='flex mr-auto' ><Check  className='mr-2'/>read</li>
                        <span>{readedArr.length}</span>
                    </div>                   
        </NavLink>

        <NavLink 
        to="/favourites"
        onClick={() => {
            dispatch(openAndCloseSideMenu())
        }}
        className={({ isActive }) => 
        isActive ? "bg-[#e6ccb2] border-l-4 border-[#A0522D] flex items-center gap-2 " 
                : "flex items-center gap-2 px- py-2"}>
                    <div className='contain py-2 px-3 flex justify-evenly w-full'> 
                        <li  className='flex mr-auto'> <Star  className='mr-2'/>favourites</li> 
                        <span>{favArr.length}</span>
                    </div>
        </NavLink>
                </ul>
        {/* bottom of sideMenu  */}
            <div style={{visibility: sidebarOpen ? "visible" : "hidden"}} class="bg-[#EEECE5] mr-20 mt-15 rounded-xl px-5 py-4 w-65 ">
                <p class="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-2">Reading Goal</p>
                <div class="flex items-baseline justify-between mb-3">
                <p>
                    <span class="text-3xl font-bold text-gray-800">{readedArr.length}</span>
                    <span class="text-lg text-gray-400"> / {allBooks.length}</span>
                </p>
                <span class="text-sm text-gray-400 font-medium">2026</span>
                </div>
                <div style={{width:allBooks.length ? Math.round((readedArr.length / allBooks.length) * 100) : 0}} class=" bg-[#DDD9CF] rounded-full h-2 mb-3">
                <div class="bg-[#A0522D] h-2 rounded-full" ></div>
                </div>
                <p class="text-sm text-gray-400">{allBooks.length ? Math.round((readedArr.length / allBooks.length) * 100) : 0}% complete</p>
            </div>
            </div>

            
        </div>
            </div>
            </div>
    )
}




