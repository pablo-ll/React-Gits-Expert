import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [images, seTimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async() => {
    const newImagenes = await getGif(category)
    seTimages(newImagenes);
    setIsLoading(false);
  }

  
     
    useEffect(() => {
      getImagenes();
    }, []);

  return {
    images,
    isLoading
  }
}
