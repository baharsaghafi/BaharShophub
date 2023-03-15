import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component16.css";

const Component16: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLeftArrowContainerClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

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

  const onGroupContainer4Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/521");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/overlay");
  }, [navigate]);

  return (
    <div className="div27">
      <div className="overlay16">
        <div className="overlay-child39" />
        <div className="overlay-child40" />
        <div className="left-arrow1" onClick={onLeftArrowContainerClick}>
          <img className="left-arrow-item" alt="" src="/polygon-314.svg" />
        </div>
        <div className="looking-great-now-choose-ho1">
          <b className="looking-great-now10">
            Next, how would you like to reward your customers?
          </b>
        </div>
        <div className="component-4-wrapper2">
          <div className="component-44">
            <div className="component-4-child3" />
            <div className="create-a-reward5">Create a reward</div>
            <div className="free-shipping7">Free Shipping</div>
            <div className="rectangle-parent87">
              <div className="group-child180" />
              <div className="add20">Add</div>
            </div>
            <img
              className="transport-shipping-truck5"
              alt=""
              src="/transport--shipping-truck4.svg"
            />
            <div className="product-discount-container">
              <div className="product-discount8">Product Discount</div>
              <div className="group-child181" />
              <div className="add21">Add</div>
              <img className="shopping-tag9" alt="" src="/shopping--tag3.svg" />
            </div>
            <div className="free-product-group">
              <div className="free-product7">Free Product</div>
              <div className="group-child182" />
              <div className="add22">Add</div>
              <img
                className="shopping-tag9"
                alt=""
                src="/shopping--shopping-bag2.svg"
              />
            </div>
            <div className="coupon7">Coupon</div>
            <div className="component-4-child4" />
            <div className="add23">Add</div>
            <img className="shopping-tag10" alt="" src="/shopping--tag4.svg" />
          </div>
        </div>
        <div className="overlay-inner13">
          <div className="choose-your-plan-parent13">
            <div className="choose-your-plan16">Choose your plan</div>
            <div className="customise-your-widget16">Customise your widget</div>
            <div className="set-up-your16">Set up your stamps</div>
            <b className="choose-your-rewards16">Choose your rewards</b>
            <div className="ready16">Ready</div>
            <div className="group-child183" />
            <img className="group-child184" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child185"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child186"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child187"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child188"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <div className="overlay-inner14">
          <div className="component-44">
            <div className="component-4-child3" />
            <div className="reward-name8">Reward Name</div>
            <div className="product-discount9">{`Product Discount `}</div>
            <div className="select-products5">Select Product(s)</div>
            <div className="enter-discount3">Enter Discount (%)</div>
            <div className="stamps-to-redeem8">Stamps to redeem</div>
            <div
              className="rectangle-parent89"
              onClick={onGroupContainer4Click}
            >
              <div className="group-child190" />
              <div className="confirm8">Confirm</div>
            </div>
            <div
              className="rectangle-parent90"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child191" />
              <b className="browse5">Browse</b>
            </div>
            <div
              className="rectangle-parent91"
              onClick={onGroupContainer6Click}
            >
              <div className="group-child192" />
              <div className="back8">Back</div>
            </div>
            <img className="vector-icon10" alt="" src="/vector2.svg" />
            <div className="rectangle-parent92">
              <div className="group-child193" />
              <div className="reward6">Reward</div>
            </div>
            <div className="rectangle-parent93">
              <div className="group-child193" />
              <div className="div28">10</div>
            </div>
            <div className="rectangle-parent94">
              <div className="group-child195" />
              <div className="div29">10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component16;
