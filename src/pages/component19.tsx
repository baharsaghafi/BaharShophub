import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component19.css";

const Component19: FunctionComponent = () => {
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

  const onPolygonClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onPolygon1Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/71");
  }, [navigate]);

  return (
    <div className="div33">
      <div className="overlay19">
        <div className="background9" />
        <div className="overlay-child46" />
        <div className="progress14">
          <div className="choose-your-plan-parent16">
            <div className="choose-your-plan19">Choose your plan</div>
            <div className="customise-your-widget19">Customise your widget</div>
            <div className="set-up-your19">Set up your stamps</div>
            <div className="choose-your-rewards19">Choose your rewards</div>
            <b className="ready19">Ready</b>
            <div className="group-child222" />
            <img className="group-child223" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child224"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child225"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child226"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon3Click}
            />
            <img className="group-child227" alt="" src="/ellipse-15.svg" />
          </div>
        </div>
        <img
          className="overlay-child47"
          alt=""
          src="/polygon-28.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child48"
          alt=""
          src="/polygon-317.svg"
          onClick={onPolygon1Click}
        />
        <div className="overlay-inner19">
          <div className="rectangle-parent109">
            <div className="group-child228" />
            <img className="group-20-11" alt="" src="/group-20-1@2x.png" />
            <div className="group-container">
              <div className="rectangle-parent110">
                <div className="group-child229" />
                <div className="rewards1">Rewards</div>
                <img className="image-72-icon1" alt="" src="/image-72@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-inner20">
          <div className="rectangle-parent111">
            <div className="group-child230" />
            <div className="position-on-screen1">Position on screen</div>
            <div className="rectangle-parent112">
              <div className="group-child231" />
              <div className="left1">Left</div>
            </div>
            <div
              className="rectangle-parent113"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child232" />
              <div className="right1">Right</div>
            </div>
          </div>
        </div>
        <b className="looking-great-now13">Ready to go live?</b>
      </div>
    </div>
  );
};

export default Component19;
