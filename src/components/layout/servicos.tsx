import { useState, useEffect } from 'react';
import { Button } from '../ui/button';


const imagem = "https://img.hotimg.com/fundo_servico.png"


interface Servico {
    _id: string;
    name_serv: string;
    description: string;
    value: number;
    name_prof: string;

}

export const Servicos = () => {
    const [servicos, setServicos] = useState<Servico[]>([]);

    useEffect(() => {
        fetch('https://api-web-final.onrender.com/service')
            .then(response => response.json())
            .then(data => setServicos(data))
            .catch(error => console.error('Erro ao obter dados da API:', error));
    }, []);

    return (
        <div className="relative" style={{
            backgroundImage: `url(${imagem})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200px 400px',
            backgroundPosition: 'top left',
        }}>
            <div className="relative h-screen">
                <div className="relative group mt-16 mb-16">
                    <div className="container mt-16 mb-16 text-center">
                        <p className="text-lg text-gray-800 font-semibold h-4">Nossos</p>
                        <p className="text-3xl text-amber-800 font-semibold">Serviços</p>
                    </div>
                    <div className="container grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {servicos.map((servico) => (
                            <div
                                key={servico._id}
                                className="relative p-4 rounded-md shadow-md overflow-hidden transition-all duration-300 transform bg-opacity-80 group hover:scale-105 hover:bg-gray-200"
                            >
                                <div className="relative z-10">
                                    <p className="text-lg mb-2 text-center text-amber-800 font-semibold">{servico.name_serv}</p>
                                    <p className="text-sm mb-2 text-center text-gray-700 font-semibold">{servico.description}</p>
                                    <p className="text-sm mb-2 text-center font-semibold">R$ {servico.value.toFixed(2)}</p>
                                    <p className="text-sm mb-2 text-center font-semibold">Profissional: {servico.name_prof}</p>
                                    <Button className='rounded-md mx-auto bg-bronzeado_claro'>AGENDAR HORÁRIO</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
