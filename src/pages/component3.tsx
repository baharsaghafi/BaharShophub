import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component3.css";

const Component3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseIcon1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEllipseIcon3Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onEllipseIcon4Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onPolygonClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onPolygon1Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="div3">
      <div className="overlay3">
        <div className="background2" />
        <div className="overlay-child4" />
        <div className="progress1">
          <div className="choose-your-plan-container">
            <div className="choose-your-plan3">Choose your plan</div>
            <div className="customise-your-widget3">Customise your widget</div>
            <b className="set-up-your3">Set up your stamps</b>
            <div className="choose-your-rewards3">Choose your rewards</div>
            <div className="ready3">Ready</div>
            <div className="group-child24" />
            <img className="group-child25" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child26"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img className="group-child27" alt="" src="/ellipse-15.svg" />
            <img
              className="group-child28"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child29"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child5"
          alt=""
          src="/polygon-22.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child6"
          alt=""
          src="/polygon-33.svg"
          onClick={onPolygon1Click}
        />
        <b className="looking-great-now-container">
          <p className="looking-great">{`Looking great! `}</p>
          <p className="looking-great">
            Now, choose how your customers earn stamps.
          </p>
        </b>
        <div className="overlay-inner2">
          <div className="rectangle-parent14">
            <div className="frame-child5" />
            <img
              className="kiddl-stuff-2-1"
              alt=""
              src="/kiddl-stuff-2-1@2x.png"
            />
            <b className="spend">Spend</b>
            <b className="to-earn-1">to earn 1 stamp</b>
            <img className="rectangle-icon" alt="" src="/rectangle-27.svg" />
            <b className="b">£</b>
            <div className="div4">5</div>
            <div className="your-customers-can">
              Your customers can earn multiple stamps per order.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
