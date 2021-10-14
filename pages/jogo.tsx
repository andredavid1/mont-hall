import { useState } from "react";
import Link from 'next/link';
import { atualizarPortas, criarPortas } from "../functions/portas";
import Porta from '../components/Porta';

import styles from '../styles/Jogo.module.css';

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 2));

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}