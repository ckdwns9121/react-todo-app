import React ,{useState, useCallback,useRef} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import produce from 'immer';

function createBulkTodos (){
  const array =[];
  
  for(let i = 1; i<=10;i++){
    array.push({
      id:i,
      text : `할일${i}`,
      checked:false,
    })
  }
  return array;
}


const App =() =>{

  // const [todos ,setTodos] = useState(createBulkTodos);
  const [todos ,setTodos] = useState([
    {
      id:1,
      text:'기초',
      checked:true,
    },
    {
      id:2,
      text:'기초',
      checked:false,
    }
  ])

  const nextId = useRef(3);

  const onInsert = useCallback(
    text=>{
      const todo = {
        id: nextId.current,
        text,
        checked:false,
      };
      setTodos(produce(todos,draft=>{
        draft.push(todo);
      }))
      // setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos],
  )
//  const onInsert = p

  const onRemove = useCallback(
    id=>{
      setTodos(
        produce(todos,draft =>{
          draft.splice(draft.findIndex(todo => todo.id===id),1);
        })
      );
    },
    [todos],
  );

  const onToggle = useCallback (
    id=> {
      setTodos(
        produce(todos,draft =>{
          const todo =draft.find(t => t.id ===id);
          todo.checked =!todo.checked;
        })
      )
      
      // setTodos(todos=>
      //   todos.map(todo => todo.id ===id ? {...todo , checked : !todo.checked} :todo)
      // );
    },
    [todos],
  )
  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}></TodoInsert>
    <TodoList todos={todos} onRemove= {onRemove} onToggle={onToggle}></TodoList>
  </TodoTemplate>

  );
}
export default App;
