import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

//hook useContext=  capturar o valor que é fornecido 
//por algum Provider


//capturando os dados do value e do Provider

export function CompFilhoE(props) {

  const resultado = useContext(BatataContext);

  return <div className="filho-e">
    <h3>FILHO E</h3>
    <p>
      <b>Valor:</b>
      {resultado}
    </p>
  </div>;
}
