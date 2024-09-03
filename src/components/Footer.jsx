import React from 'react'
import Container from './Container';

const Footer = () => {
  const date = new Date();

  return (
    <Container>
      <footer className=" mt-auto bg-black text-white text-center py-2">
      @ {date.getFullYear()} MMS IT. ALL RIGHTS RESERVED.
    </footer>
    </Container>
    
  )
}

export default Footer