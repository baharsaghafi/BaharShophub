import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./component2.css";

const Component2: FunctionComponent = () => {
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
    navigate("/");
  }, [navigate]);

  const onPolygon1Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className="div2">
      <div className="overlay2">
        <div className="background1" />
        <div className="frame-div" />
        <div className="progress-bar1">
          <div className="choose-your-plan-group">
            <div className="choose-your-plan2">Choose your plan</div>
            <div className="customise-your-widget2">Customise your widget</div>
            <div className="set-up-your2">Set up your stamps</div>
            <div className="choose-your-rewards2">Choose your rewards</div>
            <div className="ready2">Ready</div>
            <div className="line-div" />
            <img className="group-child3" alt="" src="/ellipse-14.svg" />
            <img
              className="group-child4"
              alt=""
              src="/ellipse-15.svg"
              onClick={onEllipseIcon1Click}
            />
            <img
              className="group-child5"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon2Click}
            />
            <img
              className="group-child6"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon3Click}
            />
            <img
              className="group-child7"
              alt=""
              src="/ellipse-18.svg"
              onClick={onEllipseIcon4Click}
            />
          </div>
        </div>
        <img
          className="overlay-child2"
          alt=""
          src="/polygon-32.svg"
          onClick={onPolygonClick}
        />
        <img
          className="overlay-child3"
          alt=""
          src="/polygon-21.svg"
          onClick={onPolygon1Click}
        />
        <div className="group-div">
          <div className="rectangle-group">
            <div className="group-child8" />
            <div className="group-child9" />
            <div className="group-child10" />
            <div className="choose-your-header">Choose your header</div>
            <div className="rectangle-container">
              <div className="group-child11" />
              <img className="image-19-icon" alt="" src="/image-19@2x.png" />
              <div className="upload-your-own">Upload your own</div>
            </div>
            <div className="rectangle-parent1">
              <div className="group-child12" />
              <img className="icon" alt="" src="/8@2x.png" />
            </div>
            <div className="rectangle-parent2">
              <div className="group-child13" />
              <img className="icon1" alt="" src="/10@2x.png" />
            </div>
            <div className="rectangle-parent3">
              <div className="group-child13" />
              <img className="icon1" alt="" src="/14@2x.png" />
            </div>
            <img className="group-icon" alt="" src="/group-116.svg" />
            <div className="rectangle-parent4">
              <div className="group-child13" />
              <img className="icon3" alt="" src="/12@2x.png" />
            </div>
            <div className="rectangle-parent5">
              <div className="group-child12" />
              <div className="store-name-text">Store Name Text</div>
            </div>
          </div>
        </div>
        <div className="overlay-inner1">
          <div className="rectangle-parent6">
            <div className="frame-child2" />
            <div className="choose-your-stamp">Choose your stamp</div>
            <div className="categories">Categories</div>
            <div className="bear-logopng">bear_logo.png</div>
            <div className="rectangle-parent7">
              <div className="group-child17" />
              <img
                className="stamp-catalog-2"
                alt=""
                src="/stamp-catalog-2@2x.png"
              />
            </div>
            <div className="rectangle-parent1">
              <div className="group-child17" />
              <img
                className="stamp-catalog-4-2"
                alt=""
                src="/stamp-catalog-4-2@2x.png"
              />
            </div>
            <div className="rectangle-parent9">
              <div className="group-child17" />
              <img
                className="stamp-catalog-5-2"
                alt=""
                src="/stamp-catalog-5-2@2x.png"
              />
            </div>
            <div className="rectangle-parent2">
              <div className="group-child20" />
              <img
                className="stamp-catalog-8-2"
                alt=""
                src="/stamp-catalog-8-2@2x.png"
              />
            </div>
            <div className="rectangle-parent11">
              <div className="group-child17" />
              <img
                className="stamp-catalog-1-2"
                alt=""
                src="/stamp-catalog-1-2@2x.png"
              />
            </div>
            <div className="rectangle-parent4">
              <div className="group-child17" />
              <img
                className="stamp-catalog-6-2"
                alt=""
                src="/stamp-catalog-6-2@2x.png"
              />
            </div>
            <div className="rectangle-parent13">
              <div className="group-child11" />
              <div className="upload-your-own">Upload your own</div>
              <img className="image-18-icon" alt="" src="/image-18@2x.png" />
            </div>
            <div className="frame-child3" />
            <div className="frame-child4" />
          </div>
        </div>
        <div className="preview-parent">
          <div className="preview1">Preview</div>
          <img className="widget-1-11" alt="" src="/widget-1-11@2x.png" />
        </div>
        <div className="title-text1">
          <b className="great-now-for1">Great. Now for the fun part!</b>
        </div>
      </div>
    </div>
  );
};

export default Component2;
