import StandardLayout from '../components/StandardLayout/StandardLayout'
import Banner from '../components/Banner/Banner';

function Home() {
  return (
    <>
      <StandardLayout>
        <Banner>
          <div className='h-screen flex'>
            <div className="w-6/12 px-8 text-text">
              <h1 className='pt-32 pb-10 text-6xl'>Colmeia</h1>
              <p className='text-xl py-4' > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit itaque eum, voluptatem molestiae voluptas consectetur porro velit quibusdam similique, illum tempore fugiat optio vero eos quis dolores, iure sint. Libero. </p>
              <p className='text-lg text-center bg-secondary hover:text-text text-white py-2 w-2/5 mt-12 rounded-full'><a href="">Conheça nosso grupo</a></p>
            </div>
          </div>
        </Banner>
        <div className="">
        <div className="mx-auto static">
          <h1 className='text-center pt-10 text-5xl text-text'>Frentes do Grupo</h1>
          <div className="px-4 py-12 text-xl md:py-16">
            <div className="md:flex block mx-6 px-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 m-auto h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <h1 className='text-center text-lg'>Linux</h1>
                <p className="my-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className='mx-11'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 m-auto h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <h1 className='text-center text-lg'>Comunidade</h1>
                <p className="my-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 m-auto h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <h1 className='text-center text-xl'>Universidade</h1>
                <p className="my-2 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="../../../images/AboutUs.jpg"
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
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
                <h2 className="text-2xl text-text font-bold md:text-4xl">
                  Sobre o Grupo
                </h2>
                <p className="mt-6 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  omnis voluptatem accusantium nemo perspiciatis delectus atque
                  autem! Voluptatum tenetur beatae unde aperiam, repellat
                  expedita consequatur! Officiis id consequatur atque
                  doloremque!
                </p>
                <p className="mt-4 text-gray-600">
                  {" "}
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat
                  iure expedita at? Asperiores nemo possimus nesciunt dicta
                  veniam aspernatur quam mollitia.
                </p>
                <p className="mt-8">
                  <a className="btn" href="/SobreNos">
                    Conheça mais
                  </a>
                </p>
              </div>
              <div className="md:5/12 lg:w-5/12">
                <img
                  src="../../../images/AboutUs.jpg"
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