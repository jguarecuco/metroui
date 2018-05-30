// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by metroui.js.
import { name as packageName } from "meteor/jguarecuco:metroui";

// Write your tests here!
// Here is an example.
Tinytest.add('metroui - example', function (test) {
  test.equal(packageName, "metroui");
});
