import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

const color = "#FFFFFF";
const email = "contato@herikadarling.com.br";
const phoneNumber = "(33)98701-0721";

export const Contact = () => {
    return (
        <nav className="Navigation bg-bronzeado_claro">
            <div className="container flex flex-col lg:flex-row justify-between text-branco p-4">
                <ul className="navigation_contact flex flex-col lg:flex-row justify-center items-center lg:space-x-6 mb-4 lg:mb-0 hidden lg:flex">
                    <li className="contact-info">
                        <FontAwesomeIcon icon={faEnvelope} style={{ color }} /> {email}
                    </li>
                    <li className="contact-info">
                        <FontAwesomeIcon icon={faPhone} style={{ color }} /> {phoneNumber}
                    </li>
                    <li className="contact-info">
                        <FontAwesomeIcon icon={faWhatsapp} style={{ color }} /> {phoneNumber}
                    </li>
                </ul>

                <ul className="navigation_social flex justify-center items-center space-x-2">
                    <li className="hidden lg:block">Siga-nos:</li>
                    <li><FaYoutube className="social-icon" /></li>
                    <li><FaInstagram className="social-icon" /></li>
                    <li><FaTiktok className="social-icon" /></li>
                    <li><FaFacebook className="social-icon" /></li>
                </ul>
            </div>
        </nav>
    );
};
