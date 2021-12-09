import React from "react";

export default function Home(props) {
  return (
    <>
      <div>
        <div className="container-intro">
          <h1>Group of Sachin Kumar Srivastava</h1>
          <div className="flex-row-container">
            <div className="flex-row-items">
              <img src="/images/grpicon.webp" alt={""} />
            </div>
            <div className="flex-row-items">
              <p>
                We are working on various aspects of nanophotonics and
                plasmonics and their applications, primarily on sensors. These
                include, SPR, LSPR, EOT, SERS, SEF, ESPR-LSPR coupling phenomena
                and many more.<br/>
                  Highly motivated students with JRF/SRF/postdoc fellowships,
                  willing to work on any of these topics are encouraged to
                  contact and discuss their ideas. Projects for M.Sc., M.Tech.
                  and B.Tech. students in the fields of optics and photonics are
                  also available.
                
              </p>

              {/* <a href="/" onClick="" id="changetext">
                Read More
              </a> */}
            </div>
          </div>
        </div>

        {/* News and Event Section  */}
        <div className="news-event-head">
          <h1>News & Events</h1>
        </div>

        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
             <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="d-block w-60 m-auto">
              <ul>
              <li></li>
                <li></li>
                <li>
                  03 Nov. 2021: APP-Lab bags grant from DST-BDTD to work on
                  REVAMPERS project.
                </li>
               
                <li>
                  01 October 2021: Ojasvi Singh joins as a JRF in INdo-South
                  Korea JNC project. Welcome!!
                </li>
                <li>
                  27Sep. 2021: First publication from APP-Lab in PLasmonics gets
                  accepted: Congratulations Sagar
                </li>
              </ul>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="d-block w-60 m-auto">
                <ul>
                  <li>
                    27 Aug. 2021: We have an opening for a JRF: Apply here
                  </li>
                  <li>
                    {" "}
                    26 July 2021: Jhuma and Swapnil join APP-Lab for PhD.
                    Welcome to the group
                  </li>
                  <li>
                    {" "}
                    30 June 2021: Hridyansh, Rohit and Astha join APP-Lab for
                    their one year academic projects. Welcome!!
                  </li>
                  <li>
                    30 June 2021: Gagan, Ajinkya, Rohit and Sudhir successfully
                    complete their BTP projects in APP Lab. All the best for
                    your future assignments!!{" "}
                  </li>
                  <li>
                    07 June 2021: Dr. Yadvendra Singh joins APP-Lab as a
                    postdoc. Welcome!!
                  </li>
                
                 
                </ul>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-60 m-auto">
                <ul>
                <li>
                    15 Apr. 2021: Jhuma Pan joins APP-Lab as JRF. Welcome!!
                  </li>
                <li>
                    
                    02 Apr. 2021: Vivek gets postdoctoral fellowship in DTU,
                    Denmark. We wish you all the best!!
                  </li>
                  <li>
                    02 Mar. 2021: We have an opening for a JRF position. Details
                    can be found here
                  </li>

                  <li>
                    {" "}
                    22 Jan 2021: APP-Labs gets financial sanction in
                    collaboration with IIT Indore and Guwahati University for
                    "Indo-South Korea Joint Network Center for Environmental
                    Cyber Physical Systems".
                  </li>
                  <li>
                    {" "}
                    Registration for Optical Sensors course on NPTEL is Open.
                    Registration Link
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-60  m-auto">
                <ul>
                <li>
                    26-27 Dec. 2020: SKS successfully co-organized OPTCT-2020, a
                    Workshop on Optics & Photonics: Theory & Computational
                    Techniques.
                  </li>
                  <li>
                    14 - 18 Dec. 2020: SKS successfully co-organized AICTE
                    approved QIP short -term course on "Spectroscopy and
                    Characterization of New Generation Materials"
                  </li>
                  <li>
                    24 Nov. 2020: Dr. Vivek Semwal joined as Institute Postdoc
                    -Welcome Vivek!!
                  </li>
                  <li>
                    11 Nov. 2020: Tejasva Soni joins App-Lab for Photonic
                    Sensors Project. - Welcome!!
                  </li>
                  <li>03 Nov. 2020: SKS wins SERB-Startup Research grant</li>
                
                  
                </ul>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block  w-60 m-auto">
                <ul>
               
                <li>
                    01 October 2020: Ravi Kiran Bandakavi joins App-Lab for
                    Nanophotonic Sensors Project. Welcome Ravi!!
                  </li>
                  <li>
                    02 Sep. 2020: Gagan singh saini, Ajinkya gore, Rohit Jha and
                    Sudhir Balakrishnan join us for BTP project. Welcome all!!
                  </li>
                  <li>
                    19 Aug. 2020: Arti Yadav joins APP- Lab for a PhD. Welcome
                    Arti.
                  </li>
                  <li>
                    08 Aug. 2020: SKS received research funding from MHRD-STARS.
                  </li>
                  <li>
                    26 Jun 2020: SKS received unspent balance of INSPIRE Faculty
                    Grant from CSIR-CSIO.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* carousel end here  */}
        <div className="last-element-page">
          <p>
            We will be hiring soon for{" "}
            <a href="https://www.indokoreajnc.in/">
              Indo-South Korea Joint Network Centre for Environemntal Cyber
              Physical Systems
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
