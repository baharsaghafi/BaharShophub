import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component17.css";

const Component17: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLeftArrowContainerClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

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
    navigate("/5");
  }, [navigate]);

  const onEllipseIcon4Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className="div30">
      <div className="overlay17">
        <div className="overlay-child41" />
        <div className="overlay-child42" />
        <div className="left-arrow2" onClick={onLeftArrowContainerClick}>
          <img className="left-arrow-inner" alt="" src="/polygon-315.svg" />
        </div>
        <div className="looking-great-now-choose-ho2">
          <b className="looking-great-now11">
            Next, how would you like to reward your customers?
          </b>
        </div>
        <div className="component-4-wrapper3">
          <div className="component-45">
            <div className="component-4-child5" />
            <div className="create-a-reward6">Create a reward</div>
            <div className="free-shipping8">Free Shipping</div>
            <div className="rectangle-parent95" onClick={onGroupContainerClick}>
              <div className="group-child196" />
              <div className="add24">Add</div>
            </div>
            <img
              className="transport-shipping-truck6"
              alt=""
              src="/transport--shipping-truck4.svg"
            />
            <div className="product-discount10">Product Discount</div>
            <div
              className="rectangle-parent96"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child196" />
              <div className="add25">Add</div>
            </div>
            <img className="shopping-tag11" alt="" src="/shopping--tag3.svg" />
            <div className="free-product8">Free Product</div>
            <div
              className="rectangle-parent97"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child196" />
              <div className="add25">Add</div>
            </div>
            <img
              className="shopping-shopping-bag6"
              alt=""
              src="/shopping--shopping-bag2.svg"
            />
            <div className="coupon8">Coupon</div>
            <div
              className="rectangle-parent98"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child196" />
              <div className="add25">Add</div>
            </div>
            <img className="shopping-tag12" alt="" src="/shopping--tag4.svg" />
          </div>
        </div>
        <div className="overlay-inner15">
          <div className="choose-your-plan-parent14">
            <div className="choose-your-plan17">Choose your plan</div>
            <div className="customise-your-widget17">Customise your widget</div>
            <div className="set-up-your17">Set up your stamps</div>
            <b className="choose-your-rewards17">Choose your rewards</b>
            <div className="ready17">Ready</div>
            <div className="group-child200" />
            <img className="group-child201" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child202"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child203"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child204"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child205"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <div className="overlay-inner16">
          <div className="component-45">
            <div className="component-4-child5" />
            <div className="reward-name9">Reward Name</div>
            <div className="free-shipping9">Free Shipping</div>
            <div className="stamps-to-redeem9">Stamps to redeem</div>
            <div className="rectangle-parent100">
              <div className="group-child207" />
              <div className="div31">10</div>
            </div>
            <div
              className="rectangle-parent101"
              onClick={onGroupContainer6Click}
            >
              <div className="group-child208" />
              <div className="confirm9">Confirm</div>
            </div>
            <div
              className="rectangle-parent102"
              onClick={onGroupContainer7Click}
            >
              <div className="group-child209" />
              <div className="back9">Back</div>
            </div>
            <div className="rectangle-parent103">
              <div className="group-child210" />
              <div className="reward7">Reward</div>
            </div>
            <img className="vector-icon11" alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component17;
