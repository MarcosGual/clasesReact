import React, { useEffect, useState } from 'react';
import Quote from './Quote';
import axios from 'axios';

const initialQuote = {
    text: "Cita",
    author: "Autor"
}

const BreakingBad = () => {
    const [quote, setQuote] = useState(initialQuote);
    const [isLoading, setIsLoading] = useState(false);

    const quoteUpdate = async () => {
        try {
            setIsLoading(true);
            const url = 'https://api.breakingbadquotes.xyz/v1/quotes';
            // const res = await fetch(url);
            // // console.log(res.json());

            // const [newQuote] = await res.json(); //destructuración del array de respuesta

            const { data } = await axios.get(url);
            const [newQuote] = data;

            setQuote({ text: newQuote.quote, author: newQuote.author })

        } catch (e) {
            console.log(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        quoteUpdate()
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent:'center', width: '100%' }}>
            <img
                src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
                alt="breaking-bad" width="300"
            />
            {isLoading ? <h5>Cargando...</h5> : <Quote quote={quote} />}
            <button onClick={quoteUpdate} className='btn btn-dark btn-sm'>Obtener otra cita</button>
        </div>
    );
}

export default BreakingBad;
