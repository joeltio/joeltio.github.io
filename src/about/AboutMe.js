import React from "react";

import styles from "./aboutMe.css";

const AboutMe = () => (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img className={styles.img} src="/media/me.jpeg" />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.header}>About me</h1>
            <p>
            If you're looking for a more <i>professional</i> description please
            look at my <a href="https://www.linkedin.com/in/joel-tio/">
            LinkedIn</a>.
            <br /><br />
            Hi, I am Joel. I develop software and think about math. My
            experience is quite diverse, I have tried machine learning, web
            development, mobile development, desktop app development and much
            of AWS cloud. But of course, "tried" can also mean "I tried it for
            a day". Here, "try" means that I have at least done a project with
            it.
            <br /><br />
            I am currently studying but I have a bunch of projects I do on the
            side. This website showcases my favourite projects and some
            thoughts I have on math and software. Though, the main reason why I
            have this website is just so that I can make use of the amazing
            domain name.
            </p>
        </div>
    </div>
)

export default AboutMe;