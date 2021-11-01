import React,{useState , useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  let [advices , setAdvice] = useState({ advice: ''});

  useEffect(() => {
    fetchAdvice();
  }, []);

  let fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
    
  }

  const Reload = () =>  window.location.reload();

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{ advices.advice }</h1>
        <button className="button" onClick={Reload} >
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}


export default App;