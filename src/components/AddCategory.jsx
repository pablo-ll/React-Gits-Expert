import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        //setCategories( categories => [inputValue, ...categories]);
        setinputValue('');
    }
  return (
    <form action="" onSubmit={(e) => onSubmit(e)}>
        <input type="text" 
            placeholder="Buscar Gifs" 
            value={inputValue} 
            onChange={(e) => setinputValue(e.target.value)}
            />

           
    </form>
  )
}
