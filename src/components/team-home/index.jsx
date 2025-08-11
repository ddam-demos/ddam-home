/* eslint-disable @next/next/no-img-element */
import React from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";

const TeamWithSkills = () => {
  React.useEffect(() => {
    tooltipEffect();
    teamSkillsProgress();
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>OUR MEMBERS</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit custom-font mb-15">
                We help to create high value in <br />
                your business
              </h3>
              <ul>
                <li>• Logical Thinkers</li>
                <li>• Fast & Adaptable</li>
                <li>• Ambitious youth guided by Field Experts</li>
              </ul>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h6 className="custom-font">Data Scientist & ML Engineers</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="60%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6 className="custom-font">System Engineers </h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="40%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col lg-6 col-md-6 col-sm-4 toright">
                  <div className="full-width">
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Amarsanaa Agchbayar"
                      data-tooltip-sub="Chief executive officer"
                    >
                      <img
                        src="/img/team/amarsanaa_blck.jpg"
                        alt=""
                        className="imago wow"
                      />
                    </div>
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Oyunkhand Erdenebaatar"
                      data-tooltip-sub="Project manager"
                    >
                      <img
                        src="/img/team/khandmaa_blck.jpg"
                        alt=""
                        className="imago wow"
                      />
                    </div>
                  </div>
                </div>
                <div className="col lg-6 col-md-6 col-sm-4 toleft valign">
                  <div className="full-width text-left">
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Lana Erdenechuluun"
                      data-tooltip-sub="Chief finance officer"
                    >
                      <img
                        src="/img/team/lana_blck.jpg"
                        alt=""
                        className="imago wow"
                      />
                    </div>
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Baterdene Tsend"
                      data-tooltip-sub="Business unit manager"
                    >
                      <img
                        src="/img/team/bat-erdene_blck.jpg"
                        alt=""
                        className="imago wow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWithSkills;
