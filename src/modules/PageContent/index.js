import React from 'react'
import styles from './style.module.css'
import First from '../../components/Images/First'
import Second from '../../components/Images/Second'
import Third from '../../components/Images/Third'
import ImageContainer from '../../components/ImageContainer'

const PageContent = () => <section className={styles.pageContent}>
    <ImageContainer image={<First />}/>
  
</section> 

export default PageContent