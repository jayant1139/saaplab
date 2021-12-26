import React from "react";

export default function Team() {
    const phd_student=[
        {
            image_src:"../images/team_pics/sagar.png",
        name:"Sagar Kumar Verma",
        joined:"Autumn 2019",
        college:"M.Tech. (Photonics), IIT Roorkee",
        }
    ]
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
      <div className="d-flex">
      <div className="grp-item d-flex flex-column align-items-center">
        <img src={require("../images/team_pics/sagar.png").default} alt="" />
        <p>
          <a href="">{phd_student[0].name}</a>
        </p>
        <p>{phd_student[0].joined}</p>
        <p>{phd_student[0].college}​</p>
      </div>

      <div className="grp-item d-flex flex-column align-items-center">
        <img src={require("../images/team_pics/sagar.png").default} alt="" />
        <p>
          <a href="">{phd_student[0].name}</a>
        </p>
        <p>{phd_student[0].joined}</p>
        <p>{phd_student[0].college}​</p>
      </div>

      <div className="grp-item d-flex flex-column align-items-center">
        <img src={require("../images/team_pics/sagar.png").default} alt="" />
        <p>
          <a href="">{phd_student[0].name}</a>
        </p>
        <p>{phd_student[0].joined}</p>
        <p>{phd_student[0].college}​</p>
      </div>

      <div className="grp-item d-flex flex-column align-items-center">
        <img src={require("../images/team_pics/sagar.png").default} alt="" />
        <p>
          <a href="">{phd_student[0].name}</a>
        </p>
        <p>{phd_student[0].joined}</p>
        <p>{phd_student[0].college}​</p>
      </div>
      </div>
    </>
  );
}
