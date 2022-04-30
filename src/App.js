import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import text from './text.js'

function App() {

  const [val, setValue] = useState(0)
  const [tex, setText] = useState(text)
  const [data, setData] = useState([])
  
  
    console.log(val)
 const generate = () => {
  let amount = parseInt(val);

  if(val <= 0)
  {
    amount = 1;
  }
   const neww = tex.slice(0,amount)
    setData(neww)
  
 }
 console.log(data)
  return (
    <>
      <h1>Lorem</h1>
    Paragraphs <input type="number"  onChange={(event) => setValue(event.target.value)} /> 
     <button onClick={()=> generate()}>Generate</button>

     {
        data.map((e) => {
          return(
            <>
              <p>{e}</p>
            </>
          )
        })
     }
    </>
  );
}

export default App;
