import React, { Component,Fragment } from 'react';
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import İnput from "./İnput";
import ToDoList from "./ToDoList";

export class İndex extends Component {
   constructor(props) {
      super(props);
      this.deleteItem=this.deleteItem.bind(this);
      this.addNewItem=this.addNewItem.bind(this)
      this.clearItems=this.clearItems.bind(this);
      this.state={
         items:[]
      } 
   }
   componentDidMount(){
      const items = localStorage.getItem("items");
      const json = JSON.parse(items);
      if(json){
         this.setState({items:json})
      }
   }
   componentDidUpdate(prevProps,prevState){
      if(prevState.items.length!==this.state.items.length){
         localStorage.setItem("items",JSON.stringify(this.state.items))
      }
   }
   addNewItem(item){
      this.setState(prevState=>{
         return {items:prevState.items.concat(item)}
      })
   }
   clearItems(){
      this.setState({items:[]})
   }
   deleteItem(items){
      this.setState(prevState=>{
         const arr = prevState.items.filter(i=>{
           return items!=i
         })
         return{ items:arr}
      })
   }
   render() {
      return (
         <Fragment>
            <Navbar />
            <div className="container mt-3">
               <İnput addNewItem={this.addNewItem} />
               <ToDoList deleteItem={this.deleteItem} clearItem={this.clearItems} items={this.state.items}/>
            </div>
         </Fragment>
      )
   }
}

ReactDOM.render(<İndex/>,document.querySelector("#root"));
