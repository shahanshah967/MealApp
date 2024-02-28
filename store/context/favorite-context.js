import { createContext } from "react";}

const FavouriteContext = createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
})

function FavouriteContextProvider({children}){
return <FavouriteContext.Provider>{children}</FavouriteContext.Provider>
}

export default FavouriteContextProvider;