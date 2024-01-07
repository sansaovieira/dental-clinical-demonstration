import React from "react";
import styles from "./CardDepoimento.module.css";

const CardDepoimento = (props) => {
  return (
    <div className={styles.card_depoimento}>
      <img
        className={styles.img_aparelho}
        src={props.imagem}
        alt={props.nome}
        title={props.nome}
      />
      <h3>{props.nome}</h3>
      <p>{props.descricao}</p>
    </div>
  );
};

export default CardDepoimento;

