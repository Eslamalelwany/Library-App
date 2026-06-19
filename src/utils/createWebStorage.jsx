import createWebStorage from "redux-persist/es/storage/createWebStorage";

const createWebStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(key, value) {
            return Promise.resolve(value)
        },
        removeItem() {
            return promise.resolve()
        }
    }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorege(); 

export default storage