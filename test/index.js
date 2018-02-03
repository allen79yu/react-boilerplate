import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import chaiJsx from "chai-jsx";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
const { document } = new JSDOM("<!doctype html><html><body></body></html>").window;
global.document = document;
global.window = document.defaultView;
