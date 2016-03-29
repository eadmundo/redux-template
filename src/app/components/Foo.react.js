import React from 'react'
import { Link } from 'react-router'

class Foo extends React.Component {

  render() {
    return(
      <div>
        Foo - <Link to="/">Home</Link>
      </div>
    )
  }

}

export default Foo;