import React from "react";

export default function Team() {
  const phd_student = [
    {
      image_src: "../images/team_pics/sagar.png",
      name: "Sagar Kumar Verma",
      joined: "Autumn 2019",
      college: "M.Tech. (Photonics), IIT Roorkee",
    },
    {
      image_src: "../images/team_pics/RiyaChoudhary.png",
      name: "Riya Chaudhary",
      joined: "Spring 2020",
      college: "M.Sc. (Physics), Univ. of Rajasthan",
    },
    {
      image_src: "../images/team_pics/sagar.png",
      name: "Arti Yadav",
      joined: "Autumn 2020",
      college: "M.Tech.  (Optoelectronics), IIT Delhi",
    },
    {
      image_src: "../images/team_pics/sagar.png",
      name: "Sumon Sinha",
      joined: "Spring 2021",
      college: "M.Sc. (Physics),Assam University ",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="card_w_title">
          <h1>Group Leader</h1>
          <div className="grp-item d-flex flex-column align-items-center">
            <img
              src={require("../images/team_pics/sachin_srivastav.png").default}
              alt=""
            />
            <p>
              <a href="">Sachin Kumar Srivastava</a>
            </p>
            <p>Assistant Professor</p>
          </div>
        </div>

        <div className="card_w_title">
          <h1>Post doc</h1>
          <div className="grp-item d-flex flex-column align-items-center">
            <img
              src={require("../images/team_pics/postdoc.png").default}
              alt=""
            />
            <p>Yadvendra Singh</p>
            <p>PhD (IIT-ISM, Dhanbad)</p>
          </div>
        </div>
      </div>

      {/* Phd Student  */}
      <h1 className="text-center my-3">PHD Students</h1>
      <div className="phd-wrapper">
        <div className="grp-item d-flex flex-column align-items-center">
          <img src={require("../images/team_pics/sagar.png").default} alt="" />
          <p>
            <a href="">{phd_student[0].name}</a>
          </p>
          <p>{phd_student[0].joined}</p>
          <p>{phd_student[0].college}​</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/Riyachoudhary.png").default}
            alt=""
          />
          <p>
            <a href="">{phd_student[1].name}</a>
          </p>
          <p>{phd_student[1].joined}</p>
          <p>{phd_student[1].college}​</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/Artiyadav.png").default}
            alt=""
          />
          <p>
            <a href="">{phd_student[2].name}</a>
          </p>
          <p>{phd_student[2].joined}</p>
          <p>{phd_student[2].college}​</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img src={require("../images/team_pics/Sumon.png").default} alt="" />
          <p>
            <a href="">{phd_student[3].name}</a>
          </p>
          <p>{phd_student[3].joined}</p>
          <p>{phd_student[3].college}​</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img src={require("../images/team_pics/Jhuma.png").default} alt="" />
          <p>
            <a href="">Jhuma Pan</a>
          </p>
          <p>Autumn 2021</p>
          <p>MSc.(Electronic Sci),Uni. of Calcutta​</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/Swapnil.png").default}
            alt=""
          />
          <p>
            <a href="">Swapnil Khurana</a>
          </p>
          <p>Autumn 2021</p>
          <p>M.Sc. (Physics), IIT Delhi</p>
        </div>
      </div>

      {/* PG Student  */}
      <h1 className="text-center my-3">PG Students</h1>
      <div className="pg-wrapper">
        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/Tejasva.png").default}
            alt=""
          />
          <p>
            <a href="">Tejasva Soni</a>
          </p>

          <p>Int. M.Sc.-V​</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/Hridyansh.png").default}
            alt=""
          />
          <p>
            <a href="">Hridyansh Singhal </a>
          </p>

          <p>M.Tech -Photonics</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img src={require("../images/team_pics/Rohit.png").default} alt="" />
          <p>
            <a href="">Rohit Vishwakarma </a>
          </p>

          <p>M.Tech -Photonics</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img src={require("../images/team_pics/Ashtha.png").default} alt="" />
          <p>
            <a href="">Astha Bansal</a>
          </p>

          <p>M.Sc. Physics​</p>
        </div>
      </div>

      {/* UG Student  */}
      <h1 className="text-center my-3">UG Students</h1>
      <div className="pg-wrapper">
        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/Ravikiran.png").default}
            alt=""
          />
          <p>
            <a href="">Ravi K. Bandakavi
</a>
          </p>

          <p>B.Tech. EPH- III</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/virendra.webp").default}
            alt=""
          />
          <p>
            <a href="">Viresh Mohurle </a>
          </p>

          <p>B.Tech. EPH- IV</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/sahoo.webp").default}
            alt=""
          />
          <p>
            <a href="">Subham Sahoo</a>
          </p>

          <p>B.Tech. EPH- IV</p>
        </div>

        <div className="grp-item d-flex flex-column align-items-center">
          <img
            src={require("../images/team_pics/kumar.webp").default}
            alt=""
          />
          <p>
            <a href="">Subham Kumar</a>
          </p>

          <p>B.Tech. EPH- IV</p>
        </div>
      </div>
      <div className="">
        <div className="d-flex flex-column align-items-center">
          <h1 className="jrf-title">JRF</h1>
          <div className="grp-item d-flex flex-column align-items-center">
            <img
              src={require("../images/team_pics/kgp.webp").default}
              alt=""
            />
            <p>
              <a href="">Ojasvi Singh</a>
            </p>
            <p>MSc- Physics, IIT Kharagpur</p>
          </div>
        </div>
      </div>

      {/* Past Members  */}
      <h1 className="text-center my-3">Past Members</h1>
    <div className="d-flex justify-content-evenly">
      <div className="flex-items">
        <h6><b>Gagan Singh Saini (2021)  </b></h6>
        <h6><b>Ajinkya Gore (2021)  </b></h6>
        <h6><b>Rohit Jha (2021)  </b></h6>
        <h6><b>S. Balakrishnan (2021)  </b></h6>
        <h6><b>Dr. Vivek Semwal (2021)      </b></h6>
        <h6><b>Nabendu S. Misra (2020 & 2021)  </b></h6>
        <h6><b>Anmol (2019)  </b></h6>
        <h6><b>Amandep (2018)     </b></h6>
        <h6><b>Kulvinder Kaur (2018)</b></h6>
        <h6><b>Kulvinder Kaur Sarao (2018)   </b></h6>
        <h6><b>Kamal Preet Kaur (2017)  </b></h6>
        <h6><b>Jagmeet Singh Bains (2017)   </b></h6>
      </div>
      <div className="flex-items">
        <h6>  EP IV BTP project (Raman Spectrum Analysis using Deep Learning)</h6>
        <h6>  EP IV BTP project (Raman Spectrum Analysis using Deep Learning)</h6>
        <h6>EP IV BTP project (SPR Imaging)</h6>
        <h6>EP IV BTP project (SPR Imaging)</h6>
        <h6>Postdoc: Fiber Optic Biosensors</h6>
        <h6> Intern: Theoretical modeling of multilayered photonic structures for sensing </h6>
        <h6>  Intern: Determination of Mode field diameter of optical fiber using imaging</h6>
        <h6>M.Sc. Thesis: Plasmonic Nanogratings for EOT based Sensing  </h6>
        <h6>M.Sc. Thesis: Nanosculptured Plasmonic Sensors based on SERS</h6>
        <h6>  B.Tech Thesis: Fiber optic trapping enhanced sensing</h6>
        <h6> M.Sc. Thesis: ESP-LSP coupling enhanced fluorescence based water sensors</h6>
        <h6> Intern: Fiber optic nano-structures for nanoparticle trapping  </h6>
      </div>
    </div>
    </>
  );
}
