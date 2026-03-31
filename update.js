module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "git stash || true",
          "git pull",
          "git stash pop || true"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "conda install -y -c conda-forge portaudio"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "venv",
        path: "app",
        message: [
          "uv pip install -r requirements.txt"
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
