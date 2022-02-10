# App Layout | TypeScript | AntDesign | Styled Components | Absolute Imports using Next.js example

This is a really simple project that show the usage of Next.js with App Layout, TypeScript, AntDesign with less variables, Styled Components and Absolute Imports.

## 1. How to use it?

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## 2. Info

You will notice when structuring components i have a method of using index just for that default exports etc;

```txt
| Name <== Folder
| -- index.ts <== Default Export of Named Component
| -- Name.tsx <== Actual component
```

this avoids having to import doubled names etc; import Name from "src/components/Name/Name" and it also allows you to know which component you are working on looking at the file name in your prefered editor

## 3. The idea behind the example

This is an amalgamation of the 5 existing examples:

- [with-app-layout](https://github.com/zeit/next.js/tree/canary/examples/with-app-layout)
- [with-typescript](https://github.com/zeit/next.js/tree/canary/examples/with-typescript)
- [with-ant-design-less](https://github.com/zeit/next.js/tree/canary/examples/with-ant-design-less)
- [with-styled-components](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components)
- [with-absolute-imports](https://github.com/zeit/next.js/tree/canary/examples/with-absolute-imports)

#
