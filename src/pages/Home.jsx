import StandardLayout from '../components/StandardLayout/StandardLayout'
import Banner from '../components/Banner/Banner';

function Home() {
  return (
    <>
      <StandardLayout>
        <Banner>
          <div className='h-screen flex'>
            <div className="sm:w-6/12 px-8 text-text">
              <h1 className='pt-32 pb-10 text-6xl'>Colmeia</h1>
              <p className='text-xl py-4' > Olá, seja bem vindo ao Colmeia </p>
              <p className='text-xl py-4' > Somos um grupo de extensão da UDESC Joinville, focado em Hardware e Software Livre </p>
              <p className='text-lg text-center bg-secondary hover:text-text text-white py-2 w-4/5 sm:w-2/5 mt-12 rounded-full'><a href="">Conheça nosso grupo</a></p>
            </div>
          </div>
        </Banner>
        <div className="">
        <div className="mx-auto static">
          <h1 className='text-center pt-10 text-5xl text-text'>Frentes do Grupo</h1>
          <div className="px-4 py-12 text-base md:py-16 ">
            <div className="md:flex block mx-6 px-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" className="w-6 m-auto h-6">
                <path d="M 18 1 C 14.67619 1 12 3.6761905 12 7 L 12 8 L 2.9296875 8 C 1.8344913 8 1 8.9455845 1 10 L 1 20 C 1 21.054415 1.8344913 22 2.9296875 22 L 14.070312 22 C 15.16551 22 16 21.054415 16 20 L 16 10 C 16 8.9455845 15.167599 8 14.072266 8 L 14 8 L 14 7 C 14 4.7238095 15.72381 3 18 3 C 20.27619 3 22 4.7238095 22 7 L 22 9 L 24 9 L 24 7 C 24 3.6761905 21.32381 1 18 1 z M 3 10 L 14 10 L 14 20 L 3 20 L 3 10 z M 8.5078125 13 C 7.4078125 13 6.5078125 13.9 6.5078125 15 C 6.5078125 16.1 7.4078125 17 8.5078125 17 C 9.6078125 17 10.507812 16.1 10.507812 15 C 10.507812 13.9 9.6078125 13 8.5078125 13 z"></path>
                </svg>
                <h1 className='text-center text-2xl'>Liberdade</h1>
                <p className="my-2 text-center text-gray-600">
                Acreditamos que o conhecimento deve ser livre, acessível e compartilhável. Esta frente sustenta nosso compromisso com o uso e a defesa de software e hardware livre, promovendo a autonomia dos usuários sobre a tecnologia que utilizam. 
                Atuamos para ampliar a consciência crítica sobre o papel da tecnologia na sociedade e garantir que ela sirva ao bem comum.
                </p>
              </div>
              <div className='mx-11 py-6 sm:py-0'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 m-auto h-6">
              <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/>
              </svg>
                <h1 className='text-center text-2xl'>Colaboração</h1>
                <p className="my-2 text-center text-gray-600">
                Nenhum conhecimento é produzido sozinho. Esta frente valoriza o trabalho em equipe, o código aberto, a troca de saberes e o engajamento horizontal com a comunidade. 
                Buscamos fortalecer redes, compartilhar experiências e construir soluções de forma conjunta dentro e fora da universidade.
                </p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 m-auto h-6">
              <path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 32 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"/>
              </svg>
                <h1 className='text-center text-2xl'>Transformação</h1>
                <p className="my-2 text-center text-gray-600">
                Para nós, tecnologia é um meio de transformação social. Essa frente foca em projetos com impacto direto na comunidade, inclusão digital, educação tecnológica e empoderamento de grupos marginalizados. 
                Nosso objetivo é tornar a tecnologia mais justa, acessível e significativa para todas as pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className=" lg:w-5/12">
                <img
                  src="/images/AboutUs.jpg"
                  alt="image"
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-text font-bold md:text-4xl">
                  Projetos
                </h2>
                <p className="mt-6 text-gray-600">
                Os projetos do Colmeia são desenvolvidos com o objetivo de levar tecnologia e conhecimento livre para além dos muros da universidade. 
                Atendemos a comunidade externa com iniciativas que dialogam com diferentes faixas etárias, realidades e níveis de familiaridade com a tecnologia.
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Por meio de oficinas, eventos, cursos e ações práticas, promovemos o uso consciente e acessível de software e hardware livre, 
                  contribuindo para a inclusão digital, o pensamento crítico e o empoderamento tecnológico da sociedade.
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Cada projeto é pensado para ser acolhedor, educativo e transformador, conectando a universidade com as pessoas e fortalecendo o papel social da extensão.
                </p>
                <p className="mt-8">
                  <a className="btn" href="/projetos">
                    Conheça mais
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
                <div className="sm:hidden md:5/12 pb-4 lg:w-5/12">
                  <img
                    src="../../../images/AboutUs.jpg"
                    alt="image"
                    loading="lazy"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="text-2xl text-text font-bold md:text-4xl">
                  Sobre o Grupo
                </h2>
                
                <p className="mt-6 text-gray-600">
                O Colmeia é um grupo de extensão da UDESC. Nós trabalhamos com o tema de hardware e software livre dando aulas, palestras, minicursos e alguns outros projetos.
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Desenvolvemos e compartilhamos saberes por meio dessas aulas, palestras, minicursos e projetos práticos, sempre guiados pelos princípios da liberdade, da transparência e da autonomia tecnológica.
                </p>
                <p className="mt-8">
                  <a className="btn" href="/SobreNos">
                    Conheça mais
                  </a>
                </p>
              </div>
              <div className="hidden sm:block md:5/12 lg:w-5/12">
                <img
                  src="/images/AboutUs.jpg"
                  alt="image"
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </StandardLayout>
    </>
  );
}

export default Home