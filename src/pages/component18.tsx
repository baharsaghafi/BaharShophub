import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component18.css";

const Component18: FunctionComponent = () => {
  const navigate = useNavigate();

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
    navigate("/8");
  }, [navigate]);

  const onPolygon1Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  return (
    <div className="div32">
      <div className="overlay18">
        <div className="background8" />
        <div className="overlay-child43" />
        <div className="progress13">
          <div className="choose-your-plan-parent15">
            <div className="choose-your-plan18">Choose your plan</div>
            <div className="customise-your-widget18">Customise your widget</div>
            <div className="set-up-your18">Set up your stamps</div>
            <div className="choose-your-rewards18">Choose your rewards</div>
            <b className="ready18">Ready</b>
            <div className="group-child211" />
            <img className="group-child212" alt="" src="/ellipse-14.svg" />
            <img className="group-child213" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child214"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child215"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child216"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child44"
          alt=""
          src="/polygon-27.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child45"
          alt=""
          src="/polygon-316.svg"
          onClick={onPolygon1Click}
        />
        <div className="overlay-inner17">
          <div className="rectangle-parent104">
            <div className="group-child217" />
            <img className="group-20-1" alt="" src="/group-20-1@2x.png" />
            <div className="group-wrapper">
              <div className="rectangle-parent105">
                <div className="group-child218" />
                <div className="rewards">Rewards</div>
                <img className="image-72-icon" alt="" src="/image-72@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-inner18">
          <div className="rectangle-parent106">
            <div className="group-child219" />
            <div className="position-on-screen">Position on screen</div>
            <div
              className="rectangle-parent107"
              onClick={onGroupContainer4Click}
            >
              <div className="group-child220" />
              <div className="left">Left</div>
            </div>
            <div className="rectangle-parent108">
              <div className="group-child221" />
              <div className="right">Right</div>
            </div>
          </div>
        </div>
        <b className="looking-great-now12">Ready to go live?</b>
      </div>
    </div>
  );
};

export default Component18;
