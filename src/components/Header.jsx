

function Header(props) {

    const headerStyle={
        backgroundColor:'rgb(12, 12, 73)',
        color:'red'
    }

  return (
  <header style={headerStyle}>

  <div className="container">
       <h1>Feedback UI</h1>
       {props.text}
   </div>
  </header>
  )
}

export default Header