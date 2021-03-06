import React, {useState} from 'react';

const Form = (props) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    const handleChange = (e) => {
      setName(e.target.value);
  }
    return (
      
        <form onSubmit={(e) => handleSubmit(e)}>
          
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        
        <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        />
        
        <br />
        <button type="submit" className="btn">
          Add task to my ToDoList
        </button>
      </form>
    );
}

export default Form;