import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import TodoPage from './TodoPage';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../store/reducers/Todos.Reducer';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return <>
        <NavBar></NavBar>
        <div style={{ marginTop: '20px' }}>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/todos" />} />
                <Route exact path="/todos" component={TodoPage} />
            </Switch>
        </div>
    </>
}

export default App;
