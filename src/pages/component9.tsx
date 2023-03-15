import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component9.css";

const Component9: FunctionComponent = () => {
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

  const onGroupContainer1Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/overlay");
  }, [navigate]);

  return (
    <div className="div14">
      <div className="overlay9">
        <div className="backgound" />
        <div className="overlay-child22" />
        <div className="progress7">
          <div className="choose-your-plan-parent6">
            <div className="choose-your-plan9">Choose your plan</div>
            <div className="customise-your-widget9">Customise your widget</div>
            <div className="set-up-your9">Set up your stamps</div>
            <b className="choose-your-rewards9">Choose your rewards</b>
            <div className="ready9">Ready</div>
            <div className="group-child80" />
            <img className="group-child81" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child82"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child83"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child84"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child85"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child23"
          alt=""
          src="/polygon-38.svg"
          onClick={onPolygonClick}
        />
        <div className="component-5-wrapper1">
          <div className="component-53">
            <div className="component-5-child1" />
            <div className="your-rewards-will4">
              Your rewards will show here
            </div>
          </div>
        </div>
        <div className="overlay-inner6">
          <div className="component-53">
            <div className="component-5-child1" />
            <div className="reward-name3">Reward Name</div>
            <div className="group-child87" />
            <div className="coupon1">Coupon</div>
            <div className="coupon-amount">Coupon Amount (£)</div>
            <div className="reward2">Reward</div>
            <div className="stamps-to-redeem3">Stamps to redeem</div>
            <div
              className="rectangle-parent37"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child88" />
              <div className="confirm3">Confirm</div>
            </div>
            <div
              className="rectangle-parent38"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child89" />
              <div className="back3">Back</div>
            </div>
            <div className="rectangle-parent39">
              <div className="group-child90" />
              <div className="div15">10</div>
            </div>
            <div className="rectangle-parent40">
              <div className="group-child91" />
              <div className="div16">10</div>
            </div>
            <img className="vector-icon4" alt="" src="/vector3.svg" />
          </div>
        </div>
        <b className="looking-great-now4">
          Next, how would you like to reward your customers?
        </b>
      </div>
    </div>
  );
};

export default Component9;
