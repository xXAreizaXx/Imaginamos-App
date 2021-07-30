import { getProducts } from '../services/index'
import { useState, useEffect } from 'react'
import ArrowRigth from '../components/Icons/ArrowRigth'
import Cart from '../components/Icons/Cart'
import Category from '../components/Category/Category'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Image from 'next/image'
import OrderHeader from '../components/OrderHeader/OrderHeader'
import Publisher from '../components/Publisher/Publisher'
import Star from '../components/Icons/Star'
import styles from '../styles/Home.module.css'
import UserInfo from '../components/UserInfo/UserInfo'

export default function Home() {
  const [addCart, setAddCart] = useState([])
  const [count, setCount] = useState(1)
  const [products, setProducts] = useState([])
  var sumTotal = 0;
  var countAddCart = 1;

  const handleClickAdd = (e) => {
    const id = parseInt(e.target.id);
    const add = products[id - 1]

    e.target.disabled = true
    setAddCart([...addCart, add])
  }


  const handleChangeAdd = (e) => {
    countAddCart = e.target.value;
    const id = parseInt(e.target.id) - 1
    const price = addCart[id].price;
    const totalPrice = price * countAddCart;
    const queryPrice = document.querySelectorAll('p.priceTotal')

    document.getElementsByName(`${e.target.id}`)[0].innerHTML = totalPrice;

    for (let i = 0; i < queryPrice.length; i++) {
      document.getElementById('totalBuy').innerHTML = 'Total: ' + (sumTotal += parseInt(queryPrice[i].innerHTML));
    }
  }


  useEffect(() => {
    getProducts()
      .then(products => setProducts(products))

  }, [])

  return (
    <>
      <Head>
        <title>Chukwudi | Home</title>
        <meta name="description" content="Tecnic test to IMAGINAMOS S.A.S" />
        <link rel="icon" href="/store.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Publisher />
          <Category />
          <div className={styles.products}>
            {
              products.map(({ id, name, qualification, time, price, image }) =>
                <div className={styles.cardProduct} key={id}>
                  <div className={styles.imageBox}>
                    <Image className={styles.imageCard} src={image} alt={name} width={300} height={170} />
                    <div className={styles.durations}>{time}</div>
                  </div>
                  <h3>{name}</h3>
                  <div className={styles.score}>
                    <button className={styles.star} ><Star />{qualification}</button>
                    <p>$ {price}</p>
                  </div>
                  <button className={styles.btnCart} disabled={false} id={id} onClick={handleClickAdd} ><Cart /></button>
                </div>
              )
            }
          </div>
        </div>
        <div className={styles.myOrder}>
          <OrderHeader count={addCart} />
          <h1 className={styles.titleMyOrder}>My 😎 Order</h1>
          <UserInfo />
          <div className={styles.cart}>
            {
              addCart.map(({ id, name, price, image }) =>
                <div className={styles.product} key={id}>
                  <Image className={styles.imageCart} src={image} alt={name} width={80} height={50} />
                  <input className={styles.countCart} type="number" min="1" placeholder="1" id={id} onChange={handleChangeAdd} />
                  <p>x</p>
                  <h5>{name}</h5>
                  <p className="priceTotal" name={id} accessKey={id}>{price}</p>
                </div>
              )
            }
            <h2 className={styles.totalBuy} id="totalBuy"></h2>
          </div>
          <div className={styles.totalCart}>
            <div className={styles.persons}>
              <h3>Persons</h3>
              <div className={styles.count}>
                {
                  count === 1
                    ?
                    <>
                      <h3>{count}</h3>
                      <button className={styles.countButton} onClick={() => setCount(count + 1)}>+</button>
                    </>
                    :
                    <>
                      <button className={styles.countButton} onClick={() => setCount(count - 1)}>-</button>
                      <h3>{count}</h3>
                      <button className={styles.countButton} onClick={() => setCount(count + 1)}>+</button>
                    </>
                }
              </div>
            </div>
            <button className={styles.checkout}><h3>Checkout</h3><ArrowRigth fill="#000" /></button>
          </div>
        </div>

      </div >
    </>


  )
}
