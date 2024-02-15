import { useContext } from "react"
import CozyCoffeeContext from "../context/CozyCoffeeProvider"

const useCozyCoffee = () => {
    return useContext(CozyCoffeeContext)
}

export default useCozyCoffee