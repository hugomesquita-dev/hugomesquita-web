/** @format */
import styles from "../Banner/styles.module.scss";
import { Avatar } from "../Avatar";

export function Banner() {
  return (
    <section className={styles.banner}>
      <div>
        <h1>Hugo Mesquita</h1>
        <h2>Desenvolvedor Web e Aplicativos</h2>
        <p>
          Sou programador, apaixonado por tecnologia. Atualmente trabalho como{" "}
          <strong>Developer Engineer</strong>, tenho mais de 15 anos de
          experiência, desenvolvo soluções utilizando tecnologias e serviços de
          clouds que envolve Python, PHP, JavaScript, NodeJS, Oracle, MySQL,
          MongoDB, HTML, CSS também utilizo ReactJS, NextJS e Angular para
          desenvolvimento frontend e React Native para App Mobile.
        </p>
        <p>
          Gosto de desafios e ideias inovadoras, atualmente divido meu tempo
          entre consultoria, construção de negócios, programação e um café bem
          forte.
        </p>
      </div>
      <Avatar />
    </section>
  );
}
