import React, { Component } from 'react';

export default class State extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        count: 0
     }
   }

   handleIncrement = () =>{
       this.setState({
           count: this.state.count + 1
       })
   }
   handleDecrement = () =>{
       this.setState({
           count: this.state.count - 1
       })
   }
   
    

  render() {
      const {count} = this.state
    return (
        <div className='container'>
            <h1>Count Application</h1>
            <br/>
            <br/>
            <hr/>

            <center>
                <div className="d-flex">
            
                    <button className='btn btn-info' onClick={this.handleIncrement}>+</button>
                    <h1>Count: {count}</h1>
                    <button className='btn btn-danger' onClick={this.handleDecrement} disabled={count==0? true:false}>-</button>

                </div>

            </center>

                

        </div>

    )
  }
}
