let languageConfig = Object.assign(
  {},
  require(`./powershell.linux.nexss.config`)
);
languageConfig.compilers = {
  Pwsh: {
    install: "brew cask install powershell",
    command: "pwsh",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
};

module.exports = languageConfig;
