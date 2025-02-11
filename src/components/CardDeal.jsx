import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find the best investment opportunities  <br className='sm:block hidden'/>in just a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        BoobaBlip’s AI-powered platform allows you to easily discover the most profitable investment opportunities tailored to your financial goals. With just a few simple actions, you can unlock optimized strategies that maximize returns, ensuring you always make the best decisions for your assets. Whether you’re new to investing or a seasoned pro, BoobaBlip makes it effortless to grow your wealth.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
