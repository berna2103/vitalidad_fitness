import React from 'react'
import Image from 'next/image'
import styles from './loadingspinner.module.css'


export default function LoadingSpinner() {
  return (
    <div className={styles.spinner_container}>
        <Image className={styles.spinner_logo} src='/favicon.ico' height={30} width={30} alt='logo'/>
        <p className='my-auto mx-2'>Cargando ...</p>
    </div>
  )
}
