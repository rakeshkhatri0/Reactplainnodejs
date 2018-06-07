import React from 'react';
import axios from 'axios';

class AddFood extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const food = {
            foodName: this.refs.foodName.value,
            qty: this.refs.qty.value
        };
        axios.post('http://localhost:8000/add/food', food)
            .then(response => {
                console.log(response);
                //this.props.history.push('/food/list');
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 offset-lg-3">
                        <form onSubmit={this.handleSubmit} method="post">
                            <div className="container">
                                <legend>Enter new Food item</legend>
                                <div className="form-group">
                                    Food Name:<input ref="foodName" name="foodName" className="form-control"
                                                     placeholder="Enter Food Name"/>
                                </div>
                                <div className="form-group">
                                    Food Quantity:<input type="number" ref="qty" name="qty" className="form-control"
                                                         placeholder="Enter Food quantity"/>
                                </div>
                                <button type="Submit" className="btn btn-primary" name="button">Add Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFood;
