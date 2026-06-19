// import { configureStore } from "@reduxjs/toolkit";
// import booksSlice from './BooksSlice'

// export const Store = configureStore({
//     reducer: booksSlice
// })





import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
// import storageSession from 'redux-persist/lib/storage/session'
import booksSlice from './BooksSlice'
const storage = window.localStorage  // ✅ مباشرة من الـ browser



const persistConfig = {
    key: 'root',
    version: 1, 
    storage: {
        getItem: (key) => Promise.resolve(storage.getItem(key)),
        setItem: (key, value) => Promise.resolve(storage.setItem(key, value)),
        removeItem: (key) => Promise.resolve(storage.removeItem(key)),
    },
    whitelist: ['favourite', 'makeAsRead', 'wantToRead'],
    migrate: (state) => {
        if (state) {
            if (!Array.isArray(state.favourite)) state.favourite = []
            if (!Array.isArray(state.makeAsRead)) state.makeAsRead = []
            if (!Array.isArray(state.wantToRead)) state.wantToRead = []
            if (!Array.isArray(state.books)) state.books = []
        }
        return Promise.resolve(state)
    }
    
}
const persistedReducer = persistReducer(persistConfig, booksSlice)

// export const Store = configureStore({
//     reducer: persistedReducer
// })

export const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
})
export const persistor = persistStore(Store)



