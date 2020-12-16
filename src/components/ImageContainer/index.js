import React from 'react'
import styles from './style.module.css'
import First from '../Images/First'
import Second from '../Images/Second'
import Third from '../Images/Third'

  const ImageContainer = () => (
    <section className={styles.images}>
        <First />
        <Second />
        <Third />
    </section>
)

export default ImageContainer