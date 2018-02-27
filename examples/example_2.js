var AutoModerator = require('../index.js');
import { DomainBlacklist, Flair } from 'automoderator/common-rules';

var automoderator = new AutoModerator();

automoderator.addRule({
  title: "foo",
  rule: "bar"
});

automoderator.addRule(DomainBlacklist('./blacklist.txt'));
automoderator.addRule(Flair({age: '', text: ''}));

automoderator.addRules(require('./flairs.js'));

automoderator.build ("./output.txt");

