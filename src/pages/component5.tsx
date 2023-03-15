import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component5.css";

const Component5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/51");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/52");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/54");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/53");
  }, [navigate]);

  const onEllipseIcon1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onEllipseIcon3Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onPolygonClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onPolygon1Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="div7">
      <div className="overlay5">
        <div className="background3" />
        <div className="overlay-child12" />
        <div className="overlay-inner3">
          <div className="rectangle-parent15">
            <div className="group-child36" />
            <div className="create-a-reward">Create a reward</div>
            <div className="free-shipping">Free Shipping</div>
            <div className="rectangle-parent16" onClick={onGroupContainerClick}>
              <div className="group-child37" />
              <div className="add">Add</div>
            </div>
            <img
              className="transport-shipping-truck"
              alt=""
              src="/transport--shipping-truck.svg"
            />
            <div className="product-discount">Product Discount</div>
            <div
              className="rectangle-parent17"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child37" />
              <div className="add1">Add</div>
            </div>
            <img className="shopping-tag" alt="" src="/shopping--tag.svg" />
            <div className="free-product">Free Product</div>
            <div
              className="rectangle-parent18"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child37" />
              <div className="add1">Add</div>
            </div>
            <img
              className="shopping-shopping-bag"
              alt=""
              src="/shopping--shopping-bag.svg"
            />
            <div className="coupon">Coupon</div>
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div
              className="rectangle-parent19"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child37" />
              <div className="add1">Add</div>
            </div>
          </div>
        </div>
        <div className="progress3">
          <div className="progress-inner">
            <div className="choose-your-plan-parent2">
              <div className="choose-your-plan5">Choose your plan</div>
              <div className="customise-your-widget5">
                Customise your widget
              </div>
              <div className="set-up-your5">Set up your stamps</div>
              <b className="choose-your-rewards5">Choose your rewards</b>
              <div className="ready5">Ready</div>
              <div className="group-child41" />
              <img className="group-child42" alt="" src="/ellipse-14.svg" />
              <img
                className="group-child43"
                alt=""
                src="/ellipse-14.svg"
                onClick={onEllipseIcon1Click}
              />
              <img
                className="group-child44"
                alt=""
                src="/ellipse-14.svg"
                onClick={onEllipseIcon2Click}
              />
              <img className="frame-icon" alt="" src="/ellipse-15.svg" />
              <img
                className="group-child45"
                alt=""
                src="/ellipse-18.svg"
                onClick={onEllipseIcon3Click}
              />
            </div>
          </div>
        </div>
        <img
          className="overlay-child13"
          alt=""
          src="/polygon-24.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child14"
          alt=""
          src="/polygon-35.svg"
          onClick={onPolygon1Click}
        />
        <div className="overlay-inner4">
          <div className="rectangle-parent15">
            <div className="group-child36" />
            <div className="your-rewards-will">Your rewards will show here</div>
          </div>
        </div>
        <b className="looking-great-now">
          Next, how would you like to reward your customers?
        </b>
      </div>
    </div>
  );
};

export default Component5;
