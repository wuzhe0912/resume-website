import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, withRouter } from 'react-router-dom';
import Home from './Home'
import Demo from './Demo'
import demoDetail from './demoDetail'

function App (props) {
  const location = props.location;
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className={styles.nav__title}>
              Pitt Wu
            </div>
          </Link>
          <div className={styles.nav__list}>
            <Link style={{ textDecoration: 'none' }} to="/"><p className={ location.pathname === '/' ? styles.selected : null }>Home</p></Link>
            <Link style={{ textDecoration: 'none' }} to="/demo"><p className={ location.pathname === '/demo' ? styles.selected : null }>Demo</p></Link>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <Route path="/" exact component={ Home } />
        <Route path="/demo" exact component={ Demo } />
        <Route path="/demo/:id" exact component={ demoDetail } />
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

export default withRouter(App);
