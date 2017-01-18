import React from 'react';
import '../css/Index.css';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer'
import UndoRedo from '../containers/UndoRedo'



const App = (props) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
)



export default App
