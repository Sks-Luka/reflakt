import  { useState } from 'react';


export default function InputBox({ onSend }) {
  const [inputValue, setInputValue] = useState(''); // Manejo del estado del input // onSend es una función que se pasa como prop para manejar el envío del mensaje

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSend = () => {                  
    if (inputValue.trim() === '')return;  // No enviar si esta vacio
      
    onSend(inputValue);                    // Llamada a la función para enviar el mensaje
    setInputValue('');                    // Limpiar el input después de enviar el mensaje
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSend();                       // Enviar mensaje al presionar Enter
        e.preventDefault();                 // Prevenir el comportamiento por defecto del Enter
      }
    }
      
  return (
    <div className="input-box-container">
    <input 
      type="text" 
      name="input-box-message" 
      id=""
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder='Escribe un mensaje...'
    />
    <button className="button-text" onClick={handleSend}>Enviar</button>
    </div>
  );

}