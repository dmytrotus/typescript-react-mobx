import React, { Component } from 'react';
import Paginator from './components/Paginator';
import { observer, inject } from "mobx-react";
import { PaginatorStore } from "./components/Store";

interface CheckTypes {
  PaginatorStore?: PaginatorStore;
}

@inject("PaginatorStore")
@observer

class App extends Component<CheckTypes> {

	render(){
	  return (
	    <div className="App">
	      <Paginator />
	    </div>
	  );
	}
}

export default App;