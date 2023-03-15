import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component7.css";

const Component7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseIcon1Click = useCallback(() => {
    navigate("/");
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
    navigate("/521");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/overlay");
  }, [navigate]);

  return (
    <div className="div10">
      <div className="overlay7">
        <div className="background4" />
        <div className="overlay-child18" />
        <div className="progress5">
          <div className="choose-your-plan-parent4">
            <div className="choose-your-plan7">Choose your plan</div>
            <div className="customise-your-widget7">Customise your widget</div>
            <div className="set-up-your7">Set up your stamps</div>
            <b className="choose-your-rewards7">Choose your rewards</b>
            <div className="ready7">Ready</div>
            <div className="group-child58" />
            <img className="group-child59" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child60"
              alt=""
              src="/ellipse-14.svg"
              onClick={onEllipseIcon1Click}
            />
            <img className="group-child61" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child62"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child63"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child19"
          alt=""
          src="/polygon-37.svg"
          onClick={onPolygonClick}
        />
        <div className="component-5-container">
          <div className="component-51">
            <div className="component-5-item" />
            <div className="your-rewards-will2">
              Your rewards will show here
            </div>
          </div>
        </div>
        <div className="overlay-inner5">
          <div className="component-51">
            <div className="component-5-item" />
            <div className="reward-name1">Reward Name</div>
            <div className="product-discount1">{`Product Discount `}</div>
            <div className="select-products">Select Product(s)</div>
            <div className="enter-discount">Enter Discount (%)</div>
            <div className="stamps-to-redeem1">Stamps to redeem</div>
            <div
              className="rectangle-parent27"
              onClick={onGroupContainer1Click}
            >
              <div className="group-child65" />
              <div className="confirm1">Confirm</div>
            </div>
            <div
              className="rectangle-parent28"
              onClick={onGroupContainer2Click}
            >
              <div className="group-child66" />
              <b className="browse">Browse</b>
            </div>
            <div
              className="rectangle-parent29"
              onClick={onGroupContainer3Click}
            >
              <div className="group-child67" />
              <div className="back1">Back</div>
            </div>
            <img className="vector-icon2" alt="" src="/vector2.svg" />
            <div className="rectangle-parent30">
              <div className="group-child68" />
              <div className="reward1">Reward</div>
            </div>
            <div className="rectangle-parent31">
              <div className="group-child68" />
              <div className="div11">10</div>
            </div>
            <div className="rectangle-parent32">
              <div className="group-child70" />
              <div className="div12">10</div>
            </div>
          </div>
        </div>
        <b className="looking-great-now2">
          Next, how would you like to reward your customers?
        </b>
      </div>
    </div>
  );
};

export default Component7;
