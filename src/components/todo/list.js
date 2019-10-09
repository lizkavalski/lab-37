import React, { useState } from 'react';
import { Unless, When } from '../if/';
//import { SettingsContext } from '../../context/settings.js';
import {connect} from 'react-redux'
const TodoList = (props) => {

  const [page, setPage] = useState(0);
 // const context = useContext(SettingsContext);

 const start = props.maxVisible * page;
 const end = start + props.maxVisible;
 const list = props.list ? props.list.slice(start, end) : [];
console.log(props.list, "this the list")
  return (
    <>
      <ul>
        {list.map(item => (
          <Unless condition={item.complete && !props.showCompleted}>
            <li
              className={`complete-${item.complete.toString()}`}
              key={item.id}
            >
              <span onClick={() => props.handleComplete(item.id)}>
                {item.text}
              </span>
              <button onClick={() => props.handleDetails(item.id)}>
                Details
              </button>
                <button onClick={() => props.handleDelete(item.id)}>
                  Delete
                </button>
            </li>
          </Unless>
        ))}
      </ul>

      {/* <When condition={page > 0}>
        <button onClick={() => setPage(page - 1)}>Previous</button>
      </When>

      <When condition={props.list.length > end}>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </When> */}

    </>
  );
};

const mapStatetoProps =(state)=>({
  list:state.todo
})

export default connect(mapStatetoProps)()
