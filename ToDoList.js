import React, { Component } from 'react'
import ToDoItem from "./ToDoItem";

export class ToDoList extends Component {
   
   render() {
       return (
       <div>
         <div className="card mt-1">
            <div id="Task_id" className="card-header">
               Task List
               <a onClick={this.props.clearItem} href="#" className="btn btn-danger float-right">Delete All</a>
            </div>
            </div>
               <ul className="list-group">
                    {this.props.items.map((item)=>{
                        return <ToDoItem deleteItem={this.props.deleteItem} item={item}/>
                    })}
               </ul> 
<h3 className="mt-2"><strong>Task's Length = {this.props.items.length}</strong></h3>
       </div>
      )
   }
}

export default ToDoList
