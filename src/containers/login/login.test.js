import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Login from "./login.jsx";

describe("<Login />", () => {
    it("render h1", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find("h1")).to.have.length(1);
    });
});
