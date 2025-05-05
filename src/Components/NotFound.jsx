import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { Player } from '@lottiefiles/react-lottie-player';

export default function NotFound() {
  return (
    <>
    <div className="row"> 
    <div style={{ margin:"auto"}} className="col-md-9"> 
    <Alert   variant="danger">
          <Alert.Heading><h1 className='text-center'>404 Not Found</h1></Alert.Heading>
          <p className='text-center'>
              You didn't break the internet, but we can't find what you are looking for.
          </p>
      </Alert>
      </div>
      </div>
      <div className="row"> 
      <div className="col-md-12"> 
      <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_rJ3vSOF8H3.json"
          style={{ height: '400px'}}
      ></Player>
        </div>
       </div>
      </>
  )
}
