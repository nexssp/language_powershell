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
    install: `${sudo}apt install -y wget tar && wget -O - https://aka.ms/install-powershell.sh | ${sudo}bash`,
    command: "pwsh",
    args: "-ExecutionPolicy ByPass -File <file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.powershell.errors");

const getPowershellInstaller = (pre, post, version = "7.0.3") => {
  return `${pre} wget
wget https://github.com/PowerShell/PowerShell/releases/download/v${version}/powershell-${version}-linux-x64.tar.gz
installFolder="/usr/src/powershell"
${sudo} mkdir -p "$installFolder"
${sudo} tar zxf powershell-${version}-linux-x64.tar.gz -C "$installFolder"
rm -f ./powershell*.tar.gz
${sudo} ln -sf "$installFolder"/pwsh /usr/bin/pwsh${post ? `\n${post}` : ""}`;
};

// If statement must be here for older versions nexss <2.1.12
if (require("fs").existsSync(`${process.env.NEXSS_SRC_PATH}/lib/osys.js`)) {
  const {
    replaceCommandByDist,
    dist,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
  const distName = dist();

  switch (distName) {
    case "Amazon Linux":
      languageConfig.compilers.Pwsh.install = getPowershellInstaller(
        `${sudo}yum update -y
${sudo}yum install -y icu tar`,
        ``,
        "7.0.3"
      );
      break;
    case "Arch Linux":
      languageConfig.compilers.Pwsh.install = getPowershellInstaller(
        `${sudo}pacman -Syy
${sudo}pacman -S --noconfirm core/icu tar`,
        `${sudo}pacman -Scc --noconfirm`,
        "7.0.3"
      );
      break;
    case "Alpine Linux":
      let version = "7.0.3";
      languageConfig.compilers.Pwsh.install = `${sudo}apk update
${sudo}apk add --no-cache ca-certificates less ncurses-terminfo-base krb5-libs libgcc libintl libssl1.1 libstdc++ tzdata userspace-rcu zlib icu-libs curl tar
wget https://github.com/PowerShell/PowerShell/releases/download/v${version}/powershell-${version}-linux-alpine-x64.tar.gz
installFolder="/usr/src/powershell"
mkdir -p "$installFolder"
tar zxf powershell-${version}-linux*-x64.tar.gz -C "$installFolder"
rm -f ./powershell*.tar.gz
ln -sf "$installFolder"/pwsh /usr/bin/pwsh`;
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
    case "Fedora":
      languageConfig.compilers.Pwsh.install = `${sudo}rpm --import https://packages.microsoft.com/keys/microsoft.asc
curl https://packages.microsoft.com/config/rhel/7/prod.repo | ${sudo}tee /etc/yum.repos.d/microsoft.repo
${sudo}dnf install -y compat-openssl10
${sudo}dnf install -y powershell`;
      break;
    case "openSUSE Leap":
    case "openSUSE Tumbleweed":
      languageConfig.compilers.Pwsh.install = `${sudo}zypper update
${sudo}zypper --non-interactive install curl tar gzip libopenssl1_0_0 libicu
${sudo}curl -L https://github.com/PowerShell/PowerShell/releases/download/v7.0.3/powershell-7.0.3-linux-x64.tar.gz -o /tmp/powershell.tar.gz
${sudo}mkdir -p /opt/microsoft/powershell/7
${sudo}tar zxf /tmp/powershell.tar.gz -C /opt/microsoft/powershell/7
${sudo}chmod +x /opt/microsoft/powershell/7/pwsh
${sudo}ln -sf /opt/microsoft/powershell/7/pwsh /usr/bin/pwsh`;
      break;
    case "Linux Mint":
    default:
      languageConfig.compilers.Pwsh.install = replaceCommandByDist(
        getPowershellInstaller(
          `${sudo}apt-get update -y
${sudo}apt-get install -y libicu?? tar`,
          "", // Later to implement cleanups `${sudo}apt-get autoremove`
          "7.0.3"
        )
      );
      break;
  }
  // This function just replace all apt-get,apt to the right distribution pkg installer.

  languageConfig.dist = distName;
}

module.exports = languageConfig;
