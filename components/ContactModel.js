import React,{useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
import config from '../config.json'

const ContactModel = (props) => {
    const router=useRouter()

    const [countryCode, setcountryCode] = useState('+91')
    const [contactNumber, setcontactNumber] = useState('')

    const handleChange=(event)=>{
        if(event.target.name=='countryCode'){
            setcountryCode(event.target.value)
        }
        else if(event.target.name=='contactNumber'){
            setcontactNumber(event.target.value)
        }
    }

    const handleContactSubmit=async(event)=>{
        event.preventDefault()
        const userData={countryCode,contactNumber}
        
        fetch(`${config.host}/api/postReqs/postUserContact?productName=${props.modalProductName}&productId=${props.modalProductId}&productPrice=${props.modalProductPrice}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(contactSubmit=>contactSubmit.text())
        .then(result=>{
            Swal.fire({
                title: 'Success',
                text: 'Thank you for showing interest in our product, we will contact you soon!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            setcountryCode('+91')
            setcontactNumber('')
        })
    }

    const handleReadMore=async(productId,productName)=>{
        document.getElementById('contactModal').style.display='none'
        document.body.style.overflow='visible'
        const elements = document.getElementsByClassName('modal-backdrop');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        let data=await fetch(`${config.host}/api/getReqs/getIdProduct?id=${productId}`)
        let parsedData=await data.json()
        let productDisplay=parsedData

        let allProductsCategoryWise=[]
        let categoryData=await fetch(`${config.host}/api/getReqs/getCategoryWiseProducts?category=${parsedData.product_category}&id=${productId}`)
        let categoryParsedData=await categoryData.json()
        allProductsCategoryWise=categoryParsedData

        router.push(`/display-product/${productId}?product=${productName}`)
    }
  return (
  <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title d-flex align-items-center" id="contactModalLabel"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span className='ms-1'>Yes, I am interested</span></h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="d-flex">
                {/*  */}
                <div className='border-end shadow column-one p-4'>
                    <div className='img-fluid img-thumbnail me-auto'>
                        <Image width={175} height={175} src={`/ProductsImages/${props.modalProductImage}`} alt={props.modalProductName}></Image>
                    </div>
                    <div className='mt-1'>
                        <h5>{props.modalProductName}</h5>
                        <h6>Price : Rs. {props.modalProductPrice}</h6>
                        <hr className='my-2'/>
                        <div>{props.modalProductDesc}... <a onClick={()=>handleReadMore(props.modalProductId,props.modalProductName)} className='text-primary text-decoration-none' style={{cursor:'pointer'}}>Read More</a></div>
                    </div>
                </div>
                {/*  */}
                <div className='column-two p-4'>
                    <h5>Connect with Survive Pharma</h5>
                    <h6 className='text-secondary mb-0 mt-3'>Leave your contact number here and we will call you</h6>
                    <form onSubmit={handleContactSubmit} className='mt-2 w-75'>
                        <div className='d-flex'>
                            <select className='bg-success mx-1 text-white' onChange={handleChange} value={countryCode} name="countryCode" id="ccode"style={{border:'1px solid rgb(0,0,0,.125)',borderRadius:'0.25rem',outline:'none'}}>
                                <option value="+91">India +91</option>
                                <option value="+1">USA +1</option>
                                <option value="+971">UAE +971</option>
                                <option value="+44">UK +44</option>
                                <option value="+61">Aus +61</option>
                            </select>
                            <input type="number" onChange={handleChange} value={contactNumber} name='contactNumber' className='form-control' placeholder='Contact Number' />
                        </div>
                        <div className='mt-3 text-center'>
                            <button disabled={contactNumber.length<10} className='btn btn-dark' type='submit'>Submit</button>
                        </div>
                        <div className='text-center'>
                            <hr className='my-4'/>
                            <h5>Call Us</h5>
                            <h6 className='text-center d-flex align-items-center justify-content-center'><a className='text-decoration-none my-1' href="tel:+91 9811328846"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                                </svg><i className="bi bi-telephone-outbound-fill"></i><span className='ms-1'>+91 8700908304</span></a>
                            </h6>
                            <h6 className='text-center d-flex align-items-center justify-content-center'><a className='text-decoration-none mb-1' href="tel:+91 9811328846"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                                </svg><i className="bi bi-telephone-outbound-fill"></i><span className='ms-1'>+91 8700908304</span></a>
                            </h6>
                            <h6 className='text-center d-flex align-items-center justify-content-center'><a className='text-decoration-none mb-1' href="tel:+91 8860217140"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
                                </svg><i className="bi bi-telephone-outbound-fill"></i><span className='ms-1'>+91 8860217140</span></a>
                            </h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ContactModel