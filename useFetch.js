import {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {

    const ref = useRef(true)

    const [value, setValue] = useState({
        loading:true,
        data: null,
        error:null
    })

    useEffect(() => {
        
        return () => {
            ref.current = false;
        }
    }, [])

    useEffect(() => {
        fetch( url )
            .then( resp=> resp.json())
            .then( data=>{  
                    if(ref.current){
                        setValue({
                            loading:false,
                            data,
                            error:null,
                        })
                        
                    }
                    else
                    {
                        console.log("Error")
                    }
                    
                
    
            } )
        
    }, [url])


    return value;
}


