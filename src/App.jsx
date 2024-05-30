
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  //state to whole value from  input field
    const [Principle,setPrinciple]=useState(0)
    const [rate,setRate]=useState(0)
    const [year,setYear]=useState(0)
    const [interest,setIneterest]=useState(0)

    //for conditional rendering
    const [isPrinciple,setIsPrinciple]=useState(true)
    const [israte,setIsRate]=useState(true)
    const [isyear,setIsYear]=useState(true)

    const validation =(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);


    let name=e.target.name
    let value=e.target.value
    console.log(!!value.match(/^[0-9]*$/));

  if(!!value.match(/^[0-9]*$/)){
    
    if(name=='Principle'){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name=='Principle'){
      // setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name=='rate'){
      // setRate(value)
      setIsRate(false)
    }
    else{
      // setYear(value)
      setIsYear(false)
    }
  }
}

const handleReset = ()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setIneterest(0)
}

const calculate = ()=>{
  setIneterest((Principle*rate*year))
}


  console.log('Principle',Principle);
  console.log('rate',rate);
  console.log('year',year);
  return (
    <>

<div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh' }}>
   
    <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest</h1>
        <p>Calculate your simple Interest Easily</p>
        <div className='mt-5 flex-column rounded shadow bg-info d-flex justify-content-center align-items-center p-4 '>
          <h2 className='fs-1 fw-bolder₹'>₹ {interest}</h2>
          <p>you total simple interest</p>
          </div>
         <form  className='mt-5'> 
         
         
         <div className='mb-3'>
         <TextField id="outlined-basic" value={Principle || ""} label="₹ Principle amount" name='Principle' onChange={(e)=>validation(e)} variant="outlined" className='w-100' />
         {!isPrinciple &&
         <p className='text-danger'>*Invalid Input</p>}
         </div>
         
         
         <div className='mb-3'>
         <TextField id="outlined-basic" value={rate || ""}  label="Rate of Interest" name='rate'  onChange={(e)=>validation(e)}  variant="outlined" className='w-100' />
         {!israte &&
         <p className='text-danger'>*Invalid Input</p>}
         </div>
         
         
         <div className='mb-3'>
         <TextField id="outlined-basic" value={year || ""}  label="Year (yr)" name='year' onChange={(e)=>validation(e)}  variant="outlined" className='w-100' />
         {!isyear &&
         <p className='text-danger'>*Invalid Input</p>}
         </div>
         
         
         <div className='d-flex justify-content-between w-100 mt-4'>
         <Button variant="contained" color="success" style={{width:'190px',height:'60px'}}disabled={isPrinciple && israte && isyear ? false:true}onClick={calculate}>Calculate</Button>
         <Button variant="outlined" style={{width:'190px',height:'60px'}} onClick={handleReset}>Reset</Button>
         </div>
        </form>
       
        </div>
    
  </div>
    
    
    </>
  )
}

export default App
