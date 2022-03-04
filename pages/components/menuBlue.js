import styles from "../../styles/menu.module.scss";
import iconVietNam from "../../assets/images/vietnam.svg";
import iconUSA from "../../assets/images/united-states.svg";

function MenuBlue() {

    return (
        <div className={`${styles.menu__wrapper} ${styles.menuBlue}`}>
            <div className='container'>
                <div className={styles.menu}>
                    <div className={styles.col}>
                        <div className={`${styles.logo} ${styles.menuBlue__logo}`}>
                            <a> Baycungban</a>
                        </div>
                        <div className={styles.icons}>
                            <img src={iconVietNam.src} alt="" />
                            <img src={iconUSA.src} alt="" />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <ul className={styles.list_menu}>
                            <li className={styles.item}>
                                <a h>Promotion</a>
                            </li>
                            <li className={styles.item}>
                                <a>Flight Schedule</a>
                            </li>
                            <li className={styles.item}>
                                <a>About us</a>
                            </li>
                            <li className={styles.item}>
                                <a>Payment Guide</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <button className="btn btn--medium btn--white">Booking now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBlue