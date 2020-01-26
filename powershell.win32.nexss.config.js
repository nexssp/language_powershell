let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "PowerShell";
languageConfig.description = "Windows Power Shell script";
languageConfig.url = "https://www.microsoft.com/";
languageConfig.extensions = [".ps1"];
languageConfig.builders = {};
languageConfig.compilers = {
    ps1: {
        install: "installed.",
        command: "PowerShell.exe",
        args: "-ExecutionPolicy ByPass -File <file>",
        help: ``
    }
};
languageConfig.errors = require("./nexss.powershell.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;