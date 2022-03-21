import React,{useState} from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ProductRange from '../../components/ProductRange'
import ContactModel from '../../components/ContactModel'
import Sidebar from '../../components/Sidebar'
import Spinner from '../../components/Spinner'
import config from '../../config.json'

const category = (props) => {
    const router = useRouter();

    const [products, setproducts] = useState(props.allProducts)
    const [modalProdId, setmodalProdId] = useState('')
    const [modalProdName, setmodalProdName] = useState('')
    const [modalProdPrice, setmodalProdPrice] = useState('')
    const [modalProdImage, setmodalProdImage] = useState('')
    const [modalProdDesc, setmodalProdDesc] = useState('')
    const [spinner, setspinner] = useState(false)
    const [showProducts, setshowProducts] = useState(true)

    const handleClick=async(productRangeCategory)=>{
        setshowProducts(false)
        setspinner(true)

        let data=await fetch(`${config.host}/api/getReqs/getCategoryProducts?category=${productRangeCategory}`)
        let parsedData=await data.json()
        let allProducts=parsedData

        setproducts(allProducts)
        router.push(`/our-products/${productRangeCategory}`)
        setTimeout(() => {
            setspinner(false)
            setshowProducts(true)
        }, 100);
    }

    const handleContactModal=(prodId,prodName,prodPrice,prodImage,prodDesc)=>{
        prodDesc=prodDesc.substr(0,115)
        setmodalProdId(prodId)
        setmodalProdName(prodName)
        setmodalProdPrice(prodPrice)
        setmodalProdImage(prodImage)
        setmodalProdDesc(prodDesc)
    }

  return (
    <div>
        <Head>
            <title>Our Products | Survive Pharma</title>
            <meta name="description" content="Survive Pharma Products Page" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="theme-color" content="#000000" />
        </Head>

        <Sidebar productSidebarCategory={props.productCategory} allProductsSidebar={products}/>

        <ProductRange handleClick={handleClick}/>

        <Spinner showSpinner={spinner}/>

        {showProducts && <div>
            <h2 className='text-center my-3 mt-4 text-decoration-underline'>{props.productCategory}</h2>
            <div className="row px-5 justify-content-center product-row">
                <div className='row mx-5 justify-content-center'>
                {products.map((product)=>{
                    return<div key={product.product_id} className="col-md-4 my-3">
                            <ContactModel modalProductId={modalProdId} modalProductName={modalProdName} modalProductPrice={modalProdPrice} modalProductImage={modalProdImage} modalProductDesc={modalProdDesc}/>
                            <div id={`${product.product_id}`} className="card product-card">
                                <div className="img-thumbnail img-fluid mx-5 mt-4 mb-1 p-5">
                                    <Image width={500} height={500} src={`/ProductsImages/${product.product_image}`} alt={product.product_name}></Image>
                                </div>
                                <div className="card-body m-auto">
                                    <Link href={`/display-product/${product.product_id}?product=${product.product_name}`} passHref><a className="card-title text-dark text-decoration-none text-center"><h5>{product.product_name}</h5></a></Link>
                                    <h6 className="text-dark text-center">Price : Rs. {product.product_price} /Piece</h6>
                                    <div className='mx-auto text-center mt-4 d-flex product-btns'>
                                        <button onClick={()=>handleContactModal(product.product_id,product.product_name,product.product_price,product.product_image,product.product_description)} data-bs-toggle="modal" data-bs-target="#contactModal" className="btn btn-dark mx-1 d-flex align-items-center" href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg><span className='ms-1'>Yes, I am interested</span></button>
                                        <Link href={`/display-product/${product.product_id}?product=${product.product_name}`} passHref><a className="btn btn-info mx-1 d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg><span className='ms-1'>Know More</span></a></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>}

    </div>
  )
}

export default category

export async function getServerSideProps(context){
    let originalProductCategory=context.query.category
    let productCat=context.query.category.split(/(?=[A-Z])/)
    let productCategory=""
    for (let index = 0; index < productCat.length; index++) {
        productCategory+=productCat[index]+" "
    }

    let data=await fetch(`${config.host}/api/getReqs/getCategoryProducts?category=${originalProductCategory}`)
    let parsedData=await data.json()
    let allProducts=parsedData
    
    return{
        props:{allProducts,productCategory,originalProductCategory}
    }
}