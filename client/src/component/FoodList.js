import React from 'react';
import axious from 'axios';
import {Link} from 'react-router-dom';

class FoodList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            foods: []
        }
        axious.get('http://localhost:8000/food/list')
            .then(response => {
                this.setState({
                    foods: response.data.foods
                });
            });
    }
    render() {
        return (
            <div className="container">
                <legend>Todos</legend>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Food Name</th>
                        <th scope="col">Food Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    {this.state.foods.map((food) =>
                        <tbody>
                        <tr>
                            <td key={food.id}>{food.foodName}</td>
                            <td key={food.id}>{food.qty}</td>
                            <td key={food.id}>
                                <div className="form-group row">
                                    <div className="col-md-3">
                                        <Link to={"/food/edit/" + food._id} className="btn btn-primary">Edit</Link>
                                    </div>
                                    <div className ="col-md-3">
                                        <Link to={"/food/delete/" + food._id} className="btn btn-danger">Delete</Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    )}
                </table>
            </div>
        );
    }
}
export default FoodList;