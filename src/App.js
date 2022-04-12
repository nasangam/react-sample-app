import logo from './logo.svg';
import "./App.css";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="App" style={{margin:"50px", fontSize: "20px"}}>
       <div>React Sample Application for deployment</div><hr></hr>
       <div>Environment: {process.env.NODE_ENV} </div>
       <div>REACT_APP_API_KEY: {process.env.REACT_APP_API_KEY}</div>
       <div>REACT_APP_API_BASE: {process.env.REACT_APP_API_BASE}</div>
       <div>MY_VAR: {process.env.MY_VAR}</div>
    </div>
  );
}

export default App;
