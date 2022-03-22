import logo from './logo.svg';
import './App.css';

function App() {
  let previous = null;

  let cards = [];

  for(let i=0; i<10; i++){
    cards.push({id:'card_A'+i, content:i, color:`rgb(${255-(i*5)}, ${255-(i*10)}, ${255-(i*20)})`}, {id:'card_B'+i, content:i, color:`rgb(${255-(i*5)}, ${255-(i*10)}, ${255-(i*20)})`})
  }



  function flip(ob) {
    let target = ob.target;
    console.log(target.innerText)
    target.style.borderColor != 'red' ? target.style.borderColor = 'red' : target.style.borderColor = 'blue';
    if(previous == null){
      previous = target
      console.log('FIRST prev:',previous.innerText,'curr:',target.innerText,'no',previous.innerText === target.innerText)
    }
    else if(previous.innerText == target.innerText){
      console.log('SAME prev:',previous.innerText,'curr:',target.innerText,'yes',previous.innerText === target.innerText)
      target.style.display = 'none';
      previous.style.display = 'none';
      previous = null;
    }
    else{
      console.log('BOHH prev:',previous.innerText,'curr:',target.innerText,'yes',previous.innerText === target.innerText)
      target.style.borderColor = 'blue'
      previous.style.borderColor = 'blue'
        previous = null;
    }
  }

  return (
    <div className="App">
      {cards.map((card, ix)=>
        <div key={ix} className="cardo" onClick={flip} style={{width: "100px", height:"200px", background: `${card.color}`, border: "5px solid blue"}}>
          {card.content}
        </div>
      )}
      {/* <div className="cardo" onClick={flip} style={{width: "100px", height:"200px", background: "red", border: "1px solid blue"}}>
        ciao
      </div>
      <div className="cardo" onClick={flip} style={{width: "100px", height:"200px", background: "red", border: "1px solid blue"}}>
        ciao
      </div>
      <div className="cardo" onClick={flip} style={{width: "100px", height:"200px", background: "red", border: "1px solid blue"}}>
        ciaoL
      </div> */}
    </div>
  );
}

export default App;
