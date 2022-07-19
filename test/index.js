"use strict";

const genericNames = require("../index");
const test = require("tape");
const path = require("path");

const pattern = "[name]__[local]___[hash:base64:5]";

test("use `cwd` if no context was provided", t => {
  const generate = genericNames(pattern);

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "source__foo___VihAC"
  );
  t.end();
});

test("generate distinct hash for the provided context", t => {
  const generate = genericNames(pattern, {
    context: path.join(__dirname, "/test")
  });

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "source__foo___ZIJxV"
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
    "source__foo___QTVQp"
  );
  t.end();
});

test("use group matches if regExp was provided", t => {
  const generate = genericNames('[1]__[2]', { regExp: /([^/]*)\/([^/]*)$/ })

  t.equal(
    generate("foo", path.join(__dirname, "test/case/source.css")),
    "case__source-css"
  );
  t.end()
})
