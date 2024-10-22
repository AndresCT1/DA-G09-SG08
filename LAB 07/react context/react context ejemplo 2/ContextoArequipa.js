import { createContext, useState } from 'react';

export const ContextoArequipa = createContext();

export const ProveedorArequipa = ({ children }) => {

  const [informacionTuristica, setInformacionTuristica] = useState({
    platosTipicos: [
      {
        nombre: 'Rocoto Relleno',
        descripcion: 'Plato tradicional arequipeño preparado con rocoto, carne picada y especias, acompañado de papas al horno.',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Rocoto_Relleno.jpg'
      },
      {
        nombre: 'Adobo',
        descripcion: 'Un guiso a base de carne de cerdo marinada con chicha de jora, ají panca, ajo, y otras especias. Es un plato típico de los domingos.',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobo_arequipe%C3%B1o.jpg'
      }
    ],
    lugaresTuristicos: [
      {
        nombre: 'Monasterio de Santa Catalina',
        descripcion: 'Un convento que parece una ciudadela en el corazón de Arequipa, lleno de historia y cultura. Fundado en 1580, es una parada obligatoria para los turistas.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQuz-CIT54Gd3q-e-1eAsbHrrdI5_Wd1eoA&s'
      },
      {
        nombre: 'Mirador de Yanahuara',
        descripcion: 'Este mirador ofrece una vista espectacular del volcán Misti, uno de los símbolos más icónicos de Arequipa. Rodeado de arcos históricos y una plaza tranquila.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtG2tac3mWVIazze6zrpQRUzZDxfb7jylrA&s'
      }
    ],
    tradiciones: [
      {
        nombre: 'La Fiesta de la Virgen de Chapi',
        descripcion: 'Esta celebración religiosa tiene lugar el 1 de mayo en el Santuario de Chapi. Los devotos realizan una peregrinación en honor a la Virgen, una de las patronas más importantes de Arequipa.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZu4enZdoZWe2EZJbRnIfqN2UPEw5Gsv3wWA&s'
      },
      {
        nombre: 'Carnavales Arequipeños',
        descripcion: 'Los carnavales son una de las festividades más coloridas de Arequipa, con música, danzas y juegos con agua, celebrados en febrero o marzo.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeSdeEG7P7jVLPwORyJ1M2ritjVUPXvdT_w&s'
      }
    ]
  });

  return (
    <ContextoArequipa.Provider value={{ informacionTuristica }}>
      {children}
    </ContextoArequipa.Provider>
  );
};
