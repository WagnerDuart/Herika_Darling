import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
    const color = "#FFFFFF";

    return (
        
            <nav className="Navigation  bg-bronzeado_claro ">
                <div className="container flex justify-between text-branco">
                    <ul className="navigation_contact flex justify-center items-center flex-row space-x-6">
                        <li><FontAwesomeIcon icon={faEnvelope} style={{ color }}  /> contato@herikadarling.com.br </li>
                        <li><FontAwesomeIcon icon={faPhone} style={{ color }} /> (33)98701-0721 </li>
                        <li><FontAwesomeIcon icon={faWhatsapp} style={{ color }} /> (33)98701-0721 </li>
                    </ul>
                    <ul className="navigation_social flex justify-center items-center flex-row space-x-2  ">
                        <li>Siga-nos:</li>
                        <li><FaYoutube style={{ color }} /></li>
                        <li><FaInstagram style={{ color }} /></li>
                        <li><FaTiktok style={{ color }} /></li>
                        <li><FaFacebook style={{ color }} /></li>
                    </ul>
                </div>
            </nav>
        
    );
};

