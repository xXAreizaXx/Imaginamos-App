import { getCategory } from '../../services/index'
import ArrowSplit from '../Icons/ArrowSplit'
import Clock from '../Icons/Clock'
import HamburguerWithColor from '../Icons/HamburguerWithColor'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './Category.module.css'

export default function Category() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategory().then(category => setCategory(category))
    }, [])

    return (
        <div className={styles.category}>
            <div className={styles.navCategory}>
                <h1>Restaurants <HamburguerWithColor /></h1>
                <div className={styles.delivery}>
                    <label><Clock fill="#FFF" with="15" height="15" />Delivery: </label>
                    <select>
                        <option defaultValue>Now</option>
                        <option value="1">15 min</option>
                        <option value="2">25 min</option>
                        <option value="3">35 min</option>
                    </select>
                </div>
            </div>
            <div className={styles.menu}>
                <ol className={styles.listMenu}>
                    {
                        category.map(({ id, icon, name }) =>
                            <li key={id}>
                                <a href="">
                                    <button>
                                        <Image src={icon} alt={name} width={30} height={30} />
                                    </button>
                                    {name}
                                </a>
                            </li>
                        )
                    }
                </ol>
                <button className={styles.arrowSplit}><ArrowSplit /></button>
            </div>
        </div>
    )
}