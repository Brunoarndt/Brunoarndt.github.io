import StandardLayout from "../components/StandardLayout/StandardLayout"
import Banner from "../components/Banner/Banner";

const SobreNos = () => {
  return (
    <>
    <StandardLayout>
      <Banner>
        <div className='w-1/2 pt-32 px-8 text-text'>
          <span className='text-4xl font-bold border-b-2 border-text'>Sobre Nós</span>
          <p className='mt-4 text-xl'> Nosso grupo é composto por Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </Banner>
      <div className="container mx-auto px-6 text-text md:px-12 xl:px-6">
        <h1 className="text-text text-inherit text-4xl">Nosso time</h1>
        <div className="flex py-8">
          <div id="about" className="w-full h-1/2"></div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio modi dolorum, laboriosam tenetur odit quo obcaecati! Delectus possimus dolore ab corporis vero consectetur eligendi laborum mollitia fugiat! Distinctio, doloremque mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, dignissimos. Officiis harum facere impedit fuga? Consequatur fuga nobis corporis ducimus odio, qui accusantium ratione voluptas quibusdam dignissimos porro temporibus dolorum?</p>
          </div>
        </div>
      </div>
    </StandardLayout>
    </>
  )
}

export default SobreNos