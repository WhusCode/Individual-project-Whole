'use client'                              // directive to clarify client-side. Place at top of ALL .tsx files
import React from 'react'
import { useCallback } from 'react'
import { Model } from '../model'

export default function Home() {
  // initial instantiation of the Model comes from the first configuration
  const [model, setModel] = React.useState(new Model(0))
  const [redraw, forceRedraw] = React.useState(0)

  // helper function that forces React app to redraw whenever this is called.
  
  const andRefreshDisplay = useCallback(() => {
    forceRedraw((prevReDraw) => prevReDraw + 1)
  }, []);

  function handleClick(row:number, column:number) {
    model.board.selectedSquare = {row, column}
    andRefreshDisplay()
    console.log(model.board.selectedSquare)
  }

  // change the style for the given square based on model. Space separated string.
  // So "square" is a regular square, while "square selected" is a selected square. Find
  // these CSS definitions inside the global.css file
  function css(row:number, column:number) {
    let selected = model.board.selectedSquare
    if (selected?.row === row && selected?.column === column) {
      return "square selected"
    }
    return "square"
  }

  return (
    <div>
      <div className="board">
        <div className="button-container">
          <button data-testid="0,0" className={css(0,0)} onClick={() => handleClick(0, 0)}>{model.contents(0,0)}</button>
          <button data-testid="0,1" className={css(0,1)} onClick={() => handleClick(0, 1)}>{model.contents(0,1)}</button>
          <button data-testid="0,2" className={css(0,2)} onClick={() => handleClick(0, 2)}>{model.contents(0,2)}</button>
          <button data-testid="0,3" className={css(0,3)} onClick={() => handleClick(0, 3)}>{model.contents(0,3)}</button>
          <button data-testid="0,4" className={css(0,4)} onClick={() => handleClick(0, 4)}>{model.contents(0,4)}</button>
        </div>
        <div className="button-container">
          <button data-testid="1,0" className={css(1,0)} onClick={() => handleClick(1, 0)}>{model.contents(1,0)}</button>
          <button data-testid="1,1" className={css(1,1)} onClick={() => handleClick(1, 1)}>{model.contents(1,1)}</button>
          <button data-testid="1,2" className={css(1,2)} onClick={() => handleClick(1, 2)}>{model.contents(1,2)}</button>
          <button data-testid="1,3" className={css(1,3)} onClick={() => handleClick(1, 3)}>{model.contents(1,3)}</button>
          <button data-testid="1,4" className={css(1,4)} onClick={() => handleClick(1, 4)}>{model.contents(1,4)}</button>
        </div>
        <div className="button-container">
          <button data-testid="2,0" className="square" onClick={() => handleClick(2, 0)}>{model.contents(2,0)}</button>
          <button data-testid="2,1" className="square" onClick={() => handleClick(2, 1)}>{model.contents(2,1)}</button>
          <button data-testid="2,2" className="square" onClick={() => handleClick(2, 2)}>{model.contents(2,2)}</button>
          <button data-testid="2,3" className="square" onClick={() => handleClick(2, 3)}>{model.contents(2,3)}</button>
          <button data-testid="2,4" className="square" onClick={() => handleClick(2, 4)}>{model.contents(2,4)}</button>
        </div>
        <div className="button-container">
          <button data-testid="3,0" className="square" onClick={() => handleClick(3, 0)}>{model.contents(3,0)}</button>
          <button data-testid="3,1" className="square" onClick={() => handleClick(3, 1)}>{model.contents(3,1)}</button>
          <button data-testid="3,2" className="square" onClick={() => handleClick(3, 2)}>{model.contents(3,2)}</button>
          <button data-testid="3,3" className="square" onClick={() => handleClick(3, 3)}>{model.contents(3,3)}</button>
          <button data-testid="3,4" className="square" onClick={() => handleClick(3, 4)}>{model.contents(3,4)}</button>
        </div>
        <div className="button-container">
          <button data-testid="4,0" className="square" onClick={() => handleClick(4, 0)}>{model.contents(4,0)}</button>
          <button data-testid="4,1" className="square" onClick={() => handleClick(4, 1)}>{model.contents(4,1)}</button>
          <button data-testid="4,2" className="square" onClick={() => handleClick(4, 2)}>{model.contents(4,2)}</button>
          <button data-testid="4,3" className="square" onClick={() => handleClick(4, 3)}>{model.contents(4,3)}</button>
          <button data-testid="4,4" className="square" onClick={() => handleClick(4, 4)}>{model.contents(4,4)}</button>
        </div>
      </div>
     
      <label className="score">{"Score: " + "GOES HERE"}</label>
      <label className="numMoves">{"Number of Moves: " + "GOES HERE"}</label>
    </div>
  )
}
