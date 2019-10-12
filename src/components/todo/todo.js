import React, { useState, useEffect } from "react";

import Form from './form.js';
import TodoList from './list';


function Todo(props) {
  return (
    <>
      <Form />
      <TodoList/>
    </>
  );
}

export default Todo;