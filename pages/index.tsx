import styles from "../styles/Home.module.css";
import Image from "next/image";

const logo = () => {
  return "https://avatars.githubusercontent.com/u/87408216?s=400&u=8f0e77897ef5d748ca80350761764222e66d7ca0&v=4";
};

export default function Home() {
  return (
    <div className={styles.container}>
      <h2 style={{ color: "#d6d5d5" }}>FireFly Shrine</h2>
      <Image
        loader={logo}
        src="me.png"
        alt="Símbolo representando um vagalume"
        width={300}
        height={300}
      />
    </div>
  );
}
