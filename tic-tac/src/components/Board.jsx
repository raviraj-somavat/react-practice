import React, { useState } from 'react'
import Square from './Square'


const Board = () => {
    const [state, setstate] = useState(Array(9).fill(null))
    const [isTurnX, setIsTurnX] = useState(true)
    const handleClick=(index)=>{
        if(state[index]!==null) return;
        const copyState=[...state]
        copyState[index]=isTurnX? "X":"O";
        setstate(copyState)
        setIsTurnX(!isTurnX)
    }
    const isWinner=()=>{
        const win=[
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i of win){
            let [a,b,c]=i;
            if(state[a]!==null&&state[a]===state[b]&& state[b]===state[c]&& state[a]===state[c]) 
                return true
            
        }
        return false
    }
  return (
    <div className='board-container'>
        {isWinner() ?
        <>
        <h1 style={{color: 'green'}}>Winner is {isTurnX? "O":"X"}</h1> <button onClick={()=>setstate(Array(9).fill(null))}>Play Again</button> </>
        
        
        :
        
        <>
        <h1>Next Player is {isTurnX? "X":"O"}</h1>
        
           <div className="board-row">
               <Square onClick={()=>handleClick(0)} value={state[0]} />
               <Square onClick={()=>handleClick(1) } value={state[1]}/>
               <Square onClick={()=>handleClick(2) } value={state[2]}/>
           </div>
           <div className="board-row">
               <Square  onClick={()=>handleClick(3) } value={state[3]}/>
               <Square  onClick={()=>handleClick(4) } value={state[4]}/>
               <Square  onClick={()=>handleClick(5) } value={state[5]}/>
           </div>
           <div className="board-row">
               <Square  onClick={()=>handleClick(6) } value={state[6]}/>
               <Square  onClick={()=>handleClick(7) } value={state[7]}/>
               <Square  onClick={()=>handleClick(8) } value={state[8]}/>
           </div>
           
        
        
        
        </>
    }
    </div>
        
        
        
  )
}
export default Board