import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v4';
import Form from "react-jsonschema-form";

import {connect} from 'react-redux';

import * as actions from '../../store/todo.store';

const schemaURL = 'https://api-js401.herokuapp.com/api/v1/todo/schema'
const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' }
}

function TodoForm(props) {

  const [schema, setSchema] = useState({});

  const addItem = (form) => {
    console.log(form);
    form.formData.id = uuid();
    props.addItem(form.formData);
  };

  useEffect( () => {
    fetch( schemaURL )
     .then(results => results.json() )
     .then(schemaObject => setSchema(schemaObject))
  }, []); 

  console.log(schema);

  return (
    <div>
    <Form
      schema={this.state.schema}
      uiSchema={uiSchema}
      formData={this.props.Todo[this.props.id]}
      onSubmit={this.handleSubmit}
    />
  </div>
  )
}

const mapDispatchToProps = (dispatch, getState) => ({
  addItem: () => dispatch(actions.addItem())
});


export default connect(undefined, mapDispatchToProps)(TodoForm);