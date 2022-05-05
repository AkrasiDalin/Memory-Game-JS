import logo from './logo.svg';
import './App.css';

function App() {
  let previous = null;

  let cards = [];
  let icons = [
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>,
    <svg className="w-6 h-6 dark:text-white cre" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  ];
  for(let i=0; i<10; i++){
    let icon = icons.pop();
    cards.push({id:'cardA_'+i, content:icon, color:`rgb(${255-(i*5)}, ${255-(i*10)}, ${255-(i*20)})`}, {id:'cardB_'+i, content:icon, color:`rgb(${255-(i*5)}, ${255-(i*10)}, ${255-(i*20)})`})
  }
  cards = [...cards].sort(() => Math.random() - .5);

  function getIDNumber(id){
    return id.split('_')[1]
  }


  function flip(ob) {
    let timeout;
    let target = ob.target;
    console.log(getIDNumber(target.id))
    target.style.borderColor != 'red' ? target.style.borderColor = 'red' : target.style.borderColor = 'blue';
    target.children[0].style.visibility != 'hidden' ? target.children[0].style.visibility = 'hidden' : target.children[0].style.visibility = 'visible';
    if(timeout !== null){
      clearTimeout(timeout);
    }
    if(previous == null){
      previous = target
      console.log('FIRST prev:',getIDNumber(previous.id),'curr:',getIDNumber(target.id),'no',getIDNumber(previous.id) === getIDNumber(target.id))
    }
    else if(getIDNumber(previous.id) == getIDNumber(target.id)){
      console.log('SAME prev:',getIDNumber(previous.id),'curr:',getIDNumber(target.id),'yes',getIDNumber(previous.id) === getIDNumber(target.id))
      // target.style.visibility = 'hidden';
      // previous.style.visibility = 'hidden';
      target.children[0].style.visibility  = 'visible';
      previous.children[0].style.visibility = 'visible';
      target.style.pointerEvents = 'none';
      previous.style.pointerEvents = 'none';
      previous = null;
    }
    else{
      timeout = setTimeout(()=>{
        console.log('BOHH prev:',getIDNumber(previous.id),'curr:',getIDNumber(target.id),'yes',getIDNumber(previous.id) === getIDNumber(target.id))
        target.style.borderColor = 'blue'
        previous.style.borderColor = 'blue'
        target.children[0].style.visibility  = 'hidden';
        previous.children[0].style.visibility = 'hidden';
        previous = null;
      },500);
      
    }
  }

  return (
    <div className="App">
      <ul style={{width:"700px"}}>
      {cards.map((card, ix)=>
        <div key={ix} id={card.id} className="cardo" onClick={flip} style={{width: "100px", height:"100px", background: `${card.color}`, margin: "10px", border: "5px solid blue", display: "inline-block"}}>
          <div style={{visibility: "hidden"}}>
            {card.content}
          </div>
        </div>
      )}
      </ul>
    </div>
  );
}

export default App;
