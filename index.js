const fs = require('fs');

class AutoModerator {

  constructor() {
    this.rules = [];
  }

  addRule(ruleOptions, commentText) {
    this.rules.push(this.convertRuleToText(ruleOptions));
  }

  convertRuleToText(rule) {
    let keys = Object.keys(rule);
    let text = [];

    for (let field of keys) {
      let content = rule[field];

      text.push("\t" + field + ": " + content);
    }
    return text.join('\n')
  }

  build(outputFile) {
    fs.writeFileSync(outputFile, this.rules.join('\n\n') + '\n');
  }

}

module.exports = AutoModerator;

