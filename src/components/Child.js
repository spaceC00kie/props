import React from "react"

const Child = ({ person, name, lastName }) => {
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")

  new Promise(() => {console.log("first hey")})
    .then(() => {
      console.log("second hey")
      return "third hey, but from second promise"
    })
    .then((hey) => console.log(hey))
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")
  //   console.log("synchronous hey")

  return (
    <div>
      {person}
      {name}
      {lastName}
    </div>
  )
}

export default Child
