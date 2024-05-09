
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GridGif = ({category}) => {

  const {images, isLoading} = useFetchGifs( category );

  
    console.log({images, isLoading});
  return (
    <>

    <h3>{category}</h3>
    {
        isLoading && (<h2>Cargando...</h2>)
    }

    <div className="card-grid">
    {
        images.map( ( img) => (
            <GifItem key={img.id} 
                          {...img}   />
          
        ))
    }

    </div>
 

    </>
  )
}
