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
        html: "Installation finished! Use 'Config' to set your LLM Provider, and 'Env' to set API Keys. Ensure Docker is running if using local SearxNG search."
      }
    }
  ]
}
