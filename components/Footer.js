import React from 'react'
import Link from 'next/link'

const Footer = () => {

  const openBrochure=()=>{
    window.open('/Brochures/Survive-Pharma-Brochure.pdf','_blank')
  }

  return (
    <div>
      <footer className='bg-dark p-4 mt-5'>
        {/*  */}
        <div className='d-flex justify-content-center footer-top'>
          {/* Main Menu */}
          <div className='mx-5'>
            <h4 className='text-light'>Main Menu</h4>
            <div className='d-flex flex-column align-items-center'>
              <Link href={'/'} passHref><a className='text-decoration-none text-secondary'>Home</a></Link>
              <Link href={'/our-products/NewItems'} passHref><a className='text-decoration-none text-secondary'>Our Products</a></Link>
              <Link href={'/our-profile'} passHref><a className='text-decoration-none text-secondary'>Our Profile</a></Link>
              <Link href={'/get-in-touch'} passHref><a className='text-decoration-none text-secondary'>Get in touch</a></Link>
            </div>
          </div>
          {/* Quick Links */}
          <div className='mx-5'>
            <h4 className='text-light quick-links'>Quick Links</h4>
            <div className='d-flex flex-column align-items-center'>
              <a className='text-decoration-none text-secondary' href="">Call Us</a>
              <a className='text-decoration-none text-secondary' href="">Email Us</a>
              <a className='text-decoration-none text-secondary brochure' onClick={openBrochure}>Our Brochure</a>
              <a className='text-decoration-none text-secondary' href="">Reach Us</a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='d-flex justify-content-between my-5 footer-middle'>
          {/* Address */}
          <div className=''>
            <h4 className='d-flex align-items-center text-white mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg><i className="bi bi-geo-alt-fill"></i><span className='ms-1'>Survive Pharma</span>
            </h4>
            <div className='text-secondary ms-4'>
              No. 138, Janta Flats Madipur,
              <br/>Rohtak Road, Near Madipur Metro Station,
              <br/> Punjabi Bagh, New Delhi-110063, Delhi, India
            </div>
          </div>
          {/* Proprietor */}
          <div className=''>
            <h4 className='d-flex align-items-center text-white mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg><i className="bi bi-person-circle"></i><span className='ms-1'>Proprietor</span>
            </h4>
            <div className='text-secondary ms-4'>
              Gopal Verma
              </div>
          </div>
          {/* Email */}
          <div className=''>
            <h4 className='d-flex align-items-center text-white mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg><i className="bi bi-envelope-fill"></i><span className='ms-1'>Email</span>
            </h4>
            <div className='text-secondary ms-4'>
              survivepharma08@gmail.com
            </div>
          </div>
          {/* Contact */}
          <div className=''>
            <h4 className='d-flex align-items-center text-white mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg><i className="bi bi-telephone-fill"></i><span className='ms-1'>Contact</span>
            </h4>
            <div className='text-secondary ms-4 contact'>
              +91 9811328846<br/>
              +91 8860217140<br/>
              +91 8700908304
            </div>
          </div>
        </div>
        {/*  */}
        <h4 className='text-light text-center mb-0'>
          &copy; 2022 &nbsp;|&nbsp; Survive Pharma &nbsp;|&nbsp; All Rights Reserved
        </h4>
      </footer>
    </div>
  )
}

export default Footer