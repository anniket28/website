import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import config from '../config.json'

const Header = () => {
    const router=useRouter()

    const openWhatsapp=()=>{
        const message="Hello I came across your website and I wanted to enquire about something."
        window.open(`https://api.whatsapp.com/send?text=${message}&phone=+919876399512","_blank`)
    }

    const [query, setquery] = useState('')

    const handleChange=(event)=>{
        setquery(event.target.value)
    }
    
    const handleSearch=async(event)=>{
        event.preventDefault()
        if(query!==''){
            setquery('')
            let data=await fetch(`${config.host}/api/getReqs/getSearchResults?query=${query}`)
            let parsedData=await data.json();
            console.log('Ok')
        }
    }
    
  return (
    <div>
        {/* Navbar */}
        <nav className="navbar navbar-light bg-light shadow-lg" style={{backgroundColor:"#f2f2f2 !important"}}>
            <div className="container">
                <div className='d-flex align-items-center navbar-logo'>
                    <Image className='rounded-circle' height={50} width={50} src={'/Images/logo.jpeg'} alt='Survive Pharma Logo'></Image>
                    <div className='d-flex flex-column ms-1'>
                        <Link href={'/'} passHref><a className="navbar-brand pb-0">Survive Pharma</a></Link>
                        <a target={'_blank'} className='d-flex align-items-center location-link text-decoration-none' href=""><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg><i className="bi bi-geo-alt-fill"></i><span className='location-text'>Madipur, New Delhi</span></a>
                    </div>
                </div>
                <div className='navbar-buttons'>
                    <button className='btn btn-dark mx-2'><a className='d-flex align-items-center text-white text-decoration-none call-link' href="tel:+"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg><i className="bi bi-telephone-fill"></i><span className='ms-1'>Call Us</span></a></button>
                    <button className='btn btn-dark mx-2'><a className='d-flex align-items-center text-white text-decoration-none email-link' href="mailto:"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg><i className="bi bi-envelope-fill"></i><span className='ms-1'>Email Us</span></a></button>
                    <span onClick={openWhatsapp} className="whatsapp rounded-circle mx-2" rel="noopener noreferrer">
                        <svg style={{backgroundColor:'green'}} xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-whatsapp rounded-circle" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg><i className="bi bi-whatsapp"></i>
                    </span>
                </div>
            </div>
        </nav>
        {/* Navbar Links */}
        <div className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <div className="container-fluid px-4">
                <button className="navbar-toggler m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={'/'} passHref><a className={`nav-link mx-4 d-flex align-items-center ${router.pathname==="/"?"active":""}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg><i className="bi bi-house"></i><span className='ms-1'>Home</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/our-products/NewItems'} passHref><a className={`nav-link mx-4 d-flex align-items-center ${router.asPath.includes('/our-products/')?"active":""}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                            </svg><i className="bi bi-box"></i><span className='ms-1'>Our Products</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/our-profile'} passHref><a className={`nav-link mx-4 d-flex align-items-center ${router.pathname==="/our-profile"?"active":""}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg><i className="bi bi-info-circle"></i><span className='ms-1'>Our Profile</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={'/get-in-touch'} passHref><a className={`nav-link mx-4 d-flex align-items-center ${router.pathname==="/get-in-touch"?"active":""}`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg><i className="bi bi-pencil-square"></i><span className='ms-1'>Get in touch</span></a></Link>
                        </li>
                    </ul>
                </div>
                <form onSubmit={handleSearch} className='d-flex align-items-center search-form me-4 my-1'>
                    <span className='search-icon'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg><i className="bi bi-search"></i></span>
                    <input className='form-control px-4' value={query} onChange={handleChange} type="text" name="query" id="search" placeholder='Search Products/Services' />
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Header