const intialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

// RENDERING MULTIDIMENTIONAL LISTING--not write code in hard code write the code in dyanamically

export default function Gameboard() {
    return <ol id="game-board">
        {/* dynamically render those grid items */}
        {intialGameboard.map((row, rowindex) => (<li key={rowindex}>

            <ol>
                {row.map((playername, colindex) => (<li key={colindex}>
                    <button> {playername}</button>
                </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>
}
