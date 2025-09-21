'use client';

import Head from 'next/head';
import styles from './page.module.css';
import ProductCard from '@/app/components/ProductCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const url = "/api/produtos";

  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("response", data);
      const produtosRecebidos = Array.isArray(data) ? data : [];
      setProdutos(produtosRecebidos);
    } catch (error) {
      console.error("Falha ao buscar tarefas:", error);
      setProdutos([]);
    }
  }

    useEffect(() => {
      fetchProducts();
    }, []);

    return (
      <div className={styles.container}>
        <Head>
          <title>Mini Catálogo de Produtos</title>
          <meta name="description" content="Um catálogo simples feito com Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem-vindo ao nosso <a href="#">Catálogo!</a>
          </h1>

          <p className={styles.description}>
            Produtos incríveis esperando por você.
          </p>

          <div className={styles.grid}>
            {produtos.length > 0 ? produtos.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) : <p>Nenhum produto encontrado</p>}
          </div>
        </main>
      </div>
    );
  }