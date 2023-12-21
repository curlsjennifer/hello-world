import { useState } from 'react';

var save_input = ['Clean', "wipe"];

export default function App() {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [updated, setUpdated] = useState('');


  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUpdated(message);
      save_input = save_input.concat([message]);
    }
  };
  const handleKeyDown2 = (event) => {
    if (event.key === 'Enter') {
      setUpdated(message2);
      var index = save_input.indexOf(message2);
      if (index !== -1) {
        save_input.splice(index, 1);
      }
    }
  };

return (
  <div>
    <h2>Input to-do list: </h2>
    <div>Input item</div>
    <input
      type="text"
      id="message"
      name="message"
      value={message}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    <div>Delete item</div>
    <input
      type="text"
      id="message2"
      name="message2"
      value={message2}
      onChange={handleChange2}
      onKeyDown={handleKeyDown2}
    />

    <h2>Input Result: {updated}</h2>
    <h2>To-do list: (list number: {save_input.length})</h2>
    <ol>
      {
        save_input.map((item, index) => {
          return <li>{item}</li>
        })
      }
    </ol>
  </div>
);
}
