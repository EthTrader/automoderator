var AutoModerator = require('../index.js');

var automoderator = new AutoModerator();

automoderator.addRule({
  title: "foo",
  rule: "bar"
});

automoderator.build ("./output.txt");

