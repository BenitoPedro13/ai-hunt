import heroBg from '@/../public/hero-bg.jpeg';
import style from '@/style/hero.module.css';
import Image from 'next/image';
import App from './Slider';

const Hero = () => {
  return (
    <div className={style.heroContainer}>
      
      <div className={style.heroContent}>
        <div className={style.topRow}>
          <div className={style.firstTopRow}>
            <div className={style.right}>
              <div className={style.firstRightRow}>
                <p className={style.firstRightRowText}>
                  87.4832 - ©2022
                </p>
                <p className={style.secondRightRowText}>
                  &gt;&gt;THE HUMANITY IS INCREASING BY 45% APY CAPACITY OF VISUAL DESIGN DEMOCRATIC ACESS
                </p>
              </div>
              <h1 className={style.rightTitle}>
                <span className={style.blue}>Create</span>{' '}
                your{' '}
                <span className={style.orange}>art</span>{' '}
                as{' '}
                <span className={style.green}>never</span>{' '}
                before{' '}
                <span className={style.purple}>seen</span>
                &gt;&gt;
              </h1>
            </div>
          </div>
        </div>
        <div className={style.bootomRow}>
          <p className={style.bottomRowText}>tools built with high end engines</p>
        </div>
      </div>
      
      <Image
        src={heroBg}
        alt="hero background image"
        className={style.heroBg}
        width={undefined}
        height="512"
      /><App />
    </div>
    
  )
}

export default Hero