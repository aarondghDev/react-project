import React, { useEffect } from 'react'
// Cada vez que pintemos este componente la vista se generaria con una nueva fecha, entonces cada segundo la fecha de la pestaña va a cambiar con el document.title, y cuando el componente desaparece se ejecuta = document.title = "Tiempo detenido  &  clearInterval(intervalID)  - para que no siga realizando cosas
const AllCycles = () => {

    useEffect(() => {
        console.log("Componente actualizado");

        const intervalID = setInterval(() => {
            document.title = `${new Date()}` // Esto cambiara el nombre de la pestaña todo el tiempo
            console.log("actualizacion del component");
        }, 1000); // El 1000 quiere decir que cada segundo se actualiza
        return () => {
            console.log("Componente va a desaparecer");
            document.title = "Tiempo detenido"
            clearInterval(intervalID)
        };
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default AllCycles;
