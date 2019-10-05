import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route } from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link to="/">
            <div className={styles.nav__title}>
              Pitt Wu
            </div>
          </Link>
          <div className={styles.nav__list}>
            <Link to="/"><p>HOME</p></Link>
            <Link to="/works"><p>WORKS</p></Link>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <Route path="/" component={ HomePage } />
        <Route path="/works" component={ WorkPage } />
        <Route path="/works:id" component={ WorkPageDetail } />
      </section>
      <footer className={styles.footer}>
        <h3>
          <b>© 2019 Pitt Wu</b>
        </h3>
        <p>Handmade with</p>
      </footer>
    </div>
  );
}

export default App;
