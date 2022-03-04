import styles from "../../styles/footer.module.scss";

import iconPhone from "../../assets/images/phone.svg";
import iconEmail from "../../assets/images/email.svg";
import iconFacebook from "../../assets/images/facebook.svg";
import iconInstagram from "../../assets/images/instagram.svg";


function Footer(props) {

    return (
        <div className={`container`}>
            <div className={`${styles.footer}`}>
                <div className={`${styles.col}`}>
                    <div className={`${styles.contact}`}>
                        <img src={iconPhone.src} alt="" />
                        <span>Call us: +84 908 02 02 58</span>
                    </div>
                    <div className={`${styles.contact}`}>
                        <img src={iconEmail.src} alt="" />
                        <span>Email: chucinog@gmail.com</span>
                    </div>
                </div>
                <div className={`${styles.col}`}>
                    <div className={`${styles.follow}`}>
                        <span>Follow us</span>
                        <a href=""><img src={iconFacebook.src} alt="" /></a>
                        <a href=""> <img src={iconInstagram.src} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer
