"use strict";

const genericNames = require("../index");
const test = require("tape");
const path = require("path");

const pattern = "[name]__[local]___[hash:base64:5]";

test("use `cwd` if no context was provided", t => {
  const generate = genericNames(pattern);

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "source__foo___2e6d7"
  );
  t.end();
});

test("generate distinct hash for the provided context", t => {
  const generate = genericNames(pattern, {
    context: path.join(__dirname, "/test")
  });

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "source__foo___22-0m"
  );
  t.end();
});

test("generate distinct hash for the provided hashPrefix", t => {
  const generate = genericNames(pattern, {
    context: path.join(__dirname, "/test"),
    hashPrefix: "--"
  });

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "source__foo___1rt0M"
  );
  t.end();
});
