import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component.css";

const Component: FunctionComponent = () => {
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
    navigate("/7");
  }, [navigate]);

  return (
    <div className="div">
      <div className="overlay">
        <div className="background" />
        <div className="overlay-child" />
        <div className="progress">
          <div className="choose-your-plan-parent">
            <div className="choose-your-plan">Choose your plan</div>
            <div className="customise-your-widget">Customise your widget</div>
            <div className="set-up-your">Set up your stamps</div>
            <div className="choose-your-rewards">Choose your rewards</div>
            <b className="ready">Ready</b>
            <div className="group-child" />
            <img className="group-item" alt="" src="/ellipse-14.svg" />
            <img
              className="group-inner"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="ellipse-icon"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child1"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child2"
              alt=""
              src="/ellipse-21.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-item"
          alt=""
          src="/polygon-3.svg"
          onClick={onPolygonClick}
        />
        <div className="component-12-wrapper">
          <div className="component-12">
            <div className="component-12-child" />
            <div className="group-parent">
              <div className="rectangle-parent">
                <div className="rectangle-div" />
                <div className="launch-program">Launch Program</div>
              </div>
              <div className="launch-later">Launch later</div>
              <img
                className="kiddl-stuff-6-1"
                alt=""
                src="/kiddl-stuff-6-1@2x.png"
              />
            </div>
          </div>
        </div>
        <b className="hooray-your-loyalty">
          Hooray! Your loyalty program is ready to use.
        </b>
      </div>
    </div>
  );
};

export default Component;
