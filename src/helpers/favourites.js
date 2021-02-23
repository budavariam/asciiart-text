const localStoragekey = "data-favourites"


export const setFavourite = (name, value) => {
    try {
        const data = JSON.parse(window.localStorage.getItem(localStoragekey)) || {}
        if (value) {
            data[name] = true
        } else {
            delete data[name]
        }
        window.localStorage.setItem(localStoragekey, JSON.stringify(data))
    } catch (err) {
        console.error("Failed to set localStorage items.", err)
    }
}
// export const getFavourite = (name) => {
//     try {
//         const data = JSON.parse(window.localStorage.getItem(localStoragekey)) || {}
//         return name in data
//     } catch (err) {
//         console.error("Failed to set localStorage items.", err)
//     }
// }

export const getFavourites = () => {
    try {
        const data = JSON.parse(window.localStorage.getItem(localStoragekey)) || {}
        return data
    } catch (err) {
        console.error("Failed to get localStorage items.", err)
        return {}
    }
}
