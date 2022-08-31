import React from 'react'
import { useState } from 'react'
import "./ToDo.css"

const ToDo= () => {
 
    let [work, setwork]=useState("")
    let [list, setlist]=useState([])
    let [bool, setbool]=useState(false)
    let [id, setid]=useState(0)

    let onChange=(e)=> {
        setwork(e.target.value)
    }

    let add=()=> {
       if (work==="") {
        alert("Please add the Task")
       }else {
        setlist((old)=> {
            return [...old,work]
         })
         setwork("")
       }
        
    }

    let remove=(index)=> {
        setlist((old)=> {
            return old.filter((val,i) => {
                return i!==index
                
            })
        })
    }

    let edit=(i, val)=> {
        setid(i)
        setbool(!bool)
        setwork(val)
    }

    let save=(i)=> {
        if (work==="") {
            alert("Edit Correctly")
        }
        else {
        list[i]=work
        setlist(list)
        setbool(!bool)
        setwork("")
        }
        
    }

  return (
    <div className='container'>
        <div className='todo'>
        <h1>ToDo List</h1>
        <div>
        <input type="" name="" value={work} onChange={onChange}/>
        
        
        <button type="" className='add' onClick={add}>+</button>
        </div>
        <ol>
        {
            list.map((val,i)=> {
                
                return ( 
                    <div className='list'>
                    <li key={(i)}>
                    {val} 
                    </li>
                    <span className='float'>

                {(bool && id===i) ?
                        <span className='edit' onClick={()=>save(i)}>✅</span>
                :
                    <span className='edit' onClick={()=>edit(i, val)}>🖍️</span>
                }
                    
                    <span className='delete' onClick={()=>remove(i)}>❌</span>
                    </span>
                    </div>
                    )
            })
        }
        </ol>
        </div>
    </div>
  )
}

export default ToDo