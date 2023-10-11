import StandardLayout from "../components/StandardLayout/StandardLayout"
import Banner from "../components/Banner/Banner";

const SobreNos = () => {
  return (
    <>
      <StandardLayout>
        <Banner>
          <div className='md:w-1/2 px-8 pt-32 md:px-12'>
            <span className='md:text-6xl text-5xl font-bold border-b-2 border-text'>Sobre Nós</span>
            <p className='mt-10 text-xl'> Nosso grupo é composto por Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </Banner>
        <div className="container mx-auto px-8 md:px-0">
          <div className="">
            <span className="md:text-6xl text-5xl font-bold border-b-2 border-text">Nosso time</span>
          </div>
          {/* primeiro card mobile */}
          <div className="md:hidden py-20">
            <img src="../../images/elenco.jpg" className="" />
            <div>
              <p className="text-2xl text-text pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis suscipit eum deserunt soluta iusto error labore. Dolore delectus nulla dicta! Perferendis sint veniam harum voluptas delectus in ipsum obcaecati adipisci.</p>
              <p className="mt-24 text-lg text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>
          {/* primeiro card desktop */}
          <div className="hidden md:flex py-20">
            <img src="../../images/elenco.jpg" className="w-1/2" />
            <div className="container px-6 flex md:px-12 xl:px-8">
              <div>
                <p className="text-2xl text-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis suscipit eum deserunt soluta iusto error labore. Dolore delectus nulla dicta! Perferendis sint veniam harum voluptas delectus in ipsum obcaecati adipisci.</p>
                <p className="mt-24 text-lg text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              </div>
            </div>
          </div>

          {/* //segundo card mobile */}
          <div className="md:hidden">
            <img src="../../images/time.jpg" className="" />
            <div>
              <p className="text-2xl pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam fuga adipisci a obcaecati quaerat eius, error unde facilis commodi libero natus nulla ipsum dolorum exercitationem praesentium voluptatem odio maxime?</p>
              <p className="text-lg text-accent mt-24">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {/* //segundo card desktop */}
          <div className="container mx-auto px-6 flex md:px-12 xl:px-6 py-10">
            <div className="hidden md:flex">
              <div>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam fuga adipisci a obcaecati quaerat eius, error unde facilis commodi libero natus nulla ipsum dolorum exercitationem praesentium voluptatem odio maxime?</p>
                <p className="text-lg text-accent mt-24">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <img src="../../images/elenco.jpg" className="w-2/5" />
            </div>
          </div>
        </div>

      </StandardLayout>
    </>
  )
}

export default SobreNos