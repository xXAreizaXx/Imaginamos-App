import Clock from "../Icons/Clock"
import styles from './UserInfo.module.css'

export default function UserInfo() {
    return (
        <div className={styles.userInfo}>
            <div className={styles.directions}>
                <p>625 St Marks Ave</p>
                <a href="" className={styles.edit}>Edit</a>
            </div>
            <div className={styles.deliveryTime}>
                <p><Clock fill="#FED748" with="25" height="25" />35 min</p>
                <a href="" className={styles.chooseTime}>Choose time</a>
            </div>
        </div>
    )
}