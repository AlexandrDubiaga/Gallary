export const LOAD_FOTOS = "LOAD_FOTOS";
import axios from 'axios';


export const loadFotos = () => {
  return async (dispatch) => {
    const fotos = await axios.get('https://api.unsplash.com/photos/random?count=50&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043');
    dispatch({
      type: LOAD_FOTOS,
      payload: fotos.data,
    });
  };
};

