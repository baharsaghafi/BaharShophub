import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component8.css";

const Component8: FunctionComponent = () => {
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

  const onImage17Click = useCallback(() => {
    navigate("/52");
  }, [navigate]);

  return (
    <div className="div13">
      <div className="overlay8">
        <div className="overlay-child20" />
        <div className="overlay-child21" />
        <div className="progress6">
          <div className="choose-your-plan-parent5">
            <div className="choose-your-plan8">Choose your plan</div>
            <div className="customise-your-widget8">Customise your widget</div>
            <div className="set-up-your8">Set up your stamps</div>
            <b className="choose-your-rewards8">Choose your rewards</b>
            <div className="ready8">Ready</div>
            <div className="group-child71" />
            <img className="group-child72" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child73"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child74"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child75"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child76"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <div className="component-5-frame">
          <div className="component-52">
            <div className="component-5-inner" />
            <div className="your-rewards-will3">
              Your rewards will show here
            </div>
          </div>
        </div>
        <div className="component-6-wrapper">
          <div className="component-52">
            <div className="component-5-inner" />
            <div className="reward-name2">Reward Name</div>
            <div className="component-6-item" />
            <div className="product-discount2">{`Product Discount `}</div>
            <div className="select-products1">Select Product(s)</div>
            <div className="enter-discount1">Enter Discount (%)</div>
            <div className="component-6-inner" />
            <div className="stamps-to-redeem2">Stamps to redeem</div>
            <div className="component-6-child1" />
            <div className="rectangle-parent33">
              <div className="group-child77" />
              <div className="confirm2">Confirm</div>
            </div>
            <div className="rectangle-parent34">
              <div className="group-child78" />
              <b className="browse1">Browse</b>
            </div>
            <div className="rectangle-parent35">
              <div className="group-child79" />
              <div className="back2">Back</div>
            </div>
            <img className="vector-icon3" alt="" src="/vector2.svg" />
          </div>
        </div>
        <img
          className="image-17-icon"
          alt=""
          src="/image-17@2x.png"
          onClick={onImage17Click}
        />
        <div className="title1">
          <b className="looking-great-now3">
            Next, how would you like to reward your customers?
          </b>
        </div>
      </div>
    </div>
  );
};

export default Component8;
