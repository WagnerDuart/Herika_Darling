import '@/index.css'
import { Button } from '@/components/ui/button';
// import { LOGO1 } from './logos';
import { Logo2 } from './logo_menu';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = () => {
    return(
        <nav className="Navigation">
            <div className="navigation_menu container flex justify-between bg-slate-500" >
                {/* <LOGO1></LOGO1> */}
                <Logo2></Logo2>

                <div className='bg-red-500 flex '>
                    <ul className='flex justify-center items-center flex-row space-x-6' style={{ fontFamily: 'Syne, sans-serif' }}>
                        <li className='text-bronzeado_claro'>HOME</li>
                        <li>SOBRE NÓS</li>
                        <li>SERVIÇOS</li>
                        <li>PROFISSIONAIS</li>
                        <li>CONTATO</li>
                        <Button>AGENDAR HORÁRIO <FontAwesomeIcon icon={faClock} style={{  marginLeft: '5px' }} /></Button>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};