import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component14.css";

const Component14: FunctionComponent = () => {
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

  const onPolygon1Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/51");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/52");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/54");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/53");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/61");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/54");
  }, [navigate]);

  return (
    <div className="div23">
      <div className="overlay14">
        <div className="background7" />
        <div className="overlay-child34" />
        <div className="progress12">
          <div className="choose-your-plan-parent11">
            <div className="choose-your-plan14">Choose your plan</div>
            <div className="customise-your-widget14">Customise your widget</div>
            <div className="set-up-your14">Set up your stamps</div>
            <b className="choose-your-rewards14">Choose your rewards</b>
            <div className="ready14">Ready</div>
            <div className="group-child152" />
            <img className="group-child153" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child154"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child155"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child156"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child157"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child35"
          alt=""
          src="/polygon-26.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child36"
          alt=""
          src="/polygon-312.svg"
          onClick={onPolygon1Click}
        />
        <div className="component-4-frame">
          <div className="component-42">
            <div className="component-4-inner" />
            <div className="create-a-reward3">Create a reward</div>
            <div
              className="rectangle-parent73"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child158" />
              <div className="add12">Add</div>
            </div>
            <div className="free-shipping-parent">
              <div className="free-shipping5">Free Shipping</div>
              <img
                className="transport-shipping-truck3"
                alt=""
                src="/transport--shipping-truck3.svg"
              />
            </div>
            <div
              className="rectangle-parent74"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child158" />
              <div className="add13">Add</div>
            </div>
            <div className="product-discount-parent">
              <div className="product-discount6">Product Discount</div>
              <img className="shopping-tag5" alt="" src="/shopping--tag5.svg" />
            </div>
            <div
              className="rectangle-parent75"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child158" />
              <div className="add13">Add</div>
            </div>
            <div className="free-product-parent">
              <div className="free-product5">Free Product</div>
              <img
                className="shopping-shopping-bag3"
                alt=""
                src="/shopping--shopping-bag3.svg"
              />
            </div>
            <div
              className="rectangle-parent76"
              onClick={onGroupContainer7Click}
            >
              <div className="group-child158" />
              <div className="add13">Add</div>
            </div>
            <div className="coupon-parent">
              <div className="coupon4">Coupon</div>
              <img className="shopping-tag6" alt="" src="/shopping--tag6.svg" />
            </div>
          </div>
        </div>
        <div className="overlay-inner10">
          <div className="component-42">
            <div className="component-4-inner" />
            <div className="your-rewards1">Your Rewards</div>
            <div className="off-green-t-shirt1">Free Green T-Shirt</div>
            <div className="stamps5">8 stamps</div>
            <div
              className="rectangle-parent78"
              onClick={onGroupContainer9Click}
            >
              <div className="group-child163" />
              <div className="edit4">Edit</div>
            </div>
            <div
              className="rectangle-parent79"
              onClick={onGroupContainer10Click}
            >
              <div className="group-child164" />
              <img className="vector-icon8" alt="" src="/vector4.svg" />
            </div>
          </div>
        </div>
        <b className="title4">
          Next, how would you like to reward your customers?
        </b>
      </div>
    </div>
  );
};

export default Component14;
