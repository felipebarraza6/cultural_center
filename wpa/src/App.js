import React, {useState, useEffect} from 'react'

//Contatiners
import AppMb from './containers/app/AppMb'


function App() {

  const[size, setSize] = useState()

  useEffect(()=>{
      setSize(window.innerWidth)
  }, [])

  return (
    <React.Fragment>
          <AppMb />
    </React.Fragment>
  )
}

export default App;
