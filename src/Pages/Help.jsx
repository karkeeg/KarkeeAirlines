import React from 'react'
import FAQ from './FAQ'

const Help = () => {
  return (
    <>
              <div className="text-center mb-4">
                <h1 className="display-5 fw-bold">Ask any question any time</h1>
              </div>
                <div className="container-fluid px-5 d-flex flex-column justify-content-center">

              
              <div className="position-relative">
                <img 
                  src="https://wallpapers.com/images/hd/help-pictures-1920-x-826-hjob55sjmkog6tko.jpg" 
                  alt="Human and robot handshake" 
                  className="img-fluid rounded mb-4"
                />
                
                <div className="position-absolute bottom-0 start-0 p-5">
                  <button className="btn btn-light btn-sm rounded-pill px-3 mb-3">
                    Ask me Anything
                  </button>
                  <h2 className="display-4 fw-bold text-white">I'M BIBEK-KARKI</h2>
                  <p className="text-light mb-0">Your personal travel assistant</p>
                </div>
                
                <div className="position-absolute bottom-0 end-0 p-5">
                  <div className="d-flex align-items-center">
                    <span className="me-2">Start chat now</span>
                    <div className="d-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill text-white" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
             
           
        
      </div>
    </div>
<div className="m-4">

     <FAQ />
</div>
    </>
  )
}

export default Help