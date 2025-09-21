'use client';

import Image from 'next/image';
import styles from '../page.module.css';

const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

export default function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <Image
                src={product.imageUrl}
                alt={`Imagem do produto ${product.nome}`}
                width={300}
                height={300}
                layout="responsive"
            />
            <div className={styles.cardContent}>
                <h3>{product.nome}</h3>
                <p>{formatPrice(product.preco)}</p>
            </div>
        </div>
    );
}