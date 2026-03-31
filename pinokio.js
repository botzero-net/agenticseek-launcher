const path = require('path')
module.exports = (info) => {
  let installed = info.exists("app/venv")
  let running = info.running("start.js")
  if (installed) {
    if (running) {
      let local = info.local("start.js")
      if (local && local.url) {
        return [
          {
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open WebUI",
            href: local.url
          },
          {
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js"
          },
          {
            icon: "fa-solid fa-stop",
            text: "Stop",
            href: "start.js",
            params: {
              stop: true
            }
          }
        ]
      } else {
        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Terminal",
            href: "start.js"
          },
          {
            icon: "fa-solid fa-stop",
            text: "Stop",
            href: "start.js",
            params: {
              stop: true
            }
          }
        ]
      }
    } else {
      return [
        {
          default: true,
          icon: "fa-solid fa-play",
          text: "Start",
          href: "start.js"
        },
        {
          icon: "fa-solid fa-rotate",
          text: "Update",
          href: "update.js"
        },
        {
          icon: "fa-solid fa-trash",
          text: "Reset",
          href: "reset.js"
        }
      ]
    }
  } else {
    return [
      {
        default: true,
        icon: "fa-solid fa-download",
        text: "Install",
        href: "install.js"
      }
    ]
  }
}
