# Calculator App Flow

This is a simple flowchart showing the operations of a calculator app.

```mermaid
flowchart TD
    A[Start] --> B[Enter first number]
    B --> C[Enter second number]
    C --> D[Select operation]
    
    D --> E[Addition]
    E --> F[Add numbers]
    F --> G[Display result]
    
    D --> H[Subtraction]
    H --> I[Subtract numbers]
    I --> J[Display result]
    
    D --> K[Multiplication]
    K --> L[Multiply numbers]
    L --> M[Display result]
    
    D --> N[Division]
    N --> O[Divide numbers]
    O --> P[Display result]
    
    G --> Q[End]
    J --> Q
    M --> Q
    P --> Q
