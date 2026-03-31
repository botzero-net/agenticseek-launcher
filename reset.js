module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "rm -rf app/venv",
          "rm -rf app/frontend/agentic-seek-front/node_modules"
        ]
      }
    }
  ]
}
