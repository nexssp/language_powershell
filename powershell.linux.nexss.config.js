let languageConfig = Object.assign(
  {},
  require(`./powershell.win32.nexss.config`)
);
languageConfig.compilers = {
  Pwsh: {
    install:
      "apt install wget && wget -O - https://aka.ms/install-powershell.sh | bash",
    command: "pwsh",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.powershell.errors");

// If statement must be here for older versions nexss <2.1.12
if (require("fs").existsSync(`${process.env.NEXSS_SRC_PATH}/lib/osys.js`)) {
  const {
    replaceCommandByDist,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

  // This function just replace all apt-get,apt to the right distribution pkg installer.
  languageConfig.compilers.Pwsh.install = replaceCommandByDist(
    languageConfig.compilers.Pwsh.install
  );

  languageConfig.dist = distName;
}

module.exports = languageConfig;
