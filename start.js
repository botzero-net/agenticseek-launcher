module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "redis-server"
        ],
        on: [
          {
            event: "/Ready to accept connections/",
            done: true
          },
          {
            event: "/Address already in use/",
            done: true
          }
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "venv",
        path: "app",
        message: [
          "python api.py"
        ],
        on: [{
          event: "/(http:\\/\\/[0-9.:]+)/",
          done: true
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/frontend/agentic-seek-front",
        env: {
          "REACT_APP_BACKEND_URL": "http://localhost:7777"
        },
        message: [
          "npm start"
        ],
        on: [{
          event: "/(http:\\/\\/[0-9.:]+)/",
          done: true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
