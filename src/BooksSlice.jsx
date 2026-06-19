import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit'


export const fetchSomeBook = createAsyncThunk("apiFetch", async() => {
    const result = await fetch("https://openlibrary.org/search.json?q=fiction")
    const books = await result.json()
    console.log(books)
    return books
})



const booksSlice = createSlice({
    name:"book",
    initialState:{
        books :[],
        loading:false,
        searchingWord:"",
        sidebar: false,
        favourite:[],
        makeAsRead:[],
        wantToRead:[],
        buttonFavClickedArr: [],
        wantReadArray:[],
        readedArray:[]

    },
    reducers:{
        Searching:(state, action) => {
            state.searchingWord = action.payload
            console.log(state.searchingWord)
        },
        openAndCloseSideMenu:(state,action) => {
                state.sidebar = action.payload !== undefined ? action.payload : !state.sidebar
            // state.sidebar = !state.sidebar
            console.log("clickess")
        },
        addToFavourite:(state, action) => {
            let mainBooks = state.books

            let filteringFav = mainBooks.find((e) => {
                return e.key === action.payload
            })
            console.log(filteringFav)
            console.log(state.favourite)
            if(filteringFav && !state.favourite.find((e) => e.key === filteringFav.key)) {
                
                state.favourite.push({...filteringFav})
            } 
            else if (filteringFav) {
                state.favourite = state.favourite.filter(e => e.key !== filteringFav.key);
            }
            // console.log(current(state.favourite))
        },
        addToMakeAsRead:(state, action) => {
            let mainBooks = state.books

            let makeAsR = current(mainBooks).find((e) => {
                return e.key === action.payload
            })
            // console.log(makeAsR)

            if(makeAsR && !state.makeAsRead.find((e) => e.key === makeAsR.key)) {
                
                state.makeAsRead.push({...makeAsR})
            }
            else if (makeAsR) {
                state.makeAsRead = state.makeAsRead.filter(e => e.key !== makeAsR.key);
            }
            // console.log(current(state.makeAsRead))
        },
        addToWantToRead:(state, action) => {
            let mainBooks = state.books

            let wantToR = current(mainBooks).find((e) => {
                return e.key === action.payload
            })
            // console.log(wantToR)

            if(wantToR  && !state.wantToRead.find((e) => e.key === wantToR.key)) {
                
                state.wantToRead.push({...wantToR})
            }
            else if (wantToR) {
                state.makeAsRead = state.wantToRead.filter(e => e.key !== wantToR.key);
            }
            // console.log(current(state.wantToRead))
        },
        removeFromFav:(state, action) => {
            let itemRemoved = action.payload
            // console.log(itemRemoved)
            state.favourite = state.favourite.filter((e) => {
                return e.key !== itemRemoved
            })
            // console.log(state.favourite)
        },
        RemoveFromWantToRead:(state,action) => {
            let itemRemoved = action.payload
            console.log(itemRemoved)
            state.wantToRead = state.wantToRead.filter((e) => {
                return e.key !== itemRemoved
            })
            // console.log(state.wantToRead)
        },
        removeFromMakeAsRead:(state, action) => {
            let itemRemoved = action.payload
            console.log(itemRemoved)
            state.makeAsRead = state.makeAsRead.filter((e) => {
                return e.key !== itemRemoved
            })
        },


        // ADDING ID'S TO CHECK IF THE BOOK IS IN THE ARRAY TO CHANGE THE BACKGROUND COLOR
        toggleFav:(state, action) => {
            const id = action.payload
            const exist = state.buttonFavClickedArr.includes(id)
            console.log(exist)
            if(exist) {
                state.buttonFavClickedArr = state.buttonFavClickedArr.filter(fav => fav !==  id)
            } else {
                state.buttonFavClickedArr.push(id)
            }
        },
        wantReadArray: (state, action) => {
            const id = action.payload
            const exist = state.wantReadArray.includes(id)
            console.log(exist)
            if(exist) {
                state.wantReadArray = state.wantReadArray.filter(fav => fav !==  id)
            } else {
                state.wantReadArray.push(id)
            }
        },
        isReaded:(state, action) => {
            const id = action.payload
            console.log(id)
            const exist = state.readedArray.includes(id)
            console.log(exist)
            if(exist) {
                state.readedArray = state.readedArray.filter(fav => fav !==  id)
            } else {
                state.readedArray.push(id)
            }
        }
        

    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchSomeBook.pending, (state) => {
            state.loading = true
            console.log(state.books)
        })
        .addCase(fetchSomeBook.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload.docs    
            console.log(state.books)
        })
        .addCase(fetchSomeBook.rejected, (state) => {
            state.loading = false  
            console.log(Error("API doesnt response "))
        })
    }
})


export default booksSlice.reducer




    export const { Searching, openAndCloseSideMenu, addToFavourite, addToWantToRead, addToMakeAsRead,removeFromFav, RemoveFromWantToRead,removeFromMakeAsRead, toggleFav, wantReadArray, isReaded } = booksSlice.actions



    // https://www.googleapis.com/books/v1/volumes?q=YOUR_QUERY&key=AIzaSyAjc5o00QpWxIlr2J7OJSGMlOJY4ZDXR6U