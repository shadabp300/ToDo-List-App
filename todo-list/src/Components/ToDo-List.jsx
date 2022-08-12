import React from 'react'
import { useState } from 'react'
import "./ToDo.css"

const ToDo= () => {
    const [work, setwork]=useState("")
    const [list, setlist]=useState([])

    const onChange=(e)=> {
        setwork(e.target.value)
    }


    const Listitems =()=> {
        setlist((olditems)=> {
           return [...olditems, work]
        })
        setwork("")
    }


    const remove=(id)=> {
        setlist((olditems)=> {
            return olditems.filter((element,index)=> {
                return index !==id
            })
         })
    }


  return (
    <div className='container'>
        <div className='todo'>
        <h1>ToDo List</h1>
        <div>
        <input type="text" value={work} onChange={onChange}/>
        <button type="" className='add' onClick={Listitems}>+</button>
        </div>
        <ol>
            {list.map((val, index) => {
                return <li><span className='delete' onClick={()=> 
                    {remove(index)}}>⚔️</span><span>{val}</span></li>
            })}
        </ol>
        </div>
        
    </div>
  )
}

export default ToDo