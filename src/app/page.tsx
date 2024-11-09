'use client'                              // directive to clarify client-side. Place at top of ALL .tsx files
import React from 'react'
import { MoveType } from '../model'
import { Coordinate, Model } from '../model'
import { dir } from 'console'
import { dirname } from 'path'
import { Module } from 'module'


export default function Home() {
  // initial instantiation of the Model comes from the first configuration
  const [model, setModel] = React.useState(new Model(0))
  const [redraw, forceRedraw] = React.useState(0)


  // helper function that forces React app to redraw whenever this is called.
  function andRefreshDisplay() {
    forceRedraw(redraw + 1)
  }

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
    let cellvalue = model.contents(row, column)
    if (selected?.row === row && selected?.column === column) {
      return "square selected"
    }
    if (cellvalue === '') {
        return "square empty"
    }
    return "square"
  }

  function handleMove(dir:MoveType) {
    console.log("Moving...")
    model.board.move(dir)
    andRefreshDisplay()
  }

  function reset() {
    setModel(new Model(0))
    // somehow reset both score and moves as well
    andRefreshDisplay()
  }

  function newConfig1() {
    setModel(new Model(0))
    andRefreshDisplay()
  }
  function newConfig2() {
    setModel(new Model(1))
    andRefreshDisplay()
  }
  function newConfig3() {
    setModel(new Model(2))
    andRefreshDisplay()
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
          <button data-testid="2,0" className={css(2,0)} onClick={() => handleClick(2, 0)}>{model.contents(2,0)}</button>
          <button data-testid="2,1" className={css(2,1)} onClick={() => handleClick(2, 1)}>{model.contents(2,1)}</button>
          <button data-testid="2,2" className={css(2,2)} onClick={() => handleClick(2, 2)}>{model.contents(2,2)}</button>
          <button data-testid="2,3" className={css(2,3)} onClick={() => handleClick(2, 3)}>{model.contents(2,3)}</button>
          <button data-testid="2,4" className={css(2,4)} onClick={() => handleClick(2, 4)}>{model.contents(2,4)}</button>
        </div>
        <div className="button-container">
          <button data-testid="3,0" className={css(3,0)} onClick={() => handleClick(3, 0)}>{model.contents(3,0)}</button>
          <button data-testid="3,1" className={css(3,1)} onClick={() => handleClick(3, 1)}>{model.contents(3,1)}</button>
          <button data-testid="3,2" className={css(3,2)} onClick={() => handleClick(3, 2)}>{model.contents(3,2)}</button>
          <button data-testid="3,3" className={css(3,3)} onClick={() => handleClick(3, 3)}>{model.contents(3,3)}</button>
          <button data-testid="3,4" className={css(3,4)} onClick={() => handleClick(3, 4)}>{model.contents(3,4)}</button>
        </div>
        <div className="button-container">
          <button data-testid="4,0" className={css(4,0)} onClick={() => handleClick(4, 0)}>{model.contents(4,0)}</button>
          <button data-testid="4,1" className={css(4,1)} onClick={() => handleClick(4, 1)}>{model.contents(4,1)}</button>
          <button data-testid="4,2" className={css(4,2)} onClick={() => handleClick(4, 2)}>{model.contents(4,2)}</button>
          <button data-testid="4,3" className={css(4,3)} onClick={() => handleClick(4, 3)}>{model.contents(4,3)}</button>
          <button data-testid="4,4" className={css(4,4)} onClick={() => handleClick(4, 4)}>{model.contents(4,4)}</button>
        </div>
      </div>
     
      <label className="score">{"Score: " + "TEST"}</label>
      <label className="numMoves">{"Number of Moves: " + "Whenever you merge letters"}</label>

      <div className="buttons">
        <button data-testid="leftbutton" className="button leftbutton"  onClick={() => handleMove(new MoveType(0, -1))}   >&#8592;</button>
        <button data-testid="upbutton" className="button upbutton"    onClick={() => handleMove(new MoveType(-1, 0))}    >&#8593;</button>
        <button data-testid="rightbutton" className="button rightbutton" onClick={() => handleMove(new MoveType(0, 1))} >&#8594;</button>
        <button data-testid="downbutton" className="button downbutton"  onClick={() => handleMove(new MoveType(1, 0))}  >&#8595;</button>
      </div>
    
      <button data-testid="reset" className="button resetbutton" onClick={() => window.location.reload()}>Reset</button>

      <button data-testid="config" className="button configbutton1" onClick={newConfig1}>Theme: Color</button>
      <button data-testid="config" className="button configbutton2" onClick={newConfig2}>Theme: Animal</button>
      <button data-testid="config" className="button configbutton3" onClick={newConfig3}>Theme: Fruit</button>
    </div>
    
  )
}
