import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component1.css";

const Component1: FunctionComponent = () => {
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

  const onPolygon1Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="div1">
      <div className="overlay1">
        <div className="overlay-inner" />
        <div className="progress-bar-1">
          <div className="progress-bar">
            <div className="choose-your-plan1">Choose your plan</div>
            <div className="customise-your-widget1">Customise your widget</div>
            <div className="set-up-your1">Set up your stamps</div>
            <div className="choose-your-rewards1">Choose your rewards</div>
            <div className="ready1">Ready</div>
            <div className="progress-bar-child" />
            <img className="progress-bar-item" alt="" src="/ellipse-14.svg" />
            <img className="progress-bar-inner" alt="" src="/ellipse-15.svg" />
            <img
              className="progress-bar-child1"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="progress-bar-child2"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="progress-bar-child3"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <div className="left-box">
          <div className="select-your-colours">Select your colours</div>
          <div className="banner-parent">
            <div className="banner">Banner</div>
            <img className="frame-child" alt="" src="/ellipse-25.svg" />
            <div className="stamp-card">Stamp Card</div>
            <img className="frame-item" alt="" src="/ellipse-28.svg" />
            <div className="buttons">Buttons</div>
            <img className="frame-inner" alt="" src="/ellipse-29.svg" />
            <div className="button-text">Button Text</div>
            <img className="frame-child1" alt="" src="/ellipse-26.svg" />
          </div>
        </div>
        <div className="right-box">
          <div className="preview">Preview</div>
          <img className="widget-1-1" alt="" src="/widget-1-1@2x.png" />
        </div>
        <div className="title-text">
          <div className="title">
            <b className="great-now-for">Great. Now for the fun part!</b>
          </div>
        </div>
        <img className="polygon-icon" alt="" src="/polygon-31.svg" />
        <img
          className="overlay-child1"
          alt=""
          src="/polygon-2.svg"
          onClick={onPolygon1Click}
        />
      </div>
    </div>
  );
};

export default Component1;
