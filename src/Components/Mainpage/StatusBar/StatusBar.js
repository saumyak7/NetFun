import React, { Component } from 'react'
import Status from './Status';
import "./StatusBar.css";

class StatusBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div Class = "StatusBar_cont">
                
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               <Status/>
               

            </div>
         );
    }
}
 
export default StatusBar ;