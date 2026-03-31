module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git pull"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "venv",
        path: "app",
        message: [
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/frontend/agentic-seek-front",
        message: [
          "npm install"
        ]
      }
    }
  ]
}
