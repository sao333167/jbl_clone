import React from 'react';
import styles from './AccessoriesBanner.module.css';
import Link from 'next/link';
import MainProductCard from '@/app/components/MainProductCard';

const AccessoriesBanner = () => {
  return (
    <>
    <div className={styles.accessoriesBanner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>Accessories</h1>
      </div>
    </div>
    <div className="route">
        <Link href="/">
          <span className="home">Home / </span>
        </Link>
        <span className="sub-dir">Gaming Series</span>
      </div>
      <MainProductCard/>    
    </>
  );
};

export default AccessoriesBanner;
