let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "PowerShell";
languageConfig.description = "Windows Power Shell script";
languageConfig.url = "https://www.microsoft.com";
languageConfig.founders = ["Microsoft"];
languageConfig.developers = [""];
languageConfig.years = ["2006"];
languageConfig.extensions = [".ps1"];
languageConfig.builders = {};
languageConfig.compilers = {
  Pwsh: {
    install: `scoop install pwsh`,
    command: "Pwsh.exe",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
  Powershell: {
    install: "installed.",
    command: "PowerShell.exe",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.powershell.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
