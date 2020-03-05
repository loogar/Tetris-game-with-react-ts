import * as React from 'react'

type TetrisBoardProps = {
  field: any[],
  gameOver: boolean,
  score: number,
  level: number,
  rotate: number
}

const TetrisBoard: React.FC<TetrisBoardProps> = (props) => {
  let rows: any[] = []

  props.field.forEach((row, index) => {
    const cols = row.map((column: any, index: number) => <div className={`col-${column}`} key={index} />)

    rows.push(<div className="tetris-board__row" key={index}>{cols}</div>)
  })

  return (
    <div className="tetris-board">
      <div className="tetris-board__info">
        <p className="tetris-board__text">Level: {props.level}</p>

        <p className="tetris-board__text">Score: {props.score}</p>

        {props.gameOver && <p className="tetris-board__text"><strong>Game Over</strong></p>}
      </div>

      <div className="tetris-board__board">{rows}</div>
    </div>
  )
}

export default TetrisBoard