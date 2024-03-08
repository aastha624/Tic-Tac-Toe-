// import { useState } from "react"

const intialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

// RENDERING MULTIDIMENTIONAL LISTING--not write code in hard code write the code in dyanamically

export default function Gameboard({onselectsquare}) {
// export default function Gameboard({onselectsquare,activeplayersymbol}) {
//     const[gameboard,setgameboard]=useState(intialGameboard);

//     function handleselectsquare(rowindex,colindex){
//         setgameboard((prevGameBoard)=>{
//             const updateBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
//             // achieving old array using map method----using this aaproach updating the state immutable way --handle function assign onclick and create new anonumus function
// updateBoard[rowindex][colindex]=activeplayersymbol;
// return updateBoard;  
//         });
    //     onselectsquare();
    // }
    return (
    <ol id="game-board">
        {/* dynamically render those grid items */}
        {gameboard.map((row, rowindex) => (<li key={rowindex}>

            <ol>
                {row.map((playername, colindex) => (<li key={colindex}>
                    {/* <button> {playername}</button> */}
                    {/* <button onClick={()=>handleselectsquare(rowindex,colindex)}>{playername}</button> */}
                    <button onClick={onselectsquare}>{playername}</button> 
                </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>
    );
                }

