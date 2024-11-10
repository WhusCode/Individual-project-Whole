import { expect, test } from 'vitest'
import { render, fireEvent, cleanup } from '@testing-library/react'

import React from 'react'
import Home from './page'

// to write this kind of test, we need to be able to render canvas, so we need 
// to simply run (once) npm install canvas. Tricky for GUI but these have to 
// be async functions that are cleaned up afterwards. Only for REACT gui
test('Home', async () => {
  const { getByText, getByTestId } = render(<Home />)
  const scoresElement = getByText(/Score:/i);     // scrape text that should be there...

  const b00 = getByTestId('0,0')
  expect(b00.textContent).toBe("E")

  const b01 = getByTestId('0,1')
  expect(b01.textContent).toBe("L")

  const b02 = getByTestId('0,2')
  expect(b02.textContent).toBe("W")

  const b03 = getByTestId('0,3')
  expect(b03.textContent).toBe("Y")

  const b04 = getByTestId('0,4')
  expect(b04.textContent).toBe("C")

  const b10 = getByTestId('1,0')
  expect(b10.textContent).toBe("Y")

  const b11 = getByTestId('1,1')
  expect(b11.textContent).toBe("L")

  const b12 = getByTestId('1,2')
  expect(b12.textContent).toBe("O")

  const b13 = getByTestId('1,3')
  expect(b13.textContent).toBe("A")

  const b14 = getByTestId('1,4')
  expect(b14.textContent).toBe("N")

  const b20 = getByTestId('2,0')
  expect(b20.textContent).toBe("U")

  const b21 = getByTestId('2,1')
  expect(b21.textContent).toBe("B")

  const b22 = getByTestId('2,2')
  expect(b22.textContent).toBe("L")

  const b23 = getByTestId('2,3')
  expect(b23.textContent).toBe("E")

  const b24 = getByTestId('2,4')
  expect(b24.textContent).toBe("E")

  const b30 = getByTestId('3,0')
  expect(b30.textContent).toBe("E")

  const b31 = getByTestId('3,1')
  expect(b31.textContent).toBe("L")

  const b32 = getByTestId('3,2')
  expect(b32.textContent).toBe("P")

  const b33 = getByTestId('3,3')
  expect(b33.textContent).toBe("M")

  const b34 = getByTestId('3,4')
  expect(b34.textContent).toBe("V")

  const b40 = getByTestId('4,0')
  expect(b40.textContent).toBe("P")

  const b41 = getByTestId('4,1')
  expect(b41.textContent).toBe("U")

  const b42 = getByTestId('4,2')
  expect(b42.textContent).toBe("R")

  const b43 = getByTestId('4,3')
  expect(b43.textContent).toBe("A")

  const b44 = getByTestId('4,4')
  expect(b44.textContent).toBe("U")

  cleanup()
})

