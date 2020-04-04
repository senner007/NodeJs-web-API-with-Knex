import React from 'react'

const Loader = ({isLoading, children}) => {
  
  return (
    <>
      {
        isLoading
          ? <h3>Loading...</h3>
          : children      
      }
    </>
  )

}

export default Loader
