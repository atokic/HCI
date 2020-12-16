import React from 'react'
import styles from './style.module.css'
 
import NavigationBar from '../../components/NavigationBar'
 
const Footer = () => (
  <footer className={styles.footer}>
      <ul className={styles.address}>
          <li className={styles.title}>
              LOGO
          </li>
      </ul>
      <NavigationBar />
  </footer>
)
 
export default Footer