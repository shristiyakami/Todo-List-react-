import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
  bottom: "0",
  width: "100%",
  borderTop: "1px solid red",
  textAlign: "center"
  }

  return (
    <footer className="bg-dark text-light py-1" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}



