import StandardLayout from '../components/StandardLayout/StandardLayout'


function Home() {
  return (
    <>
      <StandardLayout>
        <div className='h-screen block md:flex'>
          <div className="md:w-6/12 px-8 text-[#050038] bg-[#FCFFB2]">
            <h1 className='pt-32 pb-10 text-6xl'>Colmeia</h1>
            <p className='text-xl py-4' > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit itaque eum, voluptatem molestiae voluptas consectetur porro velit quibusdam similique, illum tempore fugiat optio vero eos quis dolores, iure sint. Libero. </p>
            <p className='text-lg shadow-lg shadow-indigo-500 border-2 border-[#050038] hover:bg-zinc-400 float-right px-2'><a href="">Conheça nosso grupo</a></p>
          </div>
          <div className="md:w-6/12" id="image">
            
          </div>
        </div>
        <div className="bg-[#FCFFB2]">
        <div className="mx-auto">
          <div className="flex flex-row-reverse items-center py-12 md:py-16">
            <div className="px-10">
              <div>
                <h1 className="text-4xl font-bold">Frentes do Grupo</h1>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias dolores impedit saepe quibusdam facere omnis ex
                  provident cupiditate, cum aperiam culpa amet assumenda,
                  suscipit, voluptates necessitatibus nemo repudiandae officia
                  repellat.
                </p>
                <p className="mt-8 md:hidden">
                  <a className="btn" href="/Frentes">
                    VER FRENTES
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <h1 className="text-4xl font-bold">Atividades do Grupo</h1>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias dolores impedit saepe quibusdam facere omnis ex
                  provident cupiditate, cum aperiam culpa amet assumenda,
                  suscipit, voluptates necessitatibus nemo repudiandae officia
                  repellat.{" "}
                </p>
                <p className="mt-8">
                  <a
                    className="btn hidden md:inline-block mr-8"
                    href="/Frentes"
                  >
                    VER FRENTES
                  </a>
                  <a className="btn" href="/Atividades">
                    VER ATIVIDADES
                  </a>
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
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
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
                    SAIBA MAIS
                  </a>
                </p>
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