import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component11.css";

const Component11: FunctionComponent = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/54");
  }, [navigate]);

  const onImage17Click = useCallback(() => {
    navigate("/54");
  }, [navigate]);

  return (
    <div className="div19">
      <div className="overlay11">
        <div className="overlay-child26" />
        <div className="overlay-child27" />
        <div className="progress9">
          <div className="choose-your-plan-parent8">
            <div className="choose-your-plan11">Choose your plan</div>
            <div className="customise-your-widget11">Customise your widget</div>
            <div className="set-up-your11">Set up your stamps</div>
            <b className="choose-your-rewards11">Choose your rewards</b>
            <div className="ready11">Ready</div>
            <div className="group-child104" />
            <img className="group-child105" alt="" src="/ellipse-14.svg" />
            <img className="group-child106" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child107"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child108"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child109"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <div className="component-5-wrapper3">
          <div className="component-55">
            <div className="component-5-child3" />
            <div className="your-rewards-will6">
              Your rewards will show here
            </div>
          </div>
        </div>
        <div className="component-6-container">
          <div className="component-55">
            <div className="component-5-child3" />
            <div className="reward-name5">Reward Name</div>
            <div className="component-6-child3" />
            <div className="product-discount3">{`Product Discount `}</div>
            <div className="select-products3">Select Product(s)</div>
            <div className="enter-discount2">Enter Discount (%)</div>
            <div className="component-6-child4" />
            <div className="stamps-to-redeem5">Stamps to redeem</div>
            <div className="component-6-child5" />
            <div className="rectangle-parent47">
              <div className="group-child110" />
              <div className="confirm5">Confirm</div>
            </div>
            <div className="rectangle-parent48">
              <div className="group-child111" />
              <b className="browse3">Browse</b>
            </div>
            <div className="rectangle-parent49">
              <div className="group-child112" />
              <div className="back5">Back</div>
            </div>
            <img className="vector-icon6" alt="" src="/vector2.svg" />
          </div>
        </div>
        <div className="image-17-wrapper" onClick={onFrameContainer2Click}>
          <img
            className="image-17-icon1"
            alt=""
            src="/image-17@2x.png"
            onClick={onImage17Click}
          />
        </div>
        <div className="title2">
          <b className="looking-great-now6">
            Next, how would you like to reward your customers?
          </b>
        </div>
      </div>
    </div>
  );
};

export default Component11;
