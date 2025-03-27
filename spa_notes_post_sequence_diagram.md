```mermaid
sequenceDiagram
    participant browser
    participant server
    
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    
    server-->>browser: 201 Created (Browser renders new note without reload and handler sends new note to server)
    deactivate server
```
