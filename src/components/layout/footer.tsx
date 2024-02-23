import { Logo3 } from "./logo_footer";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    const color = "#FFFFFF";
    return (
        <footer>
            <div className=" mt-16 bg-black text-white p-4 mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-4 lg:mb-0 lg:w-1/2 text-center flex flex-col items-center">
                    <Logo3/>
                    <p className="p-4">
                        Descubra a beleza que vai além do cabelo. Em nosso salão, proporcionamos uma experiência única,
                        focada na estética que realça a sua verdadeira essência.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-between">
                    <div className="w-8"></div> {/* criação de um espaçamento no footer */}
                    <div>
                        <h1 className="text-amber-800" >Empresa</h1>
                        <br />
                        <p>Sobre Nós</p>
                        <p>Serviços</p>
                        <p>Profissionais</p>
                        <p>Trabalhe Conosco</p>
                    </div>
                    <div>
                        <h1 className="text-amber-800" >Serviços</h1>
                        <br />
                        <p>Lavada Especial</p>
                        <p>Corte Feminino</p>
                        <p>Escova</p>
                        <p>Luzes</p>
                        <p>Mais Serviços</p>
                    </div>
                    <div>
                        <h1 className="text-amber-800" >Contato</h1>
                        <br />
                        <p>Fale Conosco</p>
                        <p>Agendar Horario</p>
                        <p><FontAwesomeIcon icon={faPhone} style={{ color }} /> (33)98701-0721 </p>
                        <p><FontAwesomeIcon icon={faWhatsapp} style={{ color }} /> (33)98701-0721 </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 text-white mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full p-1 lg:w-1/3 flex justify-center items-center">
                    <p>Herika Darling</p>
                </div>
                <div className="w-full p-1 lg:w-1/3 flex justify-center items-center">
                    <p>Conheça nossos termos de uso e políticas</p>
                </div>
                <div className="w-full p-1 lg:w-1/3 flex justify-center items-center">
                    <p>Desenvolvido por ****</p>
                </div>
            </div>



        </footer>   

    );
};

