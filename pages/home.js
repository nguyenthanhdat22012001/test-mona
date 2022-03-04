import { IoMdArrowDropdown } from 'react-icons/Io';

import styles from "../styles/home.module.scss";
import banner from "../assets/images/banner.png";
import iconNextAndBack from "../assets/images/next-and-back.svg";
import iconCalendar from "../assets/images/calendar.svg";
import iconNext from "../assets/images/next.svg";

import Menu from "./components/menu";
import Footer from "./components/footer";

function Home() {

    return (
        <div>
            <div className={styles.home}>
                <img src={`${banner.src}`} alt="" />

                <Menu />

                <div className={styles.texts_banner}>
                    <h1>Hello!</h1>
                    <h1>Where are</h1>
                    <h1>you <span>flying</span> to ...</h1>
                </div>

                <div className={`${styles.wrapperReviewTop}`}>
                    <div className={`container ${styles.boxReviewTop}`}>
                        <div className={`${styles.row} ${styles.boxReviewTop__top}`}>
                            <h4>One way / Round-trip</h4>
                            <h4>Multi-city</h4>
                            <h4><span>02</span> Adult, <span>01</span> children <span className={styles.icon}><IoMdArrowDropdown /></span></h4>
                            <h4>Business Class <span className={styles.icon}><IoMdArrowDropdown /></span></h4>
                        </div>
                        <div className={`${styles.row} ${styles.boxReviewTop__bottom}`}>
                            <div className={`${styles.boxReviewTop__col} ${styles.boxReviewTop__bookingFrom}`}>
                                <span>From</span>
                                <h3>Da Nang</h3>
                                <p>Quang Nam, Viet Nam</p>
                            </div>
                            <div className={`${styles.boxReviewTop__col} ${styles.boxReviewTop__bookingTo}`}>
                                <span>TO</span>
                                <h3>Ho Chi Minh</h3>
                                <p>Viet Nam</p>
                                <img src={iconNextAndBack.src} alt="" />
                            </div>
                            <div className={`${styles.boxReviewTop__col} ${styles.boxReviewTop__date}`}>
                                <div className={`${styles.boxReviewTop__item}`}>
                                    <span>Departure</span>
                                    <h3>Fri, 22 Mar, 2022  <img src={iconCalendar.src} alt="" /></h3>
                                    <div className={`${styles.boxReviewTop__navigate}`}>
                                        <a href=''>Prev</a>
                                        <a>Next</a>
                                    </div>
                                </div>
                                <div className={`${styles.boxReviewTop__item}`}>
                                    <span>Departure</span>
                                    <h3>Fri, 22 Mar, 2022  <img src={iconCalendar.src} alt="" /></h3>
                                    <div className={`${styles.boxReviewTop__navigate}`}>
                                        <a href=''>Prev</a>
                                        <a>Next</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={`btn btn--big btn--blue ${styles.btn__search}`}>
                            Search Flights
                            <img src={iconNext.src} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home