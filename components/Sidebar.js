import React,{useState} from 'react'
import Link from 'next/link'

const Sidebar = (props) => {
    const [sidebarWidth, setsidebarWidth] = useState('0px')

    const handleSidebarOpen=()=>{
        setsidebarWidth('250px')
    }

    const handleSidebarClose=()=>{
        setsidebarWidth('0px')
    }

  return (
    <div>
        <button onClick={handleSidebarOpen} className='sidebar-button btn btn-danger py-1 px-2 rounded-0'>
            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
        </button>

        <div className='bg-light sidebar-content' style={{width:`${sidebarWidth}`,transition:'0.4s'}}>
            <button onClick={handleSidebarClose} className='sidebar-button-inside btn btn-danger py-1 px-2 d-flex ms-auto rounded-0'>
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>            </button>
            <h3 className='p-2'>{props.productSidebarCategory}</h3>
            <hr />
            {props.allProductsSidebar.map((product)=>{
                return <div key={product.product_id} className='px-2 my-3'>
                    <Link href={`#${product.product_id}`} passHref><a className='text-secondary text-decoration-none'>{product.product_name}</a></Link>
                </div>
            })}
        </div>
    </div>
  )
}

export default Sidebar