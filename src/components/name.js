import styles from '../app/page.module.css'
export default function Name() {
    const another = 'React.js is unlocked!'
    return (
        <div>
            <h1 className={styles.green}>Hello, Satzhan!</h1>
            <p className={styles.rainbow}>{another}</p>
        </div>
    )
}