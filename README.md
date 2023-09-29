# Introducción al Testing Automatizado

Este repositorio muestra un ejemplo básico del uso de herramientas automáticas para ejecutar pruebas estáticas y dinámicas en un proyecto.

## Uso del repositorio

Este repositorio utiliza [NodeJS](https://nodejs.org/) para ejecutar el código JavaScript en forma local, [npm](https://www.npmjs.com) para gestionar las dependencias y [pre-commit](https://pre-commit.com) para las validaciones de formato. Para trabajar con el mismo usted debería tener instalado:

1. NodeJS (https://nodejs.org/es/download)
2. pre-commit (https://pre-commit.com/#install)

Después de clonar el repositorio usted debería ejecutar el siguiente comando:

```
npm install
```

Para generar la documentación del proyecto se utiliza el siguiente comando:

```
make doc
```

## Creación del repositorio

Para la creación del repositorio

1. Creación del proyecto JavaScript

   ```
   npm init
   ```

1. Creación del archivo `.gitignore` usando con la herramienta de [Toptal](https://www.toptal.com/developers/gitignore)

1. Instalación de [Prettier](https://prettier.io/docs/en/install), la herramienta para verificación de formato

   ```
   npm install --save-dev --save-exact prettier
   node --eval "fs.writeFileSync('.prettierrc','{}\n')"
   ```

1. Ajuste de la configuración de Prettier usando los archivos `.prettierrc` y `.prettierignore`

1. Verificación del funcionamiento de Prettier

   ```
    npx prettier . --check
   ```

1. Instalación y configuración del [plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) para [Visual Studio Code](https://code.visualstudio.com)

1. Instalación de [ESLint](https://eslint.org/docs/latest/use/getting-started), la herramienta para verificación estática del código JavaScript, junto con los plugins para integrar la revisión de formato con [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier), la [importación de dependencias](https://www.npmjs.com/package/eslint-plugin-import) y la inclusión de la cabecera con la [licencia](https://www.npmjs.com/package/eslint-plugin-license-header)

   ```
   npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-import eslint-plugin-license-header
   ```

1. Creación de la plantilla con la cabecera de licencia en el archivo `resources/license.js`

1. Ajuste de la configuración de ESLint usando los archivos `.eslintrc` y `.eslintignore`

1. Instalación y configuración del [plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) para [Visual Studio Code](https://code.visualstudio.com)

1. Instalación [mocha](https://mochajs.org), [chai](https://www.chaijs.com), [sinon](https://sinonjs.org), [proxyquire](https://www.npmjs.com/package/proxyquire) y [nyc](https://www.npmjs.com/package/nyc), las herramientas para automatizar las pruebas

   ```
   npm install --save-dev mocha chai nyc sinon proxyquire
   ```

1. Ajustes en el archivo `package.json``

   ```
   "scripts": {
      "test": "mocha --reporter spec",
      "coverage": "nyc --reporter=html mocha"
   },
   ```

1. Creación del archivo `pre-commit-config.yaml`

1. Instalación de pre-commit como hook en el repositorio git
   ```
   pre-commit install
   ```

## Bibliografia

[Chai Assertion Library - Official Site](https://www.chaijs.com)

[Getting Started with Node.js and Mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)

[Aprende a hacer Testing en Node.js: Mocha, Chai, Sinon, Proxyquire... WTF](https://er1x.github.io/2015/06/testing-nodejs/)

[A quick and complete guide to Mocha testing](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/)

[Sinon JS Tutorial: A Beginner’s Guide to Mocking](https://www.testim.io/blog/sinon-js-tutorial/)
