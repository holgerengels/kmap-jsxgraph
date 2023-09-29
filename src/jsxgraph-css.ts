import {css, CSSResult} from 'lit';

// language=CSS
export const jsxgraphStyles: CSSResult = css`
  .jxgbox {
    /* for IE 7 */
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: #356aa0;
    border-radius: 10px;
    margin: 0;
    -webkit-border-radius: 10px;
    -ms-touch-action: none;
    /* "touch-action: none;" is set with JavaScript. */
  }

  .jxgbox svg text {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .JXGtext {
    font-family: Courier, monospace;
    /*
     * The default font family is now set in
     * JXG.Options.text.cssdefaultstyle = 'font-family: Arial, Helvetica, Geneva, sans-serif;'
     */

    /* "background-color: transparent;" may produce artefacts in IE. Solution: setting a color explicitly. */
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  .JXGinfobox {
    border-style: none;
    border-width: 0;
    border-color: black;
  }

  /* CSS attributes will (permantely) overwrite attributes set in JSXGraph */
  .JXGimage {
    /* opacity: 1.0; */
  }
  .JXGimageHighlight {
    /* opacity: 0.6; */
  }

  .jxgbox :focus {
    outline-width: 0.5px;
    outline-style: dotted;
  }

  /* CSS rules for the navigation bar */

  .JXG_navigation {
    position: absolute;
    right: 5px;
    bottom: 5px;

    z-index: 100;

    background-color: transparent;
    padding: 2px;
    font-size: 14px;
    cursor: pointer;
  }

  .JXG_navigation_button {
    color: #666;
  }

  .JXG_navigation_button:hover {
    border-radius: 2px;
    background: rgba(184, 184, 184, 0.5);
  }

  .JXG_navigation_button svg {
    top: 0.2em;
    position: relative;
    padding: 0;
  }

  /* CSS rules for the wrapping div in fullscreen mode */

  .JXG_wrap_private:-moz-full-screen {
    background-color: #ccc;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .JXG_wrap_private:-webkit-full-screen {
    background-color: #ccc;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .JXG_wrap_private:fullscreen {
    background-color: #ccc;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .JXG_wrap_private:-ms-fullscreen {
    background-color: #ccc;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  /* Classes forn smartlabels */

  .smart-label-solid {
    padding: 1px 7px 1px 7px;
    margin: 0px;
    color: white !important;
    border-radius: 150px;
    text-align: center;
    vertical-align: middle;
  }

  .smart-label-outline {
    padding: 1px 7px 1px 7px;
    margin: 0px;
    border: solid 2px #000000;
    background-color: #ffffff !important;
    color: black !important;
    border-radius: 15px;
    text-align: center;
    vertical-align: middle;
  }

  .smart-label-pure {
    padding: 20px 7px 1px 7px;
    margin: 0px;
    border: none;
    background-color: transparent !important;
    color: black !important;
    border-radius: 15px;
    text-align: center;
    vertical-align: middle;
  }

  .smart-label-line, .smart-label-point {
    background-color: #0072B2;
    border-color: #0072B2;
  }

  .smart-label-point {
    margin-top: 12px;
  }

  .smart-label-angle {
    background-color: #E69F00;
    border-color: #E69F00;
    padding: 1px 7px 1px 7px !important;
  }

  .smart-label-polygon, .smart-label-circle {
    background-color: #F0E442;
    color: #000000 !important;
    border-color: #F0E442;
    padding: 1px 7px 1px 7px !important;
  }
`;
