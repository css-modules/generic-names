"use strict";

const genericNames = require("../index");
const test = require("tape");
const path = require("path");

// According to the CSS spec, identifiers cannot
// start with a digit, two hyphens, or a hyphen
// followed by a digit.
//
// relates: https://github.com/webpack/css-loader/commit/da27c07d0df25a38699344c13b6614c53a469fd9

test("identity", t => {
  const generate = genericNames("[local]");

  t.equal(generate("foo", path.join(__dirname, "test/case/source.css")), "foo");
  t.end();
});

test("leading digit", t => {
  const generate = genericNames("0[local]");

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "_0foo"
  );
  t.end();
});

test("leading digit in the token", t => {
  const generate = genericNames("[local]");

  t.equal(
    generate("0foo", path.join(__dirname, "test/case/source.css")),
    "_0foo"
  );
  t.end();
});

test("leading two hyphens", t => {
  const generate = genericNames("--[local]");

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "_--foo"
  );
  t.end();
});

test("leading hyphen and digit", t => {
  const generate = genericNames("-0[local]");

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "_-0foo"
  );
  t.end();
});
