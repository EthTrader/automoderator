const fs = require('fs');

class AutoModerator {

  constructor() {
    this.rules = [];
  }

  addRule(ruleOptions, commentText) {
    this.rules.push(this.convertRuleToText(ruleOptions, commentText));
  }

  addRules(rules) {
    rules.forEach(this.addRule);
  }

  convertRuleToText(rule, commentText) {
    let keys = Object.keys(rule);
    let text = [];

    if (commentText) {
      text.push("###### " + commentText);
    }

    for (let field of keys) {
      let content = rule[field];

      text.push("    " + field + ": " + content);
    }
    return text.join('\n')
  }

  build(outputFile) {
    fs.writeFileSync(outputFile, this.rules.join('\n\n') + '\n');
  }

}

module.exports = AutoModerator;

