# eslint-import-resolver-typescript-repro app

This repo is intended to demonstrate [Issue 188 in eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript/issues/188), where it appears that tsconfig path aliases in a Yarn workspaces monorepo that resolve to a module with the type definitions not located at `index.d.ts`, are not handled as expected.

Applying the code in [PR #187](https://github.com/import-js/eslint-import-resolver-typescript/pull/187) appears to resolve the issue.

## Instructions

* run `yarn install`
* run `yarn run build-and-lint` to build `packages/bar` then `packages/foo`, and run ESlint in `packages/foo`
  * see linting error: ```4:28  error  Unable to resolve path to module '@foo/bar'  import/no-unresolved```
* rename `packages/bar/dist/baz/baz.d.ts` to `index.d.ts`
  * `mv packages/bar/dist/baz/baz.d.ts packages/bar/dist/baz/index.d.ts`
* *do not rebuild* as this will undo the rename
* run `yarn run lint` to run ESlint in `packages/foo`
  * see that the module can now be resolved
