import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component15.css";

const Component15: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLeftArrowContainerClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/54");
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
    navigate("/overlay");
  }, [navigate]);

  return (
    <div className="div24">
      <div className="overlay15">
        <div className="overlay-child37" />
        <div className="overlay-child38" />
        <div className="left-arrow" onClick={onLeftArrowContainerClick}>
          <img className="left-arrow-child" alt="" src="/polygon-313.svg" />
        </div>
        <div className="looking-great-now-choose-ho">
          <b className="looking-great-now9">
            Next, how would you like to reward your customers?
          </b>
        </div>
        <div className="component-4-wrapper1">
          <div className="component-43">
            <div className="component-4-child1" />
            <div className="create-a-reward4">Create a reward</div>
            <div className="free-shipping6">Free Shipping</div>
            <div className="rectangle-parent80">
              <div className="group-child165" />
              <div className="add16">Add</div>
            </div>
            <img
              className="transport-shipping-truck4"
              alt=""
              src="/transport--shipping-truck4.svg"
            />
            <div className="product-discount-group">
              <div className="product-discount7">Product Discount</div>
              <div className="group-child166" />
              <div className="add17">Add</div>
              <img className="shopping-tag7" alt="" src="/shopping--tag3.svg" />
            </div>
            <div className="free-product6">Free Product</div>
            <div
              className="rectangle-parent81"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child165" />
              <div className="add18">Add</div>
            </div>
            <img
              className="shopping-shopping-bag4"
              alt=""
              src="/shopping--shopping-bag2.svg"
            />
            <div className="coupon5">Coupon</div>
            <div className="component-4-child2" />
            <div className="add19">Add</div>
            <img className="shopping-tag8" alt="" src="/shopping--tag4.svg" />
          </div>
        </div>
        <div className="overlay-inner11">
          <div className="choose-your-plan-parent12">
            <div className="choose-your-plan15">Choose your plan</div>
            <div className="customise-your-widget15">Customise your widget</div>
            <div className="set-up-your15">Set up your stamps</div>
            <b className="choose-your-rewards15">Choose your rewards</b>
            <div className="ready15">Ready</div>
            <div className="group-child168" />
            <img className="group-child169" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child170"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child171"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child172"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child173"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <div className="overlay-inner12">
          <div className="component-43">
            <div className="component-4-child1" />
            <div className="reward-name7">Reward Name</div>
            <div className="group-child175" />
            <div className="coupon6">Coupon</div>
            <div className="coupon-amount1">Coupon Amount (£)</div>
            <div className="reward5">Reward</div>
            <div className="stamps-to-redeem7">Stamps to redeem</div>
            <div
              className="rectangle-parent83"
              onClick={onGroupContainer4Click}
            >
              <div className="group-child176" />
              <div className="confirm7">Confirm</div>
            </div>
            <div
              className="rectangle-parent84"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child177" />
              <div className="back7">Back</div>
            </div>
            <div className="rectangle-parent85">
              <div className="group-child178" />
              <div className="div25">10</div>
            </div>
            <div className="rectangle-parent86">
              <div className="group-child179" />
              <div className="div26">10</div>
            </div>
            <img className="vector-icon9" alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component15;
