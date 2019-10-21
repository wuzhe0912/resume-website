import React, { Component } from 'react';
import style from './style.module.scss'

export default () => {
  return <div className={ style.wrap }>
    {/* 個人簡介 */}
    <section className={ style.brief }>
      <img src={ require("../../assets/images/avatar.jpg") } alt=""/>
      <h1>Pitt Wu</h1>
      <ul>
        <li>Frontend Developer</li>
      </ul>
      <p>
        test content
      </p>
    </section>
    {/* Demo 簡述 */}
    <section className={style.demo}>
      <div className={style.title}>
        <h2>A section of demo</h2>
        <p>You can find more in the work overview.</p>
      </div>
    </section>
  </div>
}