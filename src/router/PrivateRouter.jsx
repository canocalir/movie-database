import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivateRouter = ({children}) => {

   const { user } = useAuth()

    if(!user){
        return <Navigate to={'/login'}/>
    }
    return children
}

export default PrivateRouter