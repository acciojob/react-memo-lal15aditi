import React, { useState, useEffect } from 'react';

const MemoApp = () => {
  const [todos, setTodos] = useState([{id:1, content: 'New Todo'}]);
  const [memo, setMemo] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    document.title = `Memo App - Total Todos: ${todos.length}`;
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: todos.length + 1, content: 'New Todo' }]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddCustomTodo = () => {
    if (inputText.length > 5) {
      setMemo([...memo, { id: memo.length + 1, content: inputText }]);
      setInputText('');
    }
  };

  return (
    <div id='main'>
      <h1>React.useMemo</h1>

      <div>
        <h1>My todos</h1>
        <ul>
            {todos.map((todo, i) => (
                <li key={todo.id} id={`todo-${i}`}>{todo.content}</li>
            ))}
        </ul>
        <button id='add-todo-btn' onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        <span id='incr-cnt'>{count}</span>
        <button id='incr-btn' onClick={handleIncrement}>+</button>
      </div>

      <div>
        <p id='calc'>{1000000000+count}</p>
      </div>

      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          id='skill-input'
        />
        <button id='skill-btn' onClick={handleAddCustomTodo}>Add Skill</button>
      </div>

      <ul>
        {memo.map((todo) => (
          <li key={todo.id} id={`item-${todo.content}`}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoApp;
