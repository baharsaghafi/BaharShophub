import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component6.css";

const Component6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseIcon1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onEllipseIcon3Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onEllipseIcon4Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onPolygonClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className="div8">
      <div className="overlay6">
        <div className="overlay-child15" />
        <div className="overlay-child16" />
        <div className="progress4">
          <div className="choose-your-plan-parent3">
            <div className="choose-your-plan6">Choose your plan</div>
            <div className="customise-your-widget6">Customise your widget</div>
            <div className="set-up-your6">Set up your stamps</div>
            <b className="choose-your-rewards6">Choose your rewards</b>
            <div className="ready6">Ready</div>
            <div className="group-child47" />
            <img className="group-child48" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child49"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child50"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child51"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child52"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child17"
          alt=""
          src="/polygon-36.svg"
          onClick={onPolygonClick}
        />
        <div className="component-5-wrapper">
          <div className="component-5">
            <div className="component-5-child" />
            <div className="your-rewards-will1">
              Your rewards will show here
            </div>
          </div>
        </div>
        <div className="component-7">
          <div className="component-5">
            <div className="component-5-child" />
            <div className="reward-name">Reward Name</div>
            <div className="free-shipping1">Free Shipping</div>
            <div className="stamps-to-redeem">Stamps to redeem</div>
            <div className="rectangle-parent22">
              <div className="group-child54" />
              <div className="div9">10</div>
            </div>
            <div
              className="rectangle-parent23"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child55" />
              <div className="confirm">Confirm</div>
            </div>
            <div
              className="rectangle-parent24"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child56" />
              <div className="back">Back</div>
            </div>
            <div className="rectangle-parent25">
              <div className="group-child57" />
              <div className="reward">Reward</div>
            </div>
            <img className="vector-icon1" alt="" src="/vector1.svg" />
          </div>
        </div>
        <b className="looking-great-now1">
          Next, how would you like to reward your customers?
        </b>
      </div>
    </div>
  );
};

export default Component6;
