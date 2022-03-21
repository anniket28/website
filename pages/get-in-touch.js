import React,{useState} from 'react'
import Head from 'next/head'
import Swal from 'sweetalert2'
import config from '../config.json'

const Getintouch = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [contact, setcontact] = useState('')
    const [enquiry, setenquiry] = useState('')

    const handleChange=(event)=>{
        if(event.target.name=='name'){
            setname(event.target.value)
        }
        else if(event.target.name=='email'){
            setemail(event.target.value)
        }
        else if(event.target.name=='contact'){
            setcontact(event.target.value)
        }
        else if(event.target.name=='enquiry'){
            setenquiry(event.target.value)
        }
    }

    const handleSubmit=async(event)=>{
        event.preventDefault()
        const userData={name,email,contact,enquiry}

        fetch(`${config.host}/api/postReqs/postUserEnquiry`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        }).then(response=>response.text())
        .then(result=>{
            Swal.fire({
                title: 'Success',
                text: 'Thank you for getting in touch with us! We will get back to you soon.',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
    }

  return (
      <div>
          <Head>
            <title>Get in touch | Survive Pharma</title>
            <meta name="description" content="Survive Pharma Write to us Page" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="theme-color" content="#000000" />
          </Head>
        <div className='my-5 container w-50'>
            <h1 className='text-center'>Get in touch</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nam">Name <sup className='text-danger'>*</sup> :</label>
                    <input className='form-control mt-1' value={name} onChange={handleChange} type="text" name="name" id="nam" placeholder='Enter your name here' />
                </div>
                <div className="mb-3">
                    <label htmlFor="mail">Email <sup className='text-danger'>*</sup> :</label>
                    <input className='form-control mt-1' value={email} onChange={handleChange} type="text" name="email" id="mail" placeholder='Enter your email here' />
                </div>
                <div className="mb-3">
                    <label htmlFor="cont">Contact Number <sup className='text-danger'>*</sup> :</label>
                    <input className='form-control mt-1' value={contact} onChange={handleChange} type="number" name="contact" id="cont" placeholder='Enter your contact number here' />
                </div>
                <div className="mb-3">
                    <label htmlFor="msg">Enquiry/Message <sup className='text-danger'>*</sup> :</label>
                    <textarea className='form-control mt-1' value={enquiry} onChange={handleChange} name="enquiry" id="msg" cols="30" rows="5" placeholder='Write your message or enquiry here'></textarea>
                </div>
                <div className='mt-2'>
                    <button disabled={name.length==0 || email.length==0 || contact.length==0 || enquiry.length==0}  type='submit' className='btn btn-dark'>Submit</button>
                    <button disabled={name.length==0 && email.length==0 && contact.length==0 && enquiry.length==0} type='reset' className='btn btn-dark ms-2'>Reset</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Getintouch