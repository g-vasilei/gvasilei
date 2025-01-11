import React from 'react'

const GridItems = ({ rows, cols, className }) => {
  const gridItems = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => {
      const isLastRow = rowIndex === rows - 1
      const isLastCol = colIndex === cols - 1

      return (
        <div
          key={`${rowIndex}-${colIndex}`}
          className="bg-transparent"
          style={{
            gridRowStart: rowIndex + 1,
            gridColumnStart: colIndex + 1,
            borderBottom: isLastRow ? 'none' : '1px dashed #1a1e26',
            borderRight: isLastCol ? 'none' : '1px dashed #1a1e26',
          }}
        ></div>
      )
    })
  ).flat()
  return (
    <div
      className={`${
        className || ''
      } grid w-full  absolute top-0 left-0 right-0 bottom-0 -z-[2]`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {gridItems}
    </div>
  )
}

export default GridItems
