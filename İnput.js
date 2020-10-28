import React, { Component } from 'react'

export class İnput extends Component {
   constructor(props) {
      super(props);
      this.onFromSubmit = this.onFromSubmit.bind(this);
   }
   onFromSubmit(e) {
      e.preventDefault();
      const item = e.target.elements.txtItem.value.trim();
      this.props.addNewItem(item)
      e.target.elements.txtItem.value = ""
   }
   render() {

      return (
         <div className="card">
            <div className="card-header">
               <h3>ToDo App</h3>
            </div>
            <div className="card-body">
               <form onSubmit={this.onFromSubmit} id="form_id">
                  <div className="input-group">
                     <input type="text" name="txtItem" className="form-control" id="input_id" placeholder="type a new task " />
                     <div className="input-group-append">
                        <button className="btn btn-primary btn-sm"><i className="fas fa-plus"></i></button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

export default İnput
