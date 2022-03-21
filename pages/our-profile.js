import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Profile = () => {
  return (
    <div>
        <Head>
            <title>Our Profile | Survive Pharma</title>
            <meta name="description" content="Survive Pharma Profile Page" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="theme-color" content="#000000" />
        </Head>
        <div className='container my-4'>
            <h3>Survive Pharma</h3>
            <p className='profile-about'>Established in the year of 1994, Survive Pharma is the leading Manufacturer, Wholesaler and Retailer of Traction Table, Massager Machine, Quadriceps Table, Muscles Stimulator, Therapy Unit and much more. Our team of experienced professionals use only quality raw material to design and develop the offered range of products flawlessly. Further, we use advance technology machines to produce products in bulk in short period of time. Under the able and efficient guidance of our Proprietor, Mr. Gopal Verma, we have carved a niche for ourselves and have become one of the leading names in the industry.</p>
            <div className="accordion my-4 " id="accordionProfile">
                {/* Why Us */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="whyUs">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWhyUs" aria-expanded="true" aria-controls="collapseWhyUs">
                            Why Us?
                        </button>
                        </h2>
                        <div id="collapseWhyUs" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            We always endeavor hard to offer the best quality products to our esteemed clients. With our streamlined operations, we have been able to achieve maximum client satisfaction.
                            <strong> Our strengths that give us an edge over our competitors are as follows:</strong>
                            <ul>
                                <li>Client-centric approach</li>
                                <li>Client-centric approach</li>
                                <li>Timely delivery</li>
                                <li>Total quality management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Quality */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="quality">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuality" aria-expanded="true" aria-controls="collapseQuality">
                            Quality
                        </button>
                        </h2>
                        <div id="collapseQuality" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            Quality is our primary concern and we never take any chance with it. To ensure flawless production, we follow a stringent total quality management (TQM) system at every stage of our process. Only the best grades of components and raw material are utilised in the process that are sourced from reliable vendors of the market after conducting severe quality tests. Every stage is supervised by expert quality inspectors and we discharge our products into the market only after testing their dimensional accuracy, finish standards and other technical specifications.
                            <strong>Our quality analysts test our products on following parameters:</strong>
                            <ul>
                                <li>Functional reliability</li>
                                <li>Efficiency</li>
                                <li>Performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Client Satisfaction */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="clientSatisfaction">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClientSatisfaction" aria-expanded="true" aria-controls="collapseClientSatisfaction">
                            Client Satisfaction
                        </button>
                        </h2>
                        <div id="collapseClientSatisfaction" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            Being a client centric organization, we aim at setting new benchmarks in the arena of client satisfaction. To achieve this very basic objective, we have a full-fledged customer support department to provide excellent after sale support to our prestigious clients. Our easy payment mode like Cash, Credit Card, DD and Cheque coupled with timely delivery schedules and transparent business dealings, further cement our bondings with our prestigious clients. We always welcome queries and suggestions from our business associates and also try to implement them in our process.
                        </div>
                    </div>
                </div>
                {/* Infrastrucutral Setup */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="infrastrucutralSetup">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfrastrucutralSetup" aria-expanded="true" aria-controls="collapseInfrastrucutralSetup">
                            Infrastrucutral Setup
                        </button>
                        </h2>
                        <div id="collapseInfrastrucutralSetup" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            We own an outstanding unit that spreads in a sprawling area and is furnished with modern production machines, equipments, tools and other requisite facilities. It is strategically located at New Delhi, the capital city and the commercial hub of India. To ensure smooth and efficient production, we have segregated our unit in different divisions like Production, Assembling, R & D, Quality Control, Warehousing and others. Each unit is managed by experienced professionals with versatile knowledge of their discipline.
                            <strong>We have installed latest cutting edge technologies at our Production Unit that help us to precisely design the product range. Some of the machines installed at our unit are:</strong>
                            <ul>
                                <li>CNC machines</li>
                                <li>Drilling machines</li>
                                <li>Molding machines</li>
                                <li>Welding machines</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Research and Development */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="researchAndDevelopment">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseResearchAndDevelopment" aria-expanded="true" aria-controls="collapseResearchAndDevelopment">
                            Research and Development
                        </button>
                        </h2>
                        <div id="collapseResearchAndDevelopment" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            We spend substantially in the arena of research and development to maintain our dignified reputation in the market. Our R & D division is equipped with ultra modern testing equipment, devices as well as strong team of experienced researchers to carry our extensive research in our discipline. Our researchers work tirelessly to monitor the emerging requirements of the clients and try to develop smart and innovative Physiotherapy Equipment as per emerging requirements of the discipline.
                        </div>
                    </div>
                </div>
                {/* Our Certifications */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="ourCertifications">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOurCertifications" aria-expanded="true" aria-controls="collapseOurCertifications">
                            Our Certifications
                        </button>
                        </h2>
                        <div id="collapseOurCertifications" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            <div className='d-flex justify-content-center my-2 certifications'>
                                <div className='img-fluid img-thumbnail mx-3'>
                                    <Image width={400} height={500} src={'/Images/survivepharmacertificate1.jpeg'} alt='Our Certification'></Image>
                                </div>
                                <p className='w-50 mx-3'>Royal Stancert Inc. (RSI) is an independent certificate issuing body providing quality assurance certifications. Our major focus during the certification lies on ethical measurement, analysis and improvement. Assisted by a team of experienced personnel, we aim at building a company's future through profitable operations, innovations and new business opportunities. These services are offered to various clients who are involved in health care, manufacturing & engineering, construction, I.T and other Industry Verticals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Quality Certificates */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="qualityCertificates">
                        <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQualityCertificates" aria-expanded="true" aria-controls="collapseQualityCertificates">
                            Quality Certificates
                        </button>
                        </h2>
                        <div id="collapseQualityCertificates" className="accordion-collapse collapse show" aria-labelledby="whyUs" data-bs-parent="#accordionProfile">
                        <div className="accordion-body">
                            <div className='d-flex justify-content-center certifications'>
                                <div className='img-fluid img-thumbnail mx-3 my-2'>
                                    <Image width={400} height={500} src={'/Images/survivepharmacertificate2.jpeg'} alt='Quality Certificates'></Image>
                                </div>
                                <p className='w-50 mx-3'>RICL is a Conformity Assessment Body in India based at New Delhi, well known for our professional and quality services. We conduct compliance and certification audits for ISO 9001: 2015 Certification, ISO 14001:2015 Certification, ISO 27001:2013 Certification and other quality standard certifications. In a very short time we have got pan Indian presence by getting sincere support and response from our esteemed clients. All this could be achieved through our dedication, professional attitude and honesty. Our major focus during the assessment lies on ethical measurement, analysis and improvement.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Profile