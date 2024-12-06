import styles from "@/styles/Home.module.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <Spline scene="https://prod.spline.design/u5CaaMXLphNu2yot/scene.splinecode" />
      </main>
    </>
  );
}