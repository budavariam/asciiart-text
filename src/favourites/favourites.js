const localStoragekey = "data-favourites"


export const setFavourites = (favourites) => {
    try {
        window.localStorage.setItem(localStoragekey, JSON.stringify(favourites))
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
