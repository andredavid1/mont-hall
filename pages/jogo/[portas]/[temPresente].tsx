import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Porta from '../../../components/Porta';

import styles from '../../../styles/Jogo.module.css';

export default function jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query])
  
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