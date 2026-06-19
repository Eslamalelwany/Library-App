// import { useEffect } from "react"
import AllBooks from "./AllBooks"
// import { useDispatch } from "react-redux"
// import { Searching, openAndCloseSideMenu } from "./BooksSlice"
// import { Menu } from 'lucide-react';


export default function MainPage() {
// let dispatch = useDispatch()

    return ( 
    <div>
        <div className="mt-15 h-screen overflow-y-scroll  ">
            <AllBooks/>
        </div>
    </div>
    ) 
}



