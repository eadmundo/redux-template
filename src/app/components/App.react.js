import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

  render() {
    return(
      <div>
        Redux Template - <Link to="/foo">Foo</Link>
      </div>
    )
  }

}

export default App;