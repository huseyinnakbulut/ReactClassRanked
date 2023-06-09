import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-left"
      style={{ position: 'absolute', width: '70%', bottom: '0px' }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className="text-dark" href="#">
          ReactRanked.com
        </a>
      </div>
    </MDBFooter>
  )
}
