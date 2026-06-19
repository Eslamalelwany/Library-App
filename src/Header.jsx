// import AllBooks from "./AllBooks"
import { useDispatch } from "react-redux"
import { Searching, openAndCloseSideMenu } from "./BooksSlice"
import { Menu } from 'lucide-react';
import { useSelector} from 'react-redux';




export default function Header() {



const sidebarOpen = useSelector ((state) => {
    return state.sidebar
}) 

    let dispatch = useDispatch()
    return (
        <header className="top-0 h-20 bg-[#edede9] shadow flex justify-around items-center">
            
        <button 
            onClick={() => {
                dispatch(openAndCloseSideMenu())
                console.log("clicked")
            }}
            style={{visibility:sidebarOpen ?  "hidden": "visible" }}
            className='cursor-pointer flex ml-2 z-50'>
            
                <Menu/>
        </button>

            <div class="ml-auto mr-3.5 flex items-center gap-2 bg-white rounded-full px-2 py-2 w-56 border border-black/5 shadow-sm focus-within:shadow-md focus-within:border-black/10 transition-all duration-200">
                <svg class="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                    onChange={(e) => {
                        dispatch(Searching(e.target.value))
                        // TODO : searching on favourites and other Options
                    }}
                    type="text"
                    placeholder="Search books..."
                    class="bg-transparent outline-none border-none text-sm text-gray-500 placeholder-gray-400 w-full"
                />
            </div>
        </header>
    )
}