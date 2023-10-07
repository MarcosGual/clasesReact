import React, { useEffect, useState } from 'react';
import Quote from './Quote';
import axios from 'axios';

const BreakingBad = () => {
    //estado
    const [cita, setCita] = useState({ quote: "", author: "" });
    const [loading, setLoading] = useState(false);

    const actualizarCita = async () => {
        setLoading(true);

        const url = "https://api.breakingbadquotes.xyz/v1/quotes";
        const res = await fetch(url); //espero a que me llegue la respuesta de la petición
        // console.log(res.json());
        if (res.status === 200) {
            const [quote] = await res.json();
            setCita(quote);
        }
        setLoading(false);
    }

    const actualizarCitaAxios = async () => {
        setLoading(true);

        try {
            const url = "https://api.breakingbadquotes.xyz/v1/quotes";
            const res = await axios.get(url);
            if (res.status === 200) {
                const [nuevaCita] = res.data;
                setCita(nuevaCita);
            }
            setLoading(false);
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        actualizarCitaAxios();
    }, []);
    //array de dependencias vacío-->actualizarCita se ejecuta sólo la primera vez
    // (cuando se monta el componente)

    return (
        <div style={{ display: "flex", flexDirection: "column", width: 300, textAlign: 'center' }}>
            <h2>Fetch, Axios, APIs en React</h2>
            <img
                src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
                alt="breaking-bad" width="300"
            />
            {loading ? 'Cargando...' : <Quote cita={cita} />}
            <button onClick={() => actualizarCitaAxios()}>Obtener otra cita</button>
        </div>

    );
}

export default BreakingBad;
