import { useState } from 'react'  
  
  function Value(){


    let [counter,setCounter]=useState(15)

  function add(){
    setCounter(counter+1)
  }
  function minus(){
    if(counter>0){
        setCounter(counter-1)
    }
   
  }
  return { counter, add, minus }
  }


export { Value }

  
