import React from 'react'
import mag from '../../image/pid.jpg';
import mag1 from '../../image/pizza.jpg';

import './PizzaTypes.css'
function PizzaTypes(){
    return(
        <div>
            <div className="container piztype">
 <div className="row">
 	<h3 className="text-center">pizza types</h3>
 	<div className="col-md-3">
 	 <div className="thumbnail">
      <img src={mag} alt="pizza"/>
      <div className="caption">
        <h3>Pepperoni Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        	consequat.
        </p>
      </div>
      </div>
 	</div>
 	<div className="col-md-3">
 		<div className="thumbnail">
      <img src={mag}  alt="pizza"/>
      <div className="caption">
        <h3>Pepperoni Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        	consequat.
        </p>
      </div>
      </div>
 		
 	</div>
 	<div className="col-md-3">
 		<div className="thumbnail">
      <img src={mag}  alt="pizza"/>
      <div className="caption">
        <h3>Pepperoni Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        	consequat.
        </p>
      </div>
      </div>
 		
 	</div>
 	<div className="col-md-3">
 		<div className="thumbnail">
      <img src={mag}  alt="pizza"/>
      <div className="caption">
        <h3>Pepperoni Pizza</h3>
        <p>
        	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        	consequat.
        </p>
      </div>
      </div>
 	</div>
 </div>	
</div>
 
        </div>
    )
}
export default PizzaTypes;