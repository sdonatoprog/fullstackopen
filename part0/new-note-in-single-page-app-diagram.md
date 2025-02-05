```mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

  Note right of browser: The browser just send a POST request with the JSON file, the page is locally updated
```