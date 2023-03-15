import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component10.css";

const Component10: FunctionComponent = () => {
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
    navigate("/541");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/overlay");
  }, [navigate]);

  return (
    <div className="div17">
      <div className="overlay10">
        <div className="background5" />
        <div className="overlay-child24" />
        <div className="progress8">
          <div className="choose-your-plan-parent7">
            <div className="choose-your-plan10">Choose your plan</div>
            <div className="customise-your-widget10">Customise your widget</div>
            <div className="set-up-your10">Set up your stamps</div>
            <b className="choose-your-rewards10">Choose your rewards</b>
            <div className="ready10">Ready</div>
            <div className="group-child92" />
            <img className="group-child93" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child94"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child95"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child96"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child97"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child25"
          alt=""
          src="/polygon-39.svg"
          onClick={onPolygonClick}
        />
        <div className="component-5-wrapper2">
          <div className="component-54">
            <div className="component-5-child2" />
            <div className="your-rewards-will5">
              Your rewards will show here
            </div>
          </div>
        </div>
        <b className="looking-great-now5">
          Next, how would you like to reward your customers?
        </b>
        <div className="overlay-inner7">
          <div className="component-54">
            <div className="component-5-child2" />
            <div className="reward-name4">Reward Name</div>
            <div className="free-product1">Free Product</div>
            <div className="select-products2">Select Product(s)</div>
            <div className="stamps-to-redeem4">Stamps to redeem</div>
            <div
              className="rectangle-parent42"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child99" />
              <div className="confirm4">Confirm</div>
            </div>
            <div
              className="rectangle-parent43"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child100" />
              <b className="browse2">Browse</b>
            </div>
            <div
              className="rectangle-parent44"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child101" />
              <div className="back4">Back</div>
            </div>
            <img className="vector-icon5" alt="" src="/vector2.svg" />
            <div className="rectangle-parent45">
              <div className="group-child102" />
              <div className="reward3">Reward</div>
            </div>
            <div className="rectangle-parent46">
              <div className="group-child103" />
              <div className="div18">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component10;
