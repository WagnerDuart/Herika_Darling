import { useState } from 'react';
import { Button } from '@/components/ui/button';
import imagem from '@/images/fundo_servico.png';
import '@/index.css'


export const Servicos = () => {
    const [servicos] = useState([
        { id: 1, nome: 'Corte de Cabelo', descricao: "um breve texto sobre kkk", preco: 50.0, profissional: 'Maria' },
        { id: 2, nome: 'Coloração', descricao: "um breve texto sobre kkk", preco: 80.0, profissional: 'João' },
        { id: 3, nome: 'Manicure', descricao: "um breve texto sobre kkk", preco: 30.0, profissional: 'Ana' },
        { id: 4, nome: 'Maquiagem', descricao: "um breve texto sobre kkk", preco: 60.0, profissional: 'Carlos' },
        { id: 5, nome: 'Corte de Cabelo', descricao: "um breve texto sobre kkk", preco: 50.0, profissional: 'Maria' },
        { id: 6, nome: 'Coloração', descricao: "um breve texto sobre kkk", preco: 80.0, profissional: 'João' },
    ]);


    return (
        <div className="relative" style={{
            backgroundImage: `url(${imagem})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '200px 400px',
            backgroundPosition: 'top left',
        }}>
            <div className="relative group mt-16 mb-16">
                <div className="container mt-16 mb-16 text-center">
                    <p className="text-lg text-gray-800 font-semibold h-4">Nossos</p>
                    <p className="text-3xl text-amber-800 font-semibold">Serviços</p>
                </div>
                <div className="container grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {servicos.map((servico) => (
                        <div
                            key={servico.id}
                            className="relative p-4 rounded-md shadow-md overflow-hidden transition-all duration-300 transform bg-opacity-80 hover:scale-105 group"
                        >
                            <div
                                className="bg-image absolute inset-0 opacity-0 hover:opacity-40 transition-opacity"
                                style={{
                                    background: `url(${imagem})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            ></div>
                            <div className="relative z-10">
                                <p className="text-lg mb-2 text-center text-amber-800 font-semibold">{servico.nome}</p>
                                <p className="text-sm mb-2 text-center text-gray-700 font-semibold">{servico.descricao}</p>
                                <p className="text-sm mb-2 text-center font-semibold">R$ {servico.preco.toFixed(2)}</p>
                                <p className="text-sm mb-2 text-center font-semibold">Profissional: {servico.profissional}</p>
                                <Button className='rounded-md mx-auto bg-bronzeado_claro'>AGENDAR HORÁRIO</Button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};


