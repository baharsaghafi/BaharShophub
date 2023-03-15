import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component13.css";

const Component13: FunctionComponent = () => {
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
    navigate("/4");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/51");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/541");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/overlay");
  }, [navigate]);

  return (
    <div className="div21">
      <div className="overlay13">
        <div className="overlay-child31" />
        <div className="overlay-child32" />
        <div className="progress11">
          <div className="choose-your-plan-parent10">
            <div className="choose-your-plan13">Choose your plan</div>
            <div className="customise-your-widget13">Customise your widget</div>
            <div className="set-up-your13">Set up your stamps</div>
            <b className="choose-your-rewards13">Choose your rewards</b>
            <div className="ready13">Ready</div>
            <div className="group-child136" />
            <img className="group-child137" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child138"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child139"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child140"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child141"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child33"
          alt=""
          src="/polygon-311.svg"
          onClick={onPolygonClick}
        />
        <div className="component-4-container">
          <div className="component-41">
            <div className="component-4-item" />
            <div className="create-a-reward2">Create a reward</div>
            <div className="free-shipping4">Free Shipping</div>
            <div
              className="rectangle-parent63"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child142" />
              <div className="add8">Add</div>
            </div>
            <img
              className="transport-shipping-truck2"
              alt=""
              src="/transport--shipping-truck2.svg"
            />
            <div className="product-discount5">Product Discount</div>
            <div className="rectangle-parent64">
              <div className="group-child142" />
              <div className="add9">Add</div>
            </div>
            <img className="shopping-tag3" alt="" src="/shopping--tag3.svg" />
            <div className="free-product3">Free Product</div>
            <div className="rectangle-parent65">
              <div className="group-child142" />
              <div className="add9">Add</div>
            </div>
            <img
              className="shopping-shopping-bag2"
              alt=""
              src="/shopping--shopping-bag2.svg"
            />
            <div className="coupon3">Coupon</div>
            <div className="rectangle-parent66">
              <div className="group-child142" />
              <div className="add9">Add</div>
            </div>
            <img className="shopping-tag4" alt="" src="/shopping--tag4.svg" />
          </div>
        </div>
        <div className="overlay-inner9">
          <div className="component-41">
            <div className="component-4-item" />
            <div className="reward-name6">Reward Name</div>
            <div className="free-product4">Free Product</div>
            <div className="select-products4">Select Product(s)</div>
            <div className="stamps-to-redeem6">Stamps to redeem</div>
            <div
              className="rectangle-parent68"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child147" />
              <div className="confirm6">Confirm</div>
            </div>
            <div
              className="rectangle-parent69"
              onClick={onGroupContainer6Click}
            >
              <div className="group-child148" />
              <b className="browse4">Browse</b>
            </div>
            <div
              className="rectangle-parent70"
              onClick={onGroupContainer7Click}
            >
              <div className="group-child149" />
              <div className="back6">Back</div>
            </div>
            <img className="vector-icon7" alt="" src="/vector2.svg" />
            <div className="rectangle-parent71">
              <div className="group-child150" />
              <div className="reward4">Reward</div>
            </div>
            <div className="rectangle-parent72">
              <div className="group-child151" />
              <div className="div22">10</div>
            </div>
          </div>
        </div>
        <div className="title3">
          <b className="looking-great-now8">
            Next, how would you like to reward your customers?
          </b>
        </div>
      </div>
    </div>
  );
};

export default Component13;
