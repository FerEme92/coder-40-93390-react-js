import React from 'react'

const ComponentesChildren = ({children}) => {
  return (
    <>
    <div style={{
        backgroundColor:'green',
        width:'90%',
        height:'90%',
        borderRadius:'5%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:15}}  
      >
      <h5> Hola Soy un Childern</h5>
        {children}
    </div>
    
</>
    
  )
}

export default ComponentesChildren