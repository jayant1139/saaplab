import React from 'react'
import { Link } from 'react-router-dom'
export default function Research() {
    return (
        <>
            <div className="research-intro">

<div className="research-items">
    <h1>Research Interests</h1>
</div>


<div className="research-items">
    <p>We are working on the sensing /biosensing applications of plasmonic/nanoplasmonic and plasmon enhanced
        optical phenomena. Here are some topic-wise explanations</p> <span id="showmore"/>
</div>

</div>

 {/* bootstrap image slider  */}
 {/* SERS/SEF Section  starts here  */}
<div className="research-flex-space-between">
<div id="carouselExampleIndicators-serf" className="carousel slide width_25 " data-bs-ride="carousel">
<div className="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide-to="2" aria-label="Slide 3"></button>
<button type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide-to="3" aria-label="Slide 4"></button>
<button type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide-to="4" aria-label="Slide 5"></button>
<button type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide-to="5" aria-label="Slide 6"></button>

</div>
<div className="carousel-inner research-carousel">
<div className="research-carousel-item carousel-item active">
<img src={require("..//images/Serf/3.webp").default} className="d-block w-100" alt="..."/>
</div>
<div className="research-carousel-item carousel-item">
<img src={require("..//images/Serf/7f7198_006cdb51affc4c97bb05e4dd6611712c_mv2.webp").default} className="d-block w-100" alt="..."/>
</div>
<div className="research-carousel-item carousel-item">
<img src={require("..//images/Serf/7f7198_2862033db3d44d648ac783fe1041a1be_mv2.webp").default} className="d-block w-100" alt="..."/>
</div>
<div className="research-carousel-item carousel-item">
<img src={require("..//images/Serf/7f7198_791fdb26059e4331ae7007593b35fba9.webp").default} className="d-block w-100" alt="..."/>
</div>
<div className="research-carousel-item carousel-item">
<img src={require("..//images/Serf/abc.png").default} className="d-block w-100" alt="..."/>
</div>
<div className="research-carousel-item carousel-item">
<img src={require("..//images/Serf/signalout.webp").default} className="d-block w-100" alt="..."/>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-serf" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>
</div>
<div className="container-information">
<div className="info-heading"><h5>SERS/SEF</h5></div>
<div className="info-description"><p> are working on SERS/SEF based sensors utilizing nanostructured plasmonic configurations such as ESPs/LSPs/ESP-LSP coupling, metasurfaces, etc.</p></div>
</div>
</div>
 {/* SERS/SEF Section  ends here  */}

 {/* EOT Section  starts here  */}
<div className="research-flex-space-between">
<div id="carouselExampleIndicators-Eot" className="carousel slide width_25 " data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="3" aria-label="Slide 4"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="4" aria-label="Slide 5"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="5" aria-label="Slide 6"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide-to="6" aria-label="Slide 7"></button>

</div>
<div className="carousel-inner research-carousel">
  <div className="research-carousel-item carousel-item active">
    <img src={require("..//images/Eot/substrate-medium.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Eot/7f7198_5d39b899f0424d0abf893b6de1a61404_mv2.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Eot/blue1.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Eot/blue2.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Eot/blue3.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Eot/second-last.webp").default} className="d-block w-100" alt="..."/>
  </div>
  
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Eot/last.webp").default} className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-Eot" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
<div className="container-information">
<div className="info-heading"><h5>EOT</h5></div>
<div className="info-description"><p> Extra-Ordinary Transmission is a plasmonic phenomena in sub-wavelength nano-metallic structures. We are working on plasmonic meta-surfaces utilizing this phenomenon for biosensing applications.</p></div>
</div>
</div>
 {/* EOT Section  ends here  */}

 {/* SPR/LSPR/LSMR Section  starts here  */}
<div className="research-flex-space-between">
<div id="carouselExampleIndicators-Spr" className="carousel slide width_25 " data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="3" aria-label="Slide 4"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="4" aria-label="Slide 5"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="5" aria-label="Slide 6"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="6" aria-label="Slide 7"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="7" aria-label="Slide 8"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="8" aria-label="Slide 9"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="9" aria-label="Slide 10"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="10" aria-label="Slide 11"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide-to="11" aria-label="Slide 12"></button>
</div>
<div className="carousel-inner research-carousel">
  <div className="research-carousel-item carousel-item active">
    <img src={require("..//images/Spr/p-1(prism).webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-second.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-third.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-four.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-five.webp").default} className="d-block w-100" alt="..."/>
  </div>
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-six.webp").default} className="d-block w-100" alt="..."/>
  </div>
  
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-seven.webp").default} className="d-block w-100" alt="..."/>
  </div>
  
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-eight.webp").default} className="d-block w-100" alt="..."/>
  </div>
  
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-nine.webp").default} className="d-block w-100" alt="..."/>
  </div>
  
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-ten.webp").default} className="d-block w-100" alt="..."/>
  </div>
  
  <div className="research-carousel-item carousel-item">
    <img src={require("..//images/Spr/p-eleven.webp").default} className="d-block w-100" alt="..."/>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-Spr" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
<div className="container-information">
<div className="info-heading"><h5>SPR/LSPR/LSMR</h5></div>
<div className="info-description"><p>We are also specialized in Propagating and Localized Surface Plasmon Resonance  (SPR and LSPR) based Sensors on both the prism and optical fiber based configurations. The performance of fiber optic sensors has been improved by novel designs.</p></div>
</div>
</div>
 {/* SPR/LSPR/LSMR Section  ends here  */}
<div className="last-talk">
<div className="last-talk-item"><p>Just a sample of my work, to see more or discuss possible work
</p></div>  

<div className="last-talk-item">
 <Link
to="/Contact" >
Let's Talk
</Link></div>



</div>

        </>
    )
}
