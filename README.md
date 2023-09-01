# ES modules + Vite

## Description

This project is a monorepo consisting of three workspaces:

1. **Simple Library (ESM Module) using TypeScript**: This workspace contains a simple library that exports a function, which takes a `name` parameter and returns a greeting string. The library is written in TypeScript.

2. **Static Site (using Node Module)**: This workspace is a static one-page website that imports the library created in the first workspace as a Node module. It uses the library to display a personalized greeting on the web page.

package.json
```javascript
    "dependencies": {
        "@romanenko.pavlo/my-library": "^0.0.2",
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
```

App.tsx
```typescript
import { greet } from '@romanenko.pavlo/my-library';
```

3. **Static Site (using HTTP Bundle)**: Similar to the second workspace, this workspace is also a static one-page website. However, it imports the library as an HTTP bundle, demonstrating an alternative way to use the library in a browser environment.

idex.html
```html
    <script type="importmap">
      {
        "imports": {
          "my-library": "https://unpkg.com/@romanenko.pavlo/my-library@0.0.1/dist/my-library.js"
        }
      }
    </script>
```

App.tsx
```typescript
import { greet } from 'my-library';
```

## Workspaces

- [`simple-library`](./packages/my-library): The TypeScript library workspace.
- [`static-site-node`](./packages/app-with-lib): The Node module-based static site workspace.
- [`static-site-http`](./packages/app-with-public-lib): The HTTP bundle-based static site workspace.


## Installation and Usage

1. Clone the repository:

   ```sh
   git clone https://github.com/RomanenkoStud/study-esc-modules.git
   ```

2. Navigate to the project directory:

    ```sh
    cd study-esc-modules
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. To start the development server:

    First site:
    
    ```sh
    npm run dev -w app-with-lib
    ```

    Second site:
    
    ```sh
    npm run dev -w app-with-public-lib
    ```

5. Open your web browser and navigate to http://localhost:5173 to access the page.

## Optional

To install library as seperate package run:

```sh
npm i @romanenko.pavlo/my-library
```
