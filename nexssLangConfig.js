module.exports = {
  description: "Windows Power Shell script",
  type: "script",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "PowerShell.exe -File",
  extension: ".ps1",
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install ahk <package>",
      darwin: "nexss install ahk <package>",
      linux: "nexss install ahk <package>"
    }
  },
  url: ""
};

//execute command:
// exec(
//   "powershell.exe",
//   [
//     "-command \"Get-WmiObject -Class win32_diskdrive | Where { $_.InterfaceType -eq 'USB' }\""
//   ],
//   function(err, stdout, stderr) {
//     console.log(err);
//     console.log(stdout);
//     console.log(stderr);
//   }
// );
