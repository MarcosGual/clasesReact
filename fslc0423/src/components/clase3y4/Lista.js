import { useContext, useEffect, useState } from "react";
import ItemLista from "../clase1y2/ItemLista";
import { ProductosContext, useProductos } from "../../providers/ProductosProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

const Lista = () => {

    const [verLista, setVerLista] = useState(false);
    const handleVerLista = () => setVerLista(!verLista);
    let [paginaIniciada, setPaginaIniciada] = useState(false);
    const {isDarkTheme} = useContext(ThemeContext);

    const { productos, setProductos } = useContext(ProductosContext);

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#020202' : null, color: isDarkTheme ? '#ffffff' : null }}>
            <button onClick={handleVerLista}>Ver Lista</button>
            {verLista && <div>
                <h3>Lista de compras</h3>
                <ul>
                    {productos.map((itemLista) => <ItemLista key={itemLista.id} producto={itemLista} />)}
                </ul>
            </div>}
        </div>
    )
}

export default Lista;

//use effect actualización (ciclo de vida)
// useEffect(() => {
//     if (paginaIniciada === true) {
//         if (verLista === true) {
//             alert('Lista visible')
//         } else {
//             alert('Lista oculta')
//         }
//     }
//     setPaginaIniciada(true);
// }, [verLista]); //fase ACTUALIZACIÓN del ciclo vida