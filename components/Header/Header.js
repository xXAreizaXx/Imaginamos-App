import Collapse from '../Icons/Collapse'
import Search from '../Icons/Search'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <Collapse />
            <h2>Chukwudi</h2>
            <div className={styles.inputSearch}>
                <Search />
                <input type="search" name="Search" id={styles.search} placeholder="Search" />
            </div>
        </header>
    )
}