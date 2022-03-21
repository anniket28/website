import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='container my-5'>
      <Head>
        <title>Survive Pharma</title>
        <meta name="description" content="Survive Pharma Home Page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>

      {/*  */}
      <div className='mx-4 d-flex align-items-center'>
        {/*  */}
        <div className='w-75 mx-2'>
          <h2>Weclome to Survive Pharma</h2>
          <div className='text-secondary'>
            Survive Pharma is the leading Manufacturer, Wholesaler and Retailer of Traction Table, Massager Machine, Quadriceps Table Muscles Stimulator, Therapy Unit and much more. Our team of experienced professionals use quality raw material and advance technology machines to design and develop the offered range of products in bulk in short period of time flawlessly. Under the able and efficient guidance of our Proprietor, Mr. Gopal Verma, we have carved a niche for ourselves and have become one of the leading names in the industry.
          </div>
        </div>
        <div className='img-fluid mx-2'>
          <Image width={500} height={300} src={'/Images/home.webp'} alt={'Survive Pharma Home Image'}></Image>
        </div>
        {/*  */}
      </div>

      {/* */}
      <div className='my-5 mx-4'>
        <h2 className='text-center'>Our Product Range</h2>
        {/*  */}
        <div className='row my-5'>
          <div className='col-md-4'>
            <div className='card bg-light shadow p-3'>
              <div className='img-fluid img-thumbnail text-center'>
                <Image width={200} height={200} src={'/Images/Electrotherapy.jpeg'} alt={'Electrotherapy Equipments Category'}></Image>
              </div>
              <div className='px-3'>
                <h5 className='my-3'>Electrotherapy Equipments</h5>
                <p className='text-secondary' style={{fontSize:'15px'}}>Our electrotherapy product range includes a wide range of Lazer Pain Relief Machine, Short Wave Diathermy 500 Watt Bulb, Short Wave Diathermy 500 Watt Solid State, Laser Pain Relief Machine, Multifunction Therapy Unit (LCD MODEL) and Computerised Ift 29 Program.</p>
                <Link href={'/our-products/ElectrotherapyEquipments'} passHref><a className='btn btn-success'>Explore</a></Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-md-4'>
            <div className='card bg-light shadow p-3'>
              <div className='img-fluid img-thumbnail text-center'>
                <Image width={200} height={200} src={'/Images/Rehab.jpeg'} alt={'Rehablitation Equipments Category'}></Image>
              </div>
              <div className='px-3'>
                <h5 className='my-3'>Rehablitation Equipments</h5>
                <p className='text-secondary' style={{fontSize:'15px'}}>Rehabilitation is an essential part of universal health coverage along with promotion of good health and treatment. Our rehablitation product range includes a wide range of Massager Machine, Wax bath Machine, CP Walker, Cupping Therapy and Shoulder Therapy. </p>
                <Link href={'/our-products/RehabilitationEquipments'} passHref><a className='btn btn-success'>Explore</a></Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-md-4'>
            <div className='card bg-light shadow p-3'>
              <div className='img-fluid img-thumbnail text-center'>
                <Image width={200} height={200} src={'/Images/Therapy.jpeg'} alt={'Therapy EquipUnitments Category'}></Image>
              </div>
              <div className='px-3'>
                <h5 className='my-3'>Therapy Unit</h5>
                <p className='text-secondary' style={{fontSize:'15px'}}>Therapy is used to promote, maintain, or restore health. We are Prominent & Leading Manufacturer from New Delhi in Therapy Unit and we offer Compression Therapy Unit, Physiotherpy IFT Unit and EMG Biofeedback Unit. </p>
                <Link href={'/our-products/TherapyUnit'} passHref><a className='btn btn-success'>Explore</a></Link>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='row'>
          <div className='col-md-4'>
            <div className='card bg-light shadow p-3'>
              <div className='img-fluid img-thumbnail text-center'>
                <Image width={200} height={200} src={'/Images/Exercise.jpeg'} alt={'Exercise Items Category'}></Image>
              </div>
              <div className='px-3'>
                <h5 className='my-3'>Exercise Items</h5>
                <p className='text-secondary' style={{fontSize:'15px'}}>Exercise can help improve muscle strength and boost your endurance.  Our exercise items product range includes Survive Spin Bike, various models of Treadmills, Static Bike Upright, Trampoline, Wrist Execiser, Static Cycle with back rest and Shoulder Wheel 360 Degree.</p>
                <Link href={'/our-products/ExerciseItems'} passHref><a className='btn btn-success'>Explore</a></Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-md-4'>
            <div className='card bg-light shadow p-3'>
              <div className='img-fluid img-thumbnail text-center'>
                <Image width={200} height={200} src={'/Images/TractionTable.jpeg'} alt={'Traction Table Category'}></Image>
              </div>
              <div className='px-3'>
                <h5 className='my-3'>Traction Table</h5>
                <p className='text-secondary' style={{fontSize:'15px'}}>Traction Table removes pressure on spinal discs through stretching and manipulating the muscles and discs apart to create space.We are a leading Manufacturer of 3 Fold Traction Tables, Traction Machine With Table and Traction Table 4 FOLD from New Delhi, India.</p>
                <Link href={'/our-products/TractionTable'} passHref><a className='btn btn-success'>Explore</a></Link>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='col-md-4'>
            <div className='card bg-light shadow p-3'>
              <div className='img-fluid img-thumbnail text-center'>
                <Image width={200} height={200} src={'/Images/RehabItems.jpeg'} alt={'Rehabilitation Items Category'}></Image>
              </div>
              <div className='px-3'>
                <h5 className='my-3'>Rehabilitation Items</h5>
                <p className='text-secondary' style={{fontSize:'15px'}}>Our rehabilitation items wide product range includes Shoulder Arc (Zig-Zag Type), Quadriceps Table, Medicine Ball With Stand, Motorised Tilit Table, Hand Held Dyamanometer, Thera Tube, Thera Band, Hand Gym Board and Staircase. </p>
                <Link href={'/our-products/RehabilitationItems'} passHref><a className='btn btn-success'>Explore</a></Link>
              </div>
            </div>
          </div>
          <div className='my-4 text-end'>
            <Link href={'/our-products/NewItems'} passHref><a className='btn btn-dark'>Explore Complete Range &rarr;</a></Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='mx-4 my-5'>
        {/*  */}
        <div>
          <h2 className='text-secondary text-center'>Testimonials</h2>
          <h1 className='text-center' style={{color:'#283779'}}>What People Say About Us?</h1>

        </div>
      </div>

    </div>
  )
}
