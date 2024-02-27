import { Button } from "../ui/button";


const imagem = 'https://img.hotimg.com/herika.cop.png'

export const Tela = () => {
    return (
        <div className="grid grid-cols-12 relative h-screen bg-bronzeado_claro">
            <div className="col-span-12 md:col-span-6 flex items-center justify-center imagem-container">
                <img src={imagem} alt="Imagem" className="w-11/12 md:w-full max-w-screen-md h-auto hidden md:block" />
            </div>
            <div className="col-span-12 md:col-span-6 p-4 flex items-center">
                <div className="lg:col-span-8 lg:mx-auto xl:col-span-7 xl:mx-auto">
                    <h3 className="text-4xl text-white font-bold mb-4">Beleza completa <br />em um só lugar</h3>
                    <p className="text-white mb-4">Descubra a excelência em cada detalhe: nossos especialistas em design de sobrancelhas aprimoram seu olhar, enquanto tratamentos faciais personalizados revitalizam sua pele. Com nossa técnica de epilação, experimente uma suavidade incomparável. E para um toque final impecável, nossos designs de unhas e serviços de manicure elevam seu estilo com elegância. Encontre o melhor em cuidados estéticos e realce sua beleza única.</p>
                    <div className="text-center">
                        <Button className='rounded-md bg-gray-900'>Saiba Mais</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
