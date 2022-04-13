import logo from './logo.svg';
import "./App.css";
import {incriment} from './redux';
import { connect } from 'react-redux';

function App(props) {
  console.log(process.env.NODE_ENV);
  const myMncriment = ()=>{
    props.dispatch({type:'INCR'})
  }
  const myRandom = ()=>{
    props.dispatch({type:'RANDOM'})
  }
  return (
    <div className="App" style={{margin:"50px", fontSize: "20px"}}>
       <div>React Sample Application for deployment</div><hr></hr>
       <div>Environment: {process.env.NODE_ENV} </div>
       <div>REACT_APP_API_KEY: {process.env.REACT_APP_API_KEY}</div>
       <div>REACT_APP_API_BASE: {process.env.REACT_APP_API_BASE}</div>
       <div>MY_VAR: {process.env.MY_VAR}</div>
       <div>counter:{props.counter}</div>
       <div>Random:{props.random}</div>
       <button onClick={props.incriment}>Incriment</button>
       <button onClick={props.setRandom}>Random</button>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {
    counter: state.counter,
    random: state.random
  }
}
const mapDispatchToProps = function(dispatch){
  return {
    setRandom: () => dispatch({type:"RANDOM"}),
    incriment: () => dispatch({type:"INCR"})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
