import React, { useState } from 'react'


function Alert(props) {
    function capitalize (word) {
      let lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1) ;
    }
      return (
        <div style={{height: "50px"}}>
        {props.alert && <div>
        <div className={`alert alert-${props.alert.types}`} role="alert">
        {capitalize(props.alert.types)}: {props.alert.message}
        </div>
        </div>}
        </div>
  )
}

export default Alert
