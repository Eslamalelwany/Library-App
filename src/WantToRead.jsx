
import { useSelector, useDispatch  } from "react-redux"
import { Bookmark } from 'lucide-react';
import {  RemoveFromWantToRead } from "./BooksSlice"
import toast from 'react-hot-toast'




export default function WantToRead() {
let dispatch = useDispatch()
let wantToReadArr = useSelector((state) => {
    return state.wantToRead
})
console.log(wantToReadArr)
    

let isSaved = useSelector((state) => {
    return state.wantReadArray
})



    return (
        wantToReadArr.length === 0 ? <div className="flex flex-row  justify-center w-screen top-1 fixed items-center mb-0  h-screen gap-4">
        <p className="md:text-2xl  lg:text-3xl xl:text-3xl font-bold text-sm  text-zinc-400">No books in your favourites yet</p></div> : 
    
        <div className="grid mt-25 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {wantToReadArr.map((e) => {
    const coverUrl = e.cover_i 
        ? `https://covers.openlibrary.org/b/id/${e.cover_i}-M.jpg` 
        : null

    return (
        <div
            key={e.key}
            className="group relative flex flex-col bg-[#FAF8F3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
            {/* Cover */}
            <div className="relative h-52 bg-[#EDE9E0] overflow-hidden">
                {coverUrl ? (
                    <img
                        src={coverUrl}
                        alt={e.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-[#C4B9A8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                )}

                {/* Year badge */}
                {e.first_publish_year && (
                    <span className="absolute top-3 right-3 bg-black/60 text-white text-[11px] font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                        {e.first_publish_year}
                    </span>
                )}

                {/* Hover overlay */}
                <div className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-3 p-3 bg-gradient-to-t from-black/40 to-transparent">
                    
                    {/* WANT TO READ BUTTON */}
                    <button
                    onClick={() => {
                        dispatch(RemoveFromWantToRead(e.key))
                        toast.error('Removed from want to read')
                        // toast.success('Added to want to read!') 
                    }}
                    title="Want to Read" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
                        <Bookmark size={16} className="text-white"   color={isSaved.includes(e.key) ? "#A0522D": "black"} fill = {isSaved.includes(e.key) ? "#A0522D": "white"} />
                    </button>

                    {/* Mark as Read BUTTON */}
                    {/* <button
                    onClick={() => {
                        // dispatch(addToMakeAsRead(e.key))
                        // toast.success('Added to read!') 
                    }}
                    title="Mark as Read" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
                        <Check size={16} className="text-white" />
                    </button> */}

                    {/* FAVOURITE BUTTON */}
                    {/* <button onClick={() => {
                        // dispatch(addToFavourite(e.key))
                        // dispatch(removeFromFav(e.key))

                        // toast.success('Added to favourites!') 
                    }}
                    title="Add to Favourites" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110">
                        <Star size={16} className="text-white" />
                    </button> */}
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 p-4">
                <h2 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2">
                    {e.title}
                </h2>
                <p className="text-xs text-[#A0522D] font-medium truncate">
                    {e.author_name?.join(', ')}
                </p>
            </div>
        </div>
    )
})}
</div> 
    )

}



