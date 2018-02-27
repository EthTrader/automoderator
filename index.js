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

  convertRuleToText(rule, commentText, subrule) {
    let keys = Object.keys(rule);
    let text = [];

    if (!subrule) {
      text.push('---');
    }

    if (commentText) {
      text.push("###### " + commentText);
    }

    for (let field of keys) {
      let content = rule[field];

      if (content.constructor === Object) {
        text.push(this.convertRuleToText(content, null, true));
      } else {
        if (Array.isArray(content)) {
          text.push("    " + field + ": [" + content.map((x) => '"' + x + '"').join(', ') + "]");
        } else {
          text.push("    " + field + ": " + content);
        }
      }
    }
    return text.join('\n');
  }

  build(outputFile) {
    fs.writeFileSync(outputFile, this.rules.join('\n\n') + '\n');
  }

}

module.exports = AutoModerator;

