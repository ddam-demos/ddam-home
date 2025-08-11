/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";

const leadingEmployees = [
  {
    img: "amarsanaa.jpg",
    name: "AMARSANAA.A",
    position: "CHIEF EXECUTIVE OFFICER",
  },
  {
    img: "lana-san2.jpg",
    name: "LKHAGVASUREN.E",
    position: "CHIEF FINANCIAL OFFICER",
  },
  {
    img: "baagii.jpg",
    name: "BAT-ERDENE.Ts",
    position: "BUSINESS UNIT MANAGER",
  },
];

const employees = [
  {
    img: "ariunaa.jpg",
    name: "ARIUNAA.N",
    position: "ACCOUNTANT",
  },
  {
    img: "khandmaa.jpg",
    name: "KHANDMAA.B",
    position: "HR&PR OFFICER",
  },
  {
    img: "saikhanaa.jpg",
    name: "BYAMBASAIKHAN.A",
    position: "SENIOR ENGINEER",
  },
  {
    img: "munkhbold.jpg",
    name: "MUNKHBOLD.B",
    position: "SENIOR ENGINEER",
  },
  {
    img: "nyamka.jpg",
    name: "NYAMGEREL.T",
    position: "SENIOR ENGINEER",
  },
  {
    img: "babu.jpg",
    name: "BAT-ERDENE.S",
    position: "SENIOR ENGINEER",
  },
  {
    img: "khurlee.jpg",
    name: "GANKHUREL.J",
    position: "SENIOR ENGINEER",
  },
  {
    img: "sanaa.jpg",
    name: "ARIUNSANAA.B",
    position: "SENIOR PROJECT COORDINATOR",
  },
  {
    img: "tuguldur.jpg",
    name: "TUGULDUR.A",
    position: "SENIOR PROJECT COORDINATOR",
  },
  {
    img: "purevbaatar.jpg",
    name: "PUREVBAATAR.T",
    position: "SENIOR ENGINEER",
  },
  {
    img: "baterdene_e.jpg",
    name: "BAT-ERDENE.E",
    position: "SENIOR PROJECT COORDINATOR",
  },
  {
    img: "danzan.jpg",
    name: "DANZAN.B",
    position: "SENIOR PROJECT COORDINATOR",
  },
  {
    img: "manvi.jpg",
    name: "MANVI.S",
    position: "PROJECT COORDINATOR",
  },
  {
    img: "kanter.jpg",
    name: "TUGULDUR.D",
    position: "SENIOR ENGINEER",
  },
  {
    img: "shagai.jpg",
    name: "ALTANSHAGAI.A",
    position: "SENIOR ENGINEER",
  },
  {
    img: "bilegt.jpg",
    name: "BILEGT.B",
    position: "SENIOR ENGINEER",
  },
  {
    img: "byambajav.jpg",
    name: "BYAMBAJAV.Ts",
    position: "SENIOR ENGINEER",
  },
  {
    img: "khosbayar.jpg",
    name: "KHOSBAYAR.A",
    position: "SENIOR ENGINEER",
  },
  {
    img: "tsogmandakh.jpg",
    name: "TSOGMANDAKH.B",
    position: "SENIOR ENGINEER",
  },
  {
    img: "azbileg.jpg",
    name: "AZBILEG.G",
    position: "SENIOR ENGINEER",
  },
  {
    img: "myagmardash.jpg",
    name: "MYAGMARDASH.U",
    position: "SENIOR ENGINEER",
  },
  {
    img: "sainzolboo.jpg",
    name: "SAINZOLBOO.A",
    position: "SENIOR ENGINEER",
  },
  {
    img: "erkhembileg.jpg",
    name: "ERKHEMBILEG.M",
    position: "ENGINEER",
  },
  {
    img: "itgel.jpg",
    name: "ITGEL.B",
    position: "ENGINEER",
  },
  {
    img: "munkhod.jpg",
    name: "MUNKH-OD.B",
    position: "ENGINEER",
  },
  {
    img: "purevbat.jpg",
    name: "PUREVBAT.N",
    position: "ENGINEER",
  },
  {
    img: "temuujin.jpg",
    name: "TEMUUJIN.B",
    position: "ENGINEER",
  },
  {
    img: "tengis.jpg",
    name: "TENGIS.B",
    position: "ENGINEER",
  },
  {
    img: "nomintsend.jpg",
    name: "NOMINTSEND.Ts",
    position: "JUNIOR ENGINEER",
  },
  {
    img: "lkhagvasuren.jpg",
    name: "LKHAGVASUREN.D",
    position: "OFFICE ASSISTANT",
  },
];

const Members = () => {
  const [showMore, setShowMore] = useState(false);
  const renderedEmployees = !showMore ? employees.slice(0, 12) : employees;
  return (
    <div className="members">
      <div className="container">
        <div className="content wow fadeInUp" data-wow-delay=".5s">
          <div className="row">
            <div className="col-lg-12">
              <div className="insta">
                <div className="lead-gallery">
                  {leadingEmployees.map((employee, idx) => (
                    <div className="col-auto" key={idx}>
                      <a>
                        <img src={`/img/members/${employee.img}`} alt="" />
                      </a>
                      <h6 className="text-center custom-font">
                        {employee.name}
                      </h6>
                      <p className="text-center custom-font">
                        {employee.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="members-gallery mt-50">
                {renderedEmployees.map((employee, idx) => (
                  <div key={idx}>
                    <a>
                      <img src={`/img/members/${employee.img}`} alt="" />
                    </a>
                    <h6 className="text-center custom-font">{employee.name}</h6>
                    <p className="text-center custom-font">
                      {employee.position}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-50 mb-50">
                {showMore ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="20"
                    strokeWidth={0.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="20"
                    strokeWidth={0.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                )}
                <h6>
                  <a className="btn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
