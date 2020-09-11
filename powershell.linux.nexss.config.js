let languageConfig = Object.assign(
  {},
  require(`./powershell.win32.nexss.config`)
);

let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  Pwsh: {
    install: `${sudo}apt install -y wget && wget -O - https://aka.ms/install-powershell.sh | ${sudo}bash`,
    command: "pwsh",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.powershell.errors");

const getPowershellInstaller = (pre, post, version = "7.0.3") => {
  return `${pre} core/icu openssl-1.0 wget
wget https://github.com/PowerShell/PowerShell/releases/download/v${version}/powershell-${version}-linux-x64.tar.gz
installFolder="/usr/src/powershell"
mkdir -p "$installFolder"
tar zxf powershell-${version}-linux-x64.tar.gz -C "$installFolder"
rm -f ./powershell*.tar.gz
ln -s "$installFolder"/pwsh /usr/bin/pwsh
${post}`;
};

// If statement must be here for older versions nexss <2.1.12
if (require("fs").existsSync(`${process.env.NEXSS_SRC_PATH}/lib/osys.js`)) {
  const {
    replaceCommandByDist,
    dist,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
  const distName = dist();

  switch (distName) {
    case "Arch Linux":
      languageConfig.compilers.Pwsh.install = getPowershellInstaller(
        `${sudo}pacman -Syy
${sudo}pacman -S --noconfirm`,
        `${sudo}pacman -Scc`,
        "7.0.3"
      );
    case "Alpine Linux":
      let version = "7.0.3";
      languageConfig.compilers.Pwsh.install = `${sudo}apk update
${sudo}apk add --no-cache ca-certificates less ncurses-terminfo-base krb5-libs libgcc libintl libssl1.1 libstdc++ tzdata userspace-rcu zlib icu-libs curl
wget https://github.com/PowerShell/PowerShell/releases/download/v${version}/powershell-${version}-linux-alpine-x64.tar.gz
installFolder="/usr/src/powershell"
mkdir -p "$installFolder"
tar zxf powershell-${version}-linux*-x64.tar.gz -C "$installFolder"
rm -f ./powershell*.tar.gz
ln -s "$installFolder"/pwsh /usr/bin/pwsh`;
      break;
    case "Oracle":
    case "Oracle Linux Server":
    case "CentOS Linux":
      languageConfig.compilers.Pwsh.install = `curl https://packages.microsoft.com/config/rhel/7/prod.repo | ${sudo} tee /etc/yum.repos.d/microsoft.repo
${sudo}yum install -y powershell`;
      break;
    case "RHEL Linux":
      languageConfig.compilers.Pwsh.install = `curl https://packages.microsoft.com/config/rhel/7/prod.repo | ${sudo} tee /etc/yum.repos.d/microsoft.repo
${sudo}yum install -y powershell`;
      break;
    case "Fedora Linux":
      languageConfig.compilers.Pwsh.install = `${sudo} rpm --import https://packages.microsoft.com/keys/microsoft.asc
curl https://packages.microsoft.com/config/rhel/7/prod.repo | ${sudo} tee /etc/yum.repos.d/microsoft.repo
${sudo} dnf check-update
${sudo} dnf install compat-openssl10
${sudo} dnf install -y powershell`;
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
