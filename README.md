# AgenticSeek Pinokio Launcher

This is a 1-click launcher for [AgenticSeek](https://github.com/Fosowl/agenticSeek).

## Features

- Fully Local Manus AI
- No APIs required (Privacy Focused)
- Web Interface
- Browser Automation with Selenium

## Requirements

- **Python 3.10+** (Recommended)
- **Node.js & npm**
- **Docker Desktop** (Required for SearxNG local search and Redis)
- **uv** (Optional, used for faster python dependency management)

## Installation

1. Click **Install** in Pinokio.
2. Wait for the dependencies to be installed.
3. If you want to use the local search service (SearxNG), make sure **Docker Desktop** is running.

## Usage

1. Click **Start**.
2. Once the services are ready, click **Open WebUI**.
3. Configure your LLM provider (Ollama, LM Studio, etc.) in the `config.ini` or via the web UI.

## API Documentation

### Python

```python
import requests

response = requests.post("http://localhost:7777/query", json={
    "query": "Who is the CEO of Google?"
})
print(response.json())
```

### Javascript

```javascript
fetch("http://localhost:7777/query", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: "Who is the CEO of Google?" })
}).then(res => res.json()).then(console.log)
```

### Curl

```bash
curl -X POST http://localhost:7777/query \
     -H "Content-Type: application/json" \
     -d '{"query": "Who is the CEO of Google?"}'
```
