import "@/index.css";

const imagem = 'https://img.hotimg.com/imagem02.png'

export const Sobre_nos = () => {
  return (
    <article className="h-screen flex flex-col sm:flex-row md:flex-row-reverse">
      <div className="w-full sm:w-1/2 md:w-1/2 p-4">
        <div className="right-section">
        <img src={imagem} alt="Imagem" className="w-11/12 md:w-full max-w-screen-md h-auto hidden md:block" />
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 flex flex-col items-center sm:items-start md:items-start p-4">
        <div className="conteudo container text-left mb-4">
          <h1 className="text-justify  container text-3xl font-semibold text-black-600">
            Sobre o
          </h1>
          <h2 className="text-justify container text-2xl font-medium text-amber-800">
            HERIKA DARLIGN espaço de beleza
          </h2>
          <p className="text-justify container text-base font-normal text-Black-400">
            O nosso espaço foi inaugurado em 2023, porém o nosso projeto já vem
            de anos. Apenas no ano de 2023 ele ganhou forma e a colaboração de
            novas profissionais. Hoje o nosso espaço é referência para
            Comercinho e toda região
          </p>
        </div>

        <div className="grid container grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-left">
          <div className="service mb-4 container">
            <h3 className="text-center container text-1,5xl font-medium text-bronzeado_claro">
              Micropigmentação
            </h3>
            <p>
              A micropigmentação é uma técnica que utiliza um aparelho com
              agulhas e corrente elétrica para preencher sobrancelhas ou
              pigmentar os lábios.
            </p>
          </div>
          <div className="service1 mb-4 container">
            <h3 className="text-center conatiner text-1,5xl font-medium text-bronzeado_claro">
              Limpeza de pele
            </h3>
            <p>
              A limpeza de pele é um procedimento estético e tem como principal
              objetivo remover impurezas, células mortas, cravos, milium e
              execesso de oleosidade da pele.
            </p>
          </div>
          <div className="service2 mb-4 container ">
            <h3 className="text-center container text-1,5xl font-medium text-bronzeado_claro">
              Unhas em fibra de vidro
            </h3>
            <p>
              As unhas em fibras de vidro são extremamente elegantes,
              proporcionam maior praticidade no dia a dia, possui alta
              durabilidade e custo benefício, além de elevar a autoestima da
              mulher.
            </p>
          </div>
          <div className="service3 mb-4 container">
            <h3 className="text-center container text-1,5xl font-medium text-bronzeado_claro">
              Botox
            </h3>
            <p className="text-justify">
              O tratamento com a toxina botulínica previne rugas, possuí
              resultados rápidos, suaviza marcas de expressão, pode ser aplicado
              em várias áreas e evita o surgimento de rugas a longo prazo.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
