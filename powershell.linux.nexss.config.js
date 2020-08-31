let languageConfig = Object.assign(
  {},
  require(`./powershell.win32.nexss.config`)
);
languageConfig.compilers = {
  Pwsh: {
    install: "wget -O - https://aka.ms/install-powershell.sh | sudo bash",
    command: "pwsh",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.powershell.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation:
      "sudo apt-get update && sudo apt-get install curl && sudo curl -s https://getcomposer.org/installer | php && sudo mv composer.phar /usr/local/bin/composer",
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
