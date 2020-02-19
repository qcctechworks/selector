import React from 'react';

const Shape = ({shape, selectShape}) => {
  // const shape = props.shape;
  // const selectShape = props.selectShape;

  return (
    <div className={shape} onClick={() => selectShape(shape) } />
  )
}

export default Shape;
