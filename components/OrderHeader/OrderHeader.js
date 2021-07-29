import Avatar from "../Icons/Avatar"
import Image from "next/image"
import Link from "next/link"
import styles from './OrderHeader.module.css'
import useUser from '../../hooks/useUser'

export default function OrderHeader(props) {
    const user = useUser();

    return (
        <header className={styles.orderHeader}>
            {
                user
                    ?
                    <>
                        <Image className={styles.imageAvatar} src={user.avatar} alt={user.username} width={45} height={45} />
                        <h2 className={styles.userName}>{user.username}</h2>
                    </>
                    :
                    <>
                        <Link href="/Login"><a className={styles.btnLogin}>Login</a></Link>
                        <Avatar />
                    </>
            }
            <p className={styles.numberOfProducts}>{props.count.length}</p>
        </header>
    )
}