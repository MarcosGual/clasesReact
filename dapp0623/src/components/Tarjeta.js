import { useContext } from "react";
import Boton from "./Boton";
import { useUserContext } from "../providers/UserContext";

const Tarjeta = (props) => {

    const { descripcion, nombre } = props.lugar;

    const { userName, setUserName } = useUserContext();

    return (
        <figure style={{
            border: "solid 2px black",
            width: "200px",
            height: "275px",
            textAlign: "center"
        }}>
            <figcaption>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <p>Usuario: {userName}</p>
            </figcaption>
            <Boton />
        </figure>
    )
};

export default Tarjeta;