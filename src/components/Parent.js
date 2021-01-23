import React from "react"
import Child from "./Child"

const Parent = ({name}) => {
  return (
    <div>
      <Child person="Yes" name={name} lastName="Cat"/>
      
    </div>
  )
}

export default Parent
