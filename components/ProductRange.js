import React from 'react'

const ProductRange = (props) => {
    
  return (
    <div>
        <div id="carouselProducIndicators" className="carousel slide bg-light shadow" data-bs-ride="carousel">
            <h1 className='text-center mt-2'>Our Product Range</h1>
            <div className="carousel-inner py-3">
                <div className="carousel-item active">
                <div className='d-flex justify-content-center flex-carousel-buttons'>
                    <button onClick={()=>props.handleClick("NewItems")} className='btn btn-primary mx-1'>New Items</button>
                    <button onClick={()=>props.handleClick("ElectrotherapyEquipments")} className='btn btn-info mx-1'>Electrotherapy Equipments</button>
                    <button onClick={()=>props.handleClick("RehabilitationItems")} className='btn btn-secondary mx-1'>Rehabilitation Items</button>
                    <button onClick={()=>props.handleClick("ExerciseItems")} className='btn btn-dark mx-1'>Exercise Items</button>
                    <button onClick={()=>props.handleClick("RehabilitationEquipments")} className='btn btn-warning mx-1'>Rehabilitation Equipments</button>
                    <button onClick={()=>props.handleClick("TherapyUnit")} className='btn btn-success mx-1'>Therapy Unit</button>
                    <button onClick={()=>props.handleClick("HandWash")} className='btn btn-info mx-1'>Hand Wash</button>
                </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-center flex-carousel-buttons'>
                        <button onClick={()=>props.handleClick("TractionTable")} className="btn btn-success mx-1">Traction Table</button>
                        <button onClick={()=>props.handleClick("HandSanitizer")} className="btn btn-danger mx-1">Hand Sanitizer</button>
                        <button onClick={()=>props.handleClick("FoldingWalker")} className="btn btn-primary mx-1">Folding Walker</button>
                        <button onClick={()=>props.handleClick("Stretcher")} className="btn btn-secondary mx-1">Stretcher</button>
                        <button onClick={()=>props.handleClick("CopierPaper")} className="btn btn-dark mx-1">Copier Paper</button>
                        <button onClick={()=>props.handleClick("HospitalFurniture")} className="btn btn-info mx-1">Hospital Furniture</button>
                        <button onClick={()=>props.handleClick("EcgElectrodeBelts")} className="btn btn-warning mx-1">Ecg Electrode Belts</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-center flex-carousel-buttons'>
                        <button onClick={()=>props.handleClick("DettolLiquidHandWash")} className="btn btn-success mx-1">Dettol Liquid Hand Wash</button>
                        <button onClick={()=>props.handleClick("CommodeWheelChair")} className="btn btn-primary mx-1">Commode Wheel Chair</button>
                        <button onClick={()=>props.handleClick("DisinfectantLiquid")} className="btn btn-warning mx-1">Disinfectant Liquid</button>
                        <button onClick={()=>props.handleClick("WheelChair")} className="btn btn-info mx-1">Wheel Chair</button>
                        <button onClick={()=>props.handleClick("Hydrocollator")} className="btn btn-danger mx-1">Hydrocollator</button>
                        <button onClick={()=>props.handleClick("DisinfectantSpray")} className="btn btn-secondary mx-1">Disinfectant Spray</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-center flex-carousel-buttons'>
                        <button onClick={()=>props.handleClick("MotorizedWheelchair")} className="btn btn-info mx-1">Motorized Wheelchair</button>
                        <button onClick={()=>props.handleClick("SonographyGel")} className="btn btn-dark mx-1">Sonography Gel</button>
                        <button onClick={()=>props.handleClick("SteamVaporizerMachine")} className="btn btn-primary mx-1">Steam Vaporizer Machine</button>
                        <button onClick={()=>props.handleClick("MedicalSurgicalGown")} className="btn btn-success mx-1">Medical Surgical Gown</button>
                        <button onClick={()=>props.handleClick("SkinCareCosmetics")} className="btn btn-info mx-1">Skin Care Cosmetics</button>
                        <button onClick={()=>props.handleClick("Dettol")} className="btn btn-warning mx-1">Dettol</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='d-flex justify-content-center flex-carousel-buttons'>
                        <button onClick={()=>props.handleClick("MassagerMachine")} className="btn btn-secondary mx-1">Massager Machine</button>
                        <button onClick={()=>props.handleClick("Safehands-AutoHandSanitizer")} className="btn btn-primary mx-1">Safehands - Auto Hand Sanitizer</button>
                        <button onClick={()=>props.handleClick("OriginalDettolBathSoap")} className="btn btn-dark mx-1">Original Dettol Bath Soap</button>
                        <button onClick={()=>props.handleClick("PhysiotherapyEquipmentsAndTensUnit")} className="btn btn-danger mx-1">Physiotherapy Equipments And Tens Unit</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev bg-dark mt-auto ms-2" type="button" data-bs-target="#carouselProducIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next bg-dark mt-auto me-2" type="button" data-bs-target="#carouselProducIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default ProductRange