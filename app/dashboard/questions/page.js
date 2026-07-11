import React from 'react';
import styles from './Questions.module.css'; // Adjust the import path as necessary

import facebookIcon from './facebook.png'
import twitterIcon from './discord.png';
// import linkedinIcon from './linkedin.png';
import instagramIcon from './instagram.png';

function Questions() {
  return (
    <div className={styles['about-wrapper']}>
      <div className={styles['about-left']}>
        <div className={styles['about-left-content']}>
          <div>
            <div className={styles['shadow']}>
              <div className={styles['about-img']}>
                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png" alt="about image" />
              </div>
            </div>
            <h2 className='text-bold text-gray-500'>Manglam Sinha</h2>
            <h3>Web developer</h3>
          </div>
          <ul className={styles.icons}>
        <li className={styles.facebook} style={{ backgroundImage: `url(${facebookIcon})` }}></li>
        <li className={styles.twitter} style={{ backgroundImage: `url(${twitterIcon})` }}></li>
        {/* <li className={styles.linkedin} style={{ backgroundImage: `url(${linkedinIcon})` }}></li> */}
        <li className={styles.instagram} style={{ backgroundImage: `url(${instagramIcon})` }}></li>
      </ul>
        </div>
      </div>

      <div className={styles['about-right']}>
        <h1>Hello<span>!</span></h1>
        {/* <h2>Here's who I am & what I do</h2> */}
        <div className={styles['about-btns']}>

          <button type="button" className={`${styles['btn']} ${styles['btn-white']}`}>Git hub</button>
        </div>
        <div className={styles['about-para']}>
         <p>I am currently a third-year student pursuing a B.Tech in Information Technology at the University School of Information, Communication and Technology (USICT). I am passionate about software development and web technologies, with hands-on experience in building full-stack web applications. I enjoy solving complex problems, designing efficient algorithms, and developing scalable software solutions. My experience includes creating responsive and user-friendly interfaces, implementing robust backend functionality, and optimizing application performance using modern technologies. I am always eager to learn new tools and continuously improve my technical skills through real-world projects.</p>
        </div>
       
      </div>
    </div>
  );
}

export default Questions;
