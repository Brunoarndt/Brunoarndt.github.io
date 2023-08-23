import StandardLayout from '../components/StandardLayout/StandardLayout'
import Banner from '../components/Banner/Banner';


function Projetos() {
  return (
    <>
    <StandardLayout>
      <Banner>
        <div className='w-1/2 pt-32 px-8 text-text'>
          <span className='text-4xl font-bold border-b-2 border-text'>Projetos</span>
          <p className='mt-4 text-xl'> Nossas areas são divididas em Software, Hardware e Comunicação Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </Banner>
      <div className="container mx-auto px-6 text-text md:px-12 xl:px-6">

      </div>
    </StandardLayout>
    </>
  )
}

export default Projetos