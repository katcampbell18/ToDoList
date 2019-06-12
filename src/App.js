import React, {Component} from 'react';

import './App.css';

class App  extends Component{
  constructor(props){
    super(props);
    this.state = {
    // showDone: false,
    item: "",
    things: [
      {name: "Finish django project", completed: false},
      {name: "Upload django project to Github", completed: false},
      {name: "Update LinkedIn profile", completed: false},
      {name: "Add picture to GitHub and LinkedIn profiles", completed: false}
    ],
    remove: function(){}
  }
}
  // toggleFilter = () =>this.setState({showDone: !this.state.showDone})
  
  addToList = (e) =>{
    //prevent the browser from reloading/refreshing when the form is submitted
    e.preventDefault();
    if(this.state.item.length <1)
      return
    let item = {name: this.state.item, completed: false};
    this.setState({
      things: [...this.state.things, item],
      item: "",
    });
  }
  updateList = (e) =>{
    this.setState({item: e.target.value});
  }
  completeList = (i) =>{
    let items = [...this.state.things];
    items[i].completed = !items[i].completed;
    this.setState({things: items});
  }
  removeItem = (i)=>{
    let items =[...this.state.things];
    items.splice(i, 1)
    //state looks for key name 'things' associated with items
    this.setState({things: items})
 
    }
  render(){
    // var completeitems= [], pendingitems = [];
    // this.state.list.foreach(function (i))
    }
  return (
    <div className="App">
      <div className="container">
      // <div className="row">
      // <div className="col-xs-5">
      //                   <ul className="nav nav-pills todo-filter">
      //                       <li><button onClick={this.toggleFilter} className="btn btn-primary btn-sm">Done</button></li>
      //                       <li><a onClick={onFilter1} className={this.isActive('false')} value="false">Incomplete</a></li>
      //                        <li><a onClick={onFilter1} className={this.isActive('true')} value="true">Complete</a></li>
      //                   </ul>
      //               </div>
      //           </div>
        <h1>To Dos</h1>
        <form onSubmit={this.addToList}>
        <div class="input-group input-group-sm">
        <label> Stuff I gotta Do</label> 
        <input type="text" class="form-control" name="item" value={this.state.item} onChange={this.updateList} />
        <div class="input-group-append">
          <button class="btn btn-success btn-sm" type="submit">Submit</button>
        </div>
        </div>
          {/* <div className="form-group">
          <label> Stuff I gotta Do</label>
          <input className="form-control" type="text" name="item" value={this.state.item} onChange={this.updateList} />
          </div>
          <input type="submit" className="btn btn=success" /> */}
        </form>
          <br /> <hr /> <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Completed ?</th>
              <th>Item</th>
            </tr>
          </thead> 
          <tbody>
          {/* iterate through list using map() */}
            {
              this.state.things.map((item, i) => 
              <tr key={i}>
                <td onClick={this.completeList.bind(this,i)}>
                  {
                    item.completed ?
                    <>
                    <input type="checkbox" defaultChecked /> &nbsp;
                    <span className="badge badge-success">Completed</span>
                    </> :
                    <>
                    <input type="checkbox" /> &nbsp;
                    <span className="badge badge-danger">Not Done!</span>
                    </>
                  }
                </td>
                <td>{item.name}</td>
                <td><button className="btn btn-danger btn-sm" onClick={this.removeItem.bind(this,i)}>Delete</button></td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
  }
}

export default App;
