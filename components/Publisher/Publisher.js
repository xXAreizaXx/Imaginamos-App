import ArrowRigth from '../Icons/ArrowRigth'
import Image from 'next/image'
import Party from '../../assets/images/d.png'
import Publish from '../../assets/images/headerimage.png'
import styles from './Publisher.module.css'

export default function Publisher() {
    return (
        <div className={styles.publisher}>
            <Image className={styles.imgPublish} src={Publish} alt="Publish" width={250} height={250} />
            <div className={styles.prom}>
                <h2>
                    $0 delivery for 30 days!
                    <Image src={Party} alt="Party" width={30} height={30} />
                </h2>
                <p>$0 delivery free for orders over $10 for 30 days</p>
                <a href="">Learn more<ArrowRigth fill="#FE652B" /></a>
            </div>
        </div>
    )
}