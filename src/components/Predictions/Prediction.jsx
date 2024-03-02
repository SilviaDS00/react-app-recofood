import axios from 'axios';

const predictImage = async (imageBlob) => {
  try {
    const formData = new FormData();
    formData.append('imagen', imageBlob, 'imagen.png');

    const response = await axios.post('https://django-app-recofood.onrender.com/prediction/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la predicción:', error);
    throw error; 
  }
};

export default predictImage;
