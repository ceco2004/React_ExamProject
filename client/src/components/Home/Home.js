import styles from "./Home.module.css";

export default function Home() {
    const styleArr = [styles.center,
                     styles.red,
                     styles.background,
                     styles['full-screen']]
    return (
        <div className={styleArr.join(" ")}>
            <h1>Hello from my site</h1>
        </div>
    )
}