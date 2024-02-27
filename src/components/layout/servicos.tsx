import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const imagem = "https://img.hotimg.com/fundo_servico.png";

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

  const whats = (phoneNumber: string, serviceName: string) => {
    const message = `Gostaria de agendar o serviço: ${serviceName}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="relative" style={{
      backgroundImage: `url(${imagem})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200px 400px',
      backgroundPosition: 'top left',
    }}>
      <div className="container mx-auto">
        <div className="mt-16 mb-16 text-center">
          <p className="text-lg text-gray-800 font-semibold mb-2">Nossos</p>
          <p className="text-3xl text-amber-800 font-semibold">Serviços</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {servicos.map((servico) => (
            <div
              key={servico._id}
              className="p-4 rounded-md shadow-md overflow-hidden transition-all duration-300 transform bg-opacity-80 group hover:scale-105 hover:bg-gray-200"
            >
              <div>
                <p className="text-lg mb-2 text-center text-amber-800 font-semibold">{servico.name_serv}</p>
                <p className="text-sm mb-2 text-center text-gray-700 font-semibold">{servico.description}</p>
                <p className="text-sm mb-2 text-center font-semibold">R$ {servico.value.toFixed(2)}</p>
                <p className="text-sm mb-2 text-center font-semibold">Profissional: {servico.name_prof}</p>
                <Button className='block w-full mx-auto rounded-md bg-bronzeado_claro' onClick={() => whats('+5577991835717', servico.name_serv)}>
                  AGENDAR HORÁRIO
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
