import './App.css';
import React from "react"
import {connect} from "react-redux";

function App(props) {

  let Plus = () => {

    props.Add(props.Count)

  }

  let Minus = () => {

    props.Min(props.Count)

  }
  return (
    <div className="App">
      <h2>{props.Count}</h2>
      <button onClick={Plus}>Plus</button>
      <button onClick={Minus}>Minus</button>
    </div>
  );
}

export default connect(

  state=>({
    Count:state
  }),
  dispatch => ({
    Add:(Add)=>{
      dispatch({type:"INCREMENT",payload:Add})
    },
    Min:(Min)=>{
      dispatch({type:"DICREMENT",payload:Min})
    }

  })

)(App);
