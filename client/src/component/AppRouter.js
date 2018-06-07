import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddFood from "./AddFood";
import FoodList from "./FoodList";

const AppRouter = () =>
    (
        <BrowserRouter basename="/">

            <div>
                <Switch>
                    <Route path="/add" component={AddFood} exact={true}/>
                    <Route path="/list" component={FoodList} />
                </Switch>
            </div>
        </BrowserRouter>
    );
export default AppRouter;
