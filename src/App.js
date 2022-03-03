import logo from './logo.svg';
import './App.css';

function App() {
  let previous = null;

  function flip(ob) {
    let target = ob.target;
    console.log(target.innerText)
    target.style.background == 'green' ? target.style.background = 'red' : target.style.background = 'green';
    if(previous !== null && previous !== target){
      console.log('yes',previous.innerText === target.innerText)
      target.style.display = 'none';
      previous.style.display = 'none';
    }
    else {
      previous = target
      console.log('no',previous.innerText === target.innerText)
    }
  }

  return (
    <div className="App">      
      <div className="cardo" onClick={flip} style={{width: "100px", height:"200px", background: "red", border: "1px solid blue"}}>
        ciao
      </div>
      <div className="cardo" onClick={flip} style={{width: "100px", height:"200px", background: "red", border: "1px solid blue"}}>
        ciao
      </div>
    </div>
  );
}

export default App;
