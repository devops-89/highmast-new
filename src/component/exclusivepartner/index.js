import React from "react";
import "./index.css";
import { PictureAsPdf } from "@mui/icons-material";

export default function ExclusivePartner() {
  const smdResources = [
    {
      title: "Purifier Catalog",
      size: "PDF Document - 1.3 MB",
      file: "/exclusivepartner/CATALOG(PURIFIER).pdf",
    },
    {
      title: "Spare Parts Catalog",
      size: "PDF Document - 181 KB",
      file: "/exclusivepartner/SMD SPARE CATALOG.pdf",
    },
    {
      title: "Valves Catalog",
      size: "PDF Document - 4.3 MB",
      file: "/exclusivepartner/SMD_ Valve.pdf",
    },
  ];

  const oceanOrderResources = [
    {
      title: "Smart Maritime Procurement Platform",
      size: "PDF Document - 2.1 MB",
      file: "/exclusivepartner/1.OceanOrder_ Smart Maritime Procurement Platform - Customer.pdf",
    },
  ];

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    link.click();
  };

  const ResourceCard = ({ item }) => (
    <div className="resource-card mini">
      <div className="icon mini">
        <PictureAsPdf sx={{ fontSize: { md: "20px", xs: "16px" } }} />
      </div>
      <div className="resource-info">
        <h5>{item.title}</h5>
        <p>{item.size}</p>
      </div>
      <button onClick={() => handleDownload(item.file)}>Download</button>
    </div>
  );

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
          organizations to deliver unparalleled marine solutions and educational
          advancement
        </p>
      </div>

      {/* Card Row 1: Link Instruments */}
      <div className="partner-row">
        <div className="partner-card">
          <h3>Link Instruments</h3>
          <p>
            Link Instruments is a leading manufacturer of ultrasonic measurement
            systems and gas leak detection solutions. Their precision
            engineering ensures safety and efficiency in marine and industrial
            applications worldwide.
          </p>

          <ul>
            <li>Ultrasonic Level Comparator</li>
            {/* <li>Gas Leak Detection Solutions</li>
                        <li>Marine & Industrial Applications</li>
                        <li>Precision Engineering</li> */}
          </ul>

          <a href="https://linkinst.com/" className="btn">
            Visit Website
          </a>
        </div>

        <div className="partner-image">
          <img src="/exclusivepartner/linkist.png" alt="Link Instruments" />
        </div>
      </div>

      {/* Card Row 2: SM Designworks */}
      <div className="partner-row reverse">
        <div className="partner-card">
          <h3>SM Designworks</h3>
          <p>
            SM Designworks provides specialized marine engineering solutions,
            focusing on 3D scanning, technical surveys, and equipment
            integration. Their expertise ensures seamless Installations and
            repairs for complex vessel projects.
          </p>

          <ul>
            <li>Marine Engineering & Retrofit Solutions</li>
            <li>3D Scanning and Technical Survey</li>
            <li>Ship Repair & Installation Services</li>
            <li>Fabrication and Equipment Integration</li>
          </ul>

          <div className="partner-resources">
            <h4>Technical Resources</h4>
            <div className="mini-resource-grid">
              {smdResources.map((item, index) => (
                <ResourceCard key={index} item={item} />
              ))}
            </div>
          </div>

          <a href="http://www.smdesign.co.kr/" className="btn">
            Visit Website
          </a>
        </div>

        <div className="partner-image left">
          <img src="/exclusivepartner/sm-design.png" alt="SM Designworks" />
        </div>
      </div>

      {/* Card Row 3: OceanOrder */}
      <div className="partner-row">
        <div className="partner-card">
          <h3>OceanOrder</h3>
          <p>
            OceanOrder is an AI-powered marine procurement platform designed to
            simplify and optimize the sourcing of ship spares, stores, and
            services. It streamlines the entire procurement lifecycle—from
            requisition to delivery—using intelligent automation, real-time
            pricing insights, and transparent vendor comparisons.
          </p>

          <ul>
            <li>AI-Powered Marine Procurement Platform</li>
            <li>Smart RFQ, Vendor Comparison & Cost Optimization</li>
            <li>End-to-End Order, Invoice & Logistics Management</li>
            <li>Real-Time Pricing Insights & Transparent Workflows</li>
          </ul>

          <div className="partner-resources">
            <h4>OceanOrder Resources</h4>
            <div className="mini-resource-grid">
              {oceanOrderResources.map((item, index) => (
                <ResourceCard key={index} item={item} />
              ))}
            </div>
          </div>

          <a href="#" className="btn">
            Visit Website
          </a>
        </div>

        <div className="partner-image">
          <img src="/exclusivepartner/ocean_order.png" alt="OceanOrder" />
        </div>
      </div>
    </div>
  );
}
