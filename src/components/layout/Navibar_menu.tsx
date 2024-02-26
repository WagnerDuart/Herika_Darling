import '@/index.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo2 } from './logo_menu';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="Navigation bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Logo2 />

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        {menuOpen ? 'Fechar' : 'Menu'}
                    </button>
                </div>

                <div className={`lg:flex lg:items-center ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="lg:flex justify-center items-center space-x-6 lg:space-x-8">
                        <li className="text-bronzeado_claro">HOME</li>
                        <li>SOBRE NÓS</li>
                        <li>SERVIÇOS</li>
                        <li>PROFISSIONAIS</li>
                        <li>CONTATO</li>
                        <Button className="bg-bronzeado_claro text-white">AGENDAR HORÁRIO <FontAwesomeIcon icon={faClock} className="ml-2" /></Button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
