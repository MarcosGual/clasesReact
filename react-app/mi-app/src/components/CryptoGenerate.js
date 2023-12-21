import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoGenerate = () => {
  const [crypto, setCrypto] = useState("");

  const generarCrypto = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/nuevoCrypto");
      setCrypto(data.cryptoNumber);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Generate tu propio número crypto aleatorio!!</h2>
      <h3>{crypto}</h3>
      <button onClick={generarCrypto}>Generar Crypto</button>
    </div>
  );
};

export default CryptoGenerate;
