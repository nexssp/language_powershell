let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "PowerShell";
languageConfig.description = "Windows Power Shell script";
languageConfig.url = "https://www.microsoft.com/";
languageConfig.extensions = [".ps1"];
languageConfig.builders = {
  tofill: {
    install: "scoop install llvm",
    //build: "pkg --output <destinationFile> --out-path <destinationPath> <file>",
    command: "clang++",
    build: function() {
      const path = require("path");
      //take command from current folder
      return path.join(__dirname, "customCompiler.win32.powershell.cmd");
    },
    args: "<file> <destinationFile>",
    // C++ needs to be build to exe, so no compile option
    help: ``
  }
};
languageConfig.compilers = {
  ps1: {
    install: "installed.",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "PowerShell.exe",
    args: "-File <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.powershell.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
