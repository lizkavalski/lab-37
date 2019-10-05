import React, {useReducer} from "react";

import {connect} from 'react-redux';

import * as actions from '../../store/todo.store.js'

import { When } from "../if";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import TodoItem from "./item.js";

import "./todo.scss";


function ToDo (props) {
  return (
    <>
      <header>
        <h2>
          There are  Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={props.addItem} />
        </div>

        <div>
          <TodoList
            list={props.todoList}
            handleComplete={props.toggleComplete}
            handleDetails={props.toggleDetails}
            handleDelete={props.deleteItem}
          />
        </div>
      </section>

      <When condition={props.showDetails}>
        <TodoItem handleDetails={props.toggleDetails} item={props.details} />
      </When>
    </>
  );
};

const mapStatetoProps=(state)=>({
  todo: state.todo
})

const mapDispatchtoProps =(dispatch,getState)=> ({
  addItem:()=> dispatch(actions.addItem),
  deleteItem:()=> dispatch(actions.deleteItem),
  toggleComplete:()=> dispatch(actions.toggleComplete),
  toggleDetails:()=> dispatch(actions.toggleDetails)
})



export default connect(mapStatetoProps, mapDispatchtoProps)(ToDo);
