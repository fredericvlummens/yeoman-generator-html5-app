'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the exceptional ${chalk.red('generator-html-5-app')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'title',
        message: 'Your project title'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("public/index.html"),
      { title: this.props.title }
    );
    
    this.fs.copy(
      this.templatePath("assets"),
      this.destinationPath("public/assets")
    );
  }

};
