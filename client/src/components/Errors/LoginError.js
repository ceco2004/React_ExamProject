import styles from "./Errors.module.css";



export default function LoginError() {

    return (
        <div className={styles.danger}>
            <h1>Something wet wrong while Login.</h1>
            <h2>Please try again later...</h2>
        </div>
    )
}