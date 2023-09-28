import React from 'react'
import AppRouter from './router/AppRouter'
import Navbar from './components/Navbar/Navbar'



const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App












// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const onToggle = () => setToggle(prev => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   },[])

//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={ {color: 'red'}}>data</div>}
//       <h1>React App</h1>
//       <button onClick={onToggle} data-testid="toggle-btn">click me</button>
//       <input onChange={(e) => setValue(e.target.value)} type='text' placeholder='input value...' />
//     </div>
//   );
// }

// export default App;
