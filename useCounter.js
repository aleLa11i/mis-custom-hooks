import {useState} from 'react'

export const useCounter = (initialcounter = 10, factor=1) => {
    
    const [counter, setcounter] = useState(initialcounter)

    const increment = ()=> {
        setcounter( counter+factor )
    }
    const decrement = ()=> {
        setcounter( counter-factor )
    }
    const reset = ()=> {
        setcounter( initialcounter)
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
