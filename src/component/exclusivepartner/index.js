import React from 'react'
import './index.css'
import { PictureAsPdf } from '@mui/icons-material';

export default function ExclusivePartner() {

    const resourcesData = [
        {
            title: "Purifier Catalog",
            size: "PDF Document - 1.3 MB",
            file: "/exclusivepartner/CATALOG(PURIFIER).pdf"
        },
        {
            title: "Spare Parts Catalog",
             size: "PDF Document - 181 KB",
            file: "/exclusivepartner/SMD SPARE CATALOG.pdf"
        },
        {
            title: "Valves Catalog",
            size: "PDF Document - 4.3 MB",
            file: "/exclusivepartner/SMD_ Valve.pdf"
        }
    ];

    const handleDownload = (file) => {
     const link=document.createElement("a")
     link.href=file
     link.download=file
     link.click()
    }

    return (
        <div className="partners-section">

            {/* Heading */}
            <div className="heading">
                <h2>
                    OUR <span>EXCLUSIVE</span>
                </h2>
                <h1>STRATEGIC PARTNERS</h1>
                <p>
                    Excellence through collaboration. We partner with world-class
                    organizations to deliver unparalleled marine solutions and educational advancement
                </p>
            </div>

            {/* Card Row 1 */}
            <div className="partner-row">

                <div className="partner-card">
                    <h3>Link Instruments</h3>
                    <p>
                       Link Instruments is a leading manufacturer of ultrasonic
                        measurement and gas detection solutions for industrial and 
                        marine environments. With decades of engineering expertise,
                         the company delivers reliable instruments designed to enhance
                          safety, accuracy, and operational efficiency across multiple
                           industries.

                    </p>

                    <ul>
                        <li>Ultrasonic Level Comparator</li>
                        {/* <li>Gas Leak Detection Solutions</li>
                        <li>Marine & Industrial Applications</li>
                        <li>Precision Engineering</li> */}
                    </ul>

                  <a href="https://linkinst.com/" className="btn">Visit Website</a>
                </div>

                <div className="partner-image">
                    <img src="/exclusivepartner/linkist.png" alt="ship" />
                </div>

            </div>

            {/* Card Row 2 */}

            <div className="partner-row reverse">

                <div className="partner-card">
                    <h3>SM Designworks</h3>
                    <p>
                        SM Designworks is a specialized engineering and marine service
                         company providing retrofit solutions, ship repair, 
                         and technical support for vessels. The company focuses
                          on delivering efficient engineering, fabrication, and 
                          installation services to improve vessel 
                        performance and meet international maritime standards.

                    </p>

                    <ul>
                        <li>Marine Engineering & Retrofit Solutions</li>
                        <li>3D Scanning and Technical Survey</li>
                        <li>Ship Repair & Installation Services</li>
                        <li>Fabrication and Equipment Integration</li>
                    </ul>

                 <a href="https://eur03.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.smdesign.co.kr%2F&data=04%7C01%7Cmarcin.czapla%40blommaritime.com%7Ca7046ec6e8d74fa67a5408d8f4e00b31%7C221691ccdebe47469c64016e3ca827ab%7C1%7C1%7C637528590412439197%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0&sdata=ua82qWngmxzzjiLYQnjcgJ5CFZIDnONvmRB2ZhRbRpw%3D&reserved=0" className="btn">Visit Website</a>
                </div>

                <div className="partner-image left">
                    <img src="/exclusivepartner/sm-design.png" alt="ship" />
                </div>

            </div>

            {/* Technical Resources */}

            <div className="resources">

                <p>
                    TECHNICAL <span>RESOURCES</span>
                </p>

                <div className="resource-cards">

                    {resourcesData.map((item, index) => (
                        <div className="resource-card" key={index}>
                            <div className="icon"><PictureAsPdf sx={{fontSize:{md:"35px",xs:"27px"}}}/></div>
                            <h5>{item.title}</h5>
                            <p>{item.size}</p>
                            <button onClick={() => handleDownload(item.file)}>Download</button>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
