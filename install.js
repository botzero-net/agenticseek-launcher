module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Fosowl/agenticSeek.git app"
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
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "cp .env.example .env"
        ]
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation finished! Please make sure you have <b>Docker</b> installed if you want to use the local search service (SearxNG)."
      }
    }
  ]
}
