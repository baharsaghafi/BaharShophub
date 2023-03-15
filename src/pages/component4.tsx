import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component4.css";

const Component4: FunctionComponent = () => {
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

  const onPolygon1Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className="div5">
      <div className="overlay4">
        <div className="overlay-child7" />
        <div className="overlay-child8" />
        <div className="overlay-child8" />
        <div className="progress2">
          <div className="choose-your-plan-parent1">
            <div className="choose-your-plan4">Choose your plan</div>
            <div className="customise-your-widget4">Customise your widget</div>
            <b className="set-up-your4">Set up your stamps</b>
            <div className="choose-your-rewards4">Choose your rewards</div>
            <div className="ready4">Ready</div>
            <div className="group-child30" />
            <img className="group-child31" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child32"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child33"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child34"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child35"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child10"
          alt=""
          src="/polygon-23.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child11"
          alt=""
          src="/polygon-34.svg"
          onClick={onPolygon1Click}
        />
        <div className="frame13">
          <div className="component-3">
            <div className="component-3-child" />
            <div className="join-loyalty-program">Join loyalty program</div>
            <div className="stamps">stamp(s)</div>
            <div className="awarding-stamps-on">
              Awarding stamps on sign-up is proven to increase loyalty program
              effectiveness by 70%.
            </div>
            <img
              className="stamp-catalog-9-1"
              alt=""
              src="/stamp-catalog-9-1@2x.png"
            />
            <img className="component-3-item" alt="" src="/rectangle-271.svg" />
            <div className="div6">2</div>
          </div>
        </div>
        <b className="looking-great-now-container1">
          <p className="looking-great1">{`Looking great! `}</p>
          <p className="looking-great1">
            Now, choose how your customers earn stamps.
          </p>
        </b>
      </div>
    </div>
  );
};

export default Component4;
