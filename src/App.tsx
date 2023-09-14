import { useState } from "react"
import Input from "./Input"
import Reducer from "./Reducer"


const App = () => {

  const[count,setCount] = useState<string>('0')

  return (
    <div>
      <Input name='Name' surname="Surname" age={19} ></Input>
      {/* <Reducer /> */}
    </div>
  )
}

export default App