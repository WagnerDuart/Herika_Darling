import { useState, useEffect } from "react";

interface Profissional {
  _id: string;
  name: string;
  image_src: string;
  training: string;
  description: string;
  social_media: string;
}

export const Profissionais = () => {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);

  useEffect(() => {
    fetch("https://api-web-final.onrender.com/employee")
      .then((response) => response.json())
      .then((data) => setProfissionais(data))
      .catch((error) => console.error("Erro ao obter dados da API:", error));
  }, []);

  return (
    <div className="min-h-screen mt-16 flex flex-wrap justify-center">
      <div className="container mt-16 mb-16 text-center">
        <p className="text-lg text-gray-800 font-semibold mb-2">Nossos</p>
        <p className="text-3xl text-amber-800 font-semibold">Profissionais</p>
      </div>
      {profissionais.map((profissional) => (
        <div key={profissional._id} className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center">
              <svg
                className="rounded-full border-4 border-primary"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                {profissional.image_src ? (
                  <image
                    href={profissional.image_src}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                ) : (
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  />
                )}
              </svg>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg mb-2 text-center text-amber-800 font-semibold">
                {profissional.name}
              </h2>
              <p className="mt-2 text-gray-600">{profissional.description}</p>
              <h2 className="text-lg mb-2 text-center text-amber-800 font-semibold">
                {profissional.training}
              </h2>
              <p className="mt-2 text-gray-600">{profissional.social_media}</p>
              <p className="mt-4"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
