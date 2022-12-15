import PropTypes from 'prop-types'

function myalert(){    
    alert('are you ok?')
    console.log('not ok')
}

function Button({name, color, onc}) {
  return (
    <button onClick={myalert} style={{backgroundColor:color}} className="btn">{name}</button>
  )
}

export default Button

Button.defaultProps = {
    color:'green',
    name:'click'
}
 
Button.propTypes = {
    color:PropTypes.string.isRequired,
    
  
 }
 

// function Button(props) {
//   return (
//     <button style={{backgroundColor:props.color}} 
//     className="btn">{props.name}</button>
//   )
// }

// export default Button