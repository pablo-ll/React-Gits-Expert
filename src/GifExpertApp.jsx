import  { useState } from 'react';
import { AddCategory, GridGif  } from './components';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
      console.log(newCategory);

     

      if (categories.includes(newCategory)) return;
      setCategories([ newCategory, ...categories ]);
       // console.log('onAddCategory');
    }
    
  return (
    <>
    {/*   titulo */}
    <h1>GifExpertApp</h1>

    {/*  input */}
    <AddCategory 
    //setCategories = { setCategories } 
    onNewCategory = { onAddCategory }
     />

    {/*  lista Gifs */}
  
    
      {
          categories.map( (category) => (
              <GridGif key={category} category={category}/>
          ))
      }
    
        
    </>
    
  )
}
