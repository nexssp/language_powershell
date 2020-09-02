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
languageConfig.languagePackageManagers = {
  npm: {
    installation:
      "apt-get update && apt-get install curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed",
    search: "composer search",
    install: "composer require",
    uninstall: "composer remove",
    help: "composer",
    version: "composer version",
    init: () => {},
  },
};

module.exports = languageConfig;
