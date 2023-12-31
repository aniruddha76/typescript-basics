## Getting Started

1. **Local Installation**: Install TypeScript locally using the following commands:

    ```bash
    npm install typescript
    npx tsc
    ```

    This will install TypeScript locally and execute the TypeScript compiler.

2. **TypeScript Configuration**: configure TypeScript using the following commands:

    ```bash
    tsc --init
    ```

    Once created, open the `tsconfig.json` file, locate the `rootDir` and `outDir` options, uncomment them, and set the `rootDir` to the path of your TypeScript source files. Specify the desired directory for compiled `.js` files by setting the `outDir` option accordingly.


3. **Compile TypeScript Files**: Automatically compile TypeScript files with the `tsc --watch` command:

    ```bash
    npx tsc --watch
    ```

    This command watches for changes in your TypeScript files and recompiles them automatically.

4. **Compile JavaScript Files**: To automatically compile JavaScript files generated by TypeScript, use the following command:

    ```bash
    npx node --watch foldername/filename.js
    ```

    Replace `foldername` and `filename.js` with the actual name of your folder and generated JavaScript file.
