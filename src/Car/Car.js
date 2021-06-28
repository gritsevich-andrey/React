import React from 'react'

// function car() {
//   return (
//     <div>This is car component</div>
//   )
// }

// const car = () => {
//   return (
//     <div>This is car component</div>
//   )
// }

// const car = () => (
//   <div>
//     This is car component
//     <strong>test</strong>
//   </div>
// )

export default (props) => (
  <div>
      <p>{props.name}</p>
      <p>{props.year}</p>
      {props.children}
  </div>
)