import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App(){
  // JS Code--------------------------------------------------------------------------------------------
  const [interest,setInterest] = useState(0)
  const [principal,setPrincipal] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [validPrincipal,setValidPrincipal] = useState(true)
  const [validRate,setValidRate] = useState(true)
  const [validYear,setValidYear] = useState(true)

  console.log(principal,rate,year);

  // calculate button function
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principal || !rate || !year){
      alert('Please fill the form completely')
    }else{
      setInterest(Math.floor(principal*rate/100*year))
    }
  }


  // reset button function
  const handleReset = ()=>{
    setInterest(0)
    setPrincipal(0)
    setRate(0)
    setYear(0)
  }

  // validate form contain numbers

  const validUserInput = (e)=>{
    // {key} = object
    const {name,value} = e.target
    if(!!value.match(/^[0-9]+$/)){
      // valid expression
      if(name === 'principal'){
        setPrincipal(value)
        setValidPrincipal(true)
      }
      else if(name === 'rate'){
        setRate(value)
        setValidRate(true)
      }
      else if(name === 'year'){
        setYear(value)
        setValidYear(true)
      }
    }
    else{
      // Invalid expression
      if(name === 'principal'){
        setPrincipal(value)
        setValidPrincipal(false)
      }
      else if(name === 'rate'){
        setRate(value)
        setValidRate(false)
      }
      else if(name === 'year'){
        setYear(value)
        setValidYear(false)
      }
    }
  }

  // JSX Code-----------------------------------------------------------------------------------------------

  return(
    <div style={{height:'120vh'}} className='d-flex justify-content-center align-items-center w-100 bg-black'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded m-5'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest  easily</p>
        <div style={{height:'150px'}} className='interest-card d-flex flex-column justify-content-center align-items-center w-100 bg-warning mt-4 rounded shadow shadow '>
          <h2 className='fw-bolder'>₹ {' '}{interest}</h2>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-4' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic1"  label="₹ Principal Amount" variant="outlined" value={principal || ''} name='principal' onChange={(e)=>validUserInput(e)}/>
          </div>

          {
          !validPrincipal &&
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Principal Amount
            </div>
          }

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of Interest (p.a) %" variant="outlined" value={rate || ''} name='rate' onChange={(e)=>validUserInput(e)} />
          </div>

          {
          !validRate &&
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Rate
            </div>
          }

          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time Period (Yr)" variant="outlined" value={year || ''} name='year' onChange={(e)=>validUserInput(e)} />
          </div>

          {
          !validYear &&
            <div className="mb-3 text-danger fw-bolder">
              *Invalid Year
            </div>
          }

          <Stack direction="row" spacing={2}>
            <Button type='submit' className='w-50 p-3' variant="contained" disabled={validPrincipal && validRate && validYear?false:true}>Calculate</Button>
            <Button className='w-50' variant="outlined" onClick={handleReset} >Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}


export default App;