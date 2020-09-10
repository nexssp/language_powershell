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
    dist,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
  const distName = dist();
  switch (distName) {
    case "Arch Linux":
      languageConfig.compilers.Pwsh.install = `pacman -Syy
pacman -S --noconfirm core/icu openssl-1.0 wget
wget https://github.com/PowerShell/PowerShell/releases/download/v7.0.3/powershell-7.0.3-linux-x64.tar.gz
 installFolder="/usr/src/powershell-7"
mkdir -p "$installFolder"
tar zxf powershell-7.0.3-linux-x64.tar.gz -C "$installFolder"
rm -f ./powershell*.tar.gz
ln -s "$installFolder"/pwsh /usr/bin/pwsh
pacman -Scc`;
      break;
    default:
      languageConfig.compilers.Pwsh.install = replaceCommandByDist(
        languageConfig.compilers.Pwsh.install
      );
      break;
  }
  // This function just replace all apt-get,apt to the right distribution pkg installer.

  languageConfig.dist = dist();
}

module.exports = languageConfig;
