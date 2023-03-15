import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component12.css";

const Component12: FunctionComponent = () => {
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
    navigate("/52");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/54");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/53");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/51");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/64");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    navigate("/65");
  }, [navigate]);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/61");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/63");
  }, [navigate]);

  return (
    <div className="div20">
      <div className="overlay12">
        <div className="background6" />
        <div className="overlay-child28" />
        <div className="progress10">
          <div className="choose-your-plan-parent9">
            <div className="choose-your-plan12">Choose your plan</div>
            <div className="customise-your-widget12">Customise your widget</div>
            <div className="set-up-your12">Set up your stamps</div>
            <b className="choose-your-rewards12">Choose your rewards</b>
            <div className="ready12">Ready</div>
            <div className="group-child113" />
            <img className="group-child114" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child115"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child116"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child117"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child118"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child29"
          alt=""
          src="/polygon-25.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child30"
          alt=""
          src="/polygon-310.svg"
          onClick={onPolygon1Click}
        />
        <div className="component-4-wrapper">
          <div className="component-4">
            <div className="component-4-child" />
            <div className="create-a-reward1">Create a reward</div>
            <div className="free-shipping2">Free Shipping</div>
            <img
              className="transport-shipping-truck1"
              alt=""
              src="/transport--shipping-truck1.svg"
            />
            <div className="product-discount4">Product Discount</div>
            <div
              className="rectangle-parent50"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child119" />
              <div className="add4">Add</div>
            </div>
            <img className="shopping-tag1" alt="" src="/shopping--tag1.svg" />
            <div className="free-product2">Free Product</div>
            <div
              className="rectangle-parent51"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child119" />
              <div className="add4">Add</div>
            </div>
            <img
              className="shopping-shopping-bag1"
              alt=""
              src="/shopping--shopping-bag1.svg"
            />
            <div className="coupon2">Coupon</div>
            <div
              className="rectangle-parent52"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child119" />
              <div className="add4">Add</div>
            </div>
            <img className="shopping-tag2" alt="" src="/shopping--tag2.svg" />
            <div
              className="rectangle-parent53"
              onClick={onGroupContainer4Click}
            >
              <div className="group-child119" />
              <div className="edit">Add</div>
            </div>
          </div>
        </div>
        <div className="overlay-inner8">
          <div className="rectangle-parent54">
            <div className="group-child123" />
            <div className="your-rewards">Your Rewards</div>
            <div className="off-green-t-shirt">50% Off Green T-Shirt</div>
            <div className="stamps1">10 stamps</div>
            <div
              className="rectangle-parent55"
              onClick={onGroupContainer5Click}
            >
              <div className="group-child124" />
              <img className="group-child125" alt="" src="/group-146.svg" />
            </div>
            <div
              className="rectangle-parent56"
              onClick={onGroupContainer6Click}
            >
              <div className="group-child119" />
              <div className="edit">Edit</div>
            </div>
            <div className="free-shipping3">Free Shipping</div>
            <div className="stamps2">4 stamps</div>
            <div
              className="rectangle-parent57"
              onClick={onGroupContainer7Click}
            >
              <div className="group-child124" />
              <img className="group-child125" alt="" src="/group-146.svg" />
            </div>
            <div
              className="rectangle-parent58"
              onClick={onGroupContainer8Click}
            >
              <div className="group-child119" />
              <div className="edit">Edit</div>
            </div>
            <div className="free-trainers">Free Trainers</div>
            <div className="stamps3">20 stamps</div>
            <div
              className="rectangle-parent59"
              onClick={onGroupContainer9Click}
            >
              <div className="group-child124" />
              <img className="group-child125" alt="" src="/group-146.svg" />
            </div>
            <div
              className="rectangle-parent60"
              onClick={onGroupContainer10Click}
            >
              <div className="group-child119" />
              <div className="edit">Edit</div>
            </div>
            <div className="off-coupon">£10 off coupon</div>
            <div className="stamps4">10 stamps</div>
            <div
              className="rectangle-parent61"
              onClick={onGroupContainer11Click}
            >
              <div className="group-child124" />
              <img className="group-child125" alt="" src="/group-146.svg" />
            </div>
            <div
              className="rectangle-parent62"
              onClick={onGroupContainer12Click}
            >
              <div className="group-child119" />
              <div className="edit">Edit</div>
            </div>
          </div>
        </div>
        <b className="looking-great-now7">
          Next, how would you like to reward your customers?
        </b>
      </div>
    </div>
  );
};

export default Component12;
