# Changelog

## 0.2.7 (2026-04-21)

Full Changelog: [v0.2.6...v0.2.7](https://github.com/railsinfra/rails-typescript/compare/v0.2.6...v0.2.7)

### Chores

* **publish:** add CI debug log for npm trusted publisher ([ee50b1c](https://github.com/railsinfra/rails-typescript/commit/ee50b1c0e3a74fd89c532bd692c772b0efddaefa))

## 0.2.6 (2026-04-21)

Full Changelog: [v0.2.5...v0.2.6](https://github.com/railsinfra/rails-typescript/compare/v0.2.5...v0.2.6)

## 0.2.5 (2026-04-21)

Full Changelog: [v0.2.4...v0.2.5](https://github.com/railsinfra/rails-typescript/compare/v0.2.4...v0.2.5)

### Bug Fixes

* **publish:** enable npm trusted publisher OIDC flow ([44ad12b](https://github.com/railsinfra/rails-typescript/commit/44ad12b5b926f0d1bc68346a8f0afebabf0d47da))

## 0.2.4 (2026-04-21)

Full Changelog: [v0.2.3...v0.2.4](https://github.com/railsinfra/rails-typescript/compare/v0.2.3...v0.2.4)

### Bug Fixes

* **publish:** use npm CLI for trusted publisher auth ([f22d390](https://github.com/railsinfra/rails-typescript/commit/f22d3908e5c9650e468ec5225453f3527a9535db))

## 0.2.3 (2026-04-21)

Full Changelog: [v0.2.2...v0.2.3](https://github.com/railsinfra/rails-typescript/compare/v0.2.2...v0.2.3)

## 0.2.2 (2026-04-21)

Full Changelog: [v0.2.1...v0.2.2](https://github.com/railsinfra/rails-typescript/compare/v0.2.1...v0.2.2)

### Bug Fixes

* **build:** use package name for dist runtime checks ([896a5b7](https://github.com/railsinfra/rails-typescript/commit/896a5b7b0496741ecb42e58f119376636fa577e1))


### Chores

* rename npm package to @railsinfra/rails ([7f1c782](https://github.com/railsinfra/rails-typescript/commit/7f1c78236f404fa42bd618952b0b785e78253cf4))

## 0.2.1 (2026-04-21)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/railsinfra/rails-typescript/compare/v0.2.0...v0.2.1)

### Chores

* update SDK settings ([a79cfa7](https://github.com/railsinfra/rails-typescript/commit/a79cfa70f92cff9c4da99bbf331c7d37a2189375))

## 0.2.0 (2026-04-21)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/railsinfra/rails-typescript/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([05c3f05](https://github.com/railsinfra/rails-typescript/commit/05c3f054e403ad543154bf15ce7b379b7b2bedd1))
* **api:** manual updates ([a7f60be](https://github.com/railsinfra/rails-typescript/commit/a7f60bef824af18a904a45cafb717be5d1fcb267))
* **api:** manual updates ([ebaa178](https://github.com/railsinfra/rails-typescript/commit/ebaa178619050960322911ab37916cac0569735d))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([f941b37](https://github.com/railsinfra/rails-typescript/commit/f941b37edf20d92c1891470872d2812846447892))
* **client:** avoid removing abort listener too early ([89734a9](https://github.com/railsinfra/rails-typescript/commit/89734a9453a53ef480e9afe416e44fa7d42ed9db))
* **client:** preserve URL params already embedded in path ([e3180a1](https://github.com/railsinfra/rails-typescript/commit/e3180a1e1391f602a920f32d4bd86e2489a865f8))
* **docs/contributing:** correct pnpm link command ([5ab4a81](https://github.com/railsinfra/rails-typescript/commit/5ab4a81babd263d5f26417eb9eb18406748f01b5))


### Chores

* **ci:** skip lint on metadata-only changes ([e193832](https://github.com/railsinfra/rails-typescript/commit/e193832a6c3c78a5be9932c629ad7ed47e6cfdb9))
* **ci:** skip uploading artifacts on stainless-internal branches ([bf5b302](https://github.com/railsinfra/rails-typescript/commit/bf5b30293113f386ce49096a38ab59fedb7d72df))
* **ci:** upgrade `actions/github-script` ([f7e6671](https://github.com/railsinfra/rails-typescript/commit/f7e6671ac8a01e6ff26d1c758682eb0dbd70c376))
* **client:** do not parse responses with empty content-length ([5c23b82](https://github.com/railsinfra/rails-typescript/commit/5c23b826777c5f2399cfa23b1b759e4f565229a2))
* **client:** restructure abort controller binding ([e1ebaaf](https://github.com/railsinfra/rails-typescript/commit/e1ebaaf7e9ce56871ff701b0eb3ff0827ce2ad29))
* **internal/client:** fix form-urlencoded requests ([4e50c99](https://github.com/railsinfra/rails-typescript/commit/4e50c9938a95a9d1df9a696322dca744afcf37ec))
* **internal:** avoid type checking errors with ts-reset ([86ec619](https://github.com/railsinfra/rails-typescript/commit/86ec61909236f04d7b459576cf75781fc37738c0))
* **internal:** codegen related update ([a76abcd](https://github.com/railsinfra/rails-typescript/commit/a76abcd7fd73e8bb174a315b6b9640570e14799c))
* **internal:** codegen related update ([9d8248d](https://github.com/railsinfra/rails-typescript/commit/9d8248d1753a53cf889cce0cb9144ff00134fa5a))
* **internal:** codegen related update ([4586fbd](https://github.com/railsinfra/rails-typescript/commit/4586fbdca38607940bde9a1f913724d2cc20cbf1))
* **internal:** codegen related update ([4c62f6b](https://github.com/railsinfra/rails-typescript/commit/4c62f6be82d32b31670923ec9791e84479a8aa81))
* **internal:** move stringifyQuery implementation to internal function ([b11b912](https://github.com/railsinfra/rails-typescript/commit/b11b912f3ec79f30a3748ff8068408ab5eaad163))
* **internal:** remove mock server code ([019101d](https://github.com/railsinfra/rails-typescript/commit/019101df25bd509cdc59dedfdef5cd278d6b1be7))
* **internal:** update dependencies to address dependabot vulnerabilities ([0ed62a2](https://github.com/railsinfra/rails-typescript/commit/0ed62a2a312eebe6cbc1edbdf72305405e3d4394))
* **internal:** update gitignore ([55ba876](https://github.com/railsinfra/rails-typescript/commit/55ba87601aced85d8ed3ad943fe1cec1a86bf4bc))
* **internal:** upgrade pnpm ([73f9060](https://github.com/railsinfra/rails-typescript/commit/73f906043e7bcce7df8d9b9348418d3dda5347d7))
* **internal:** upgrade pnpm version ([8cc8b1c](https://github.com/railsinfra/rails-typescript/commit/8cc8b1caeece07384f3d083bcb0994c02022af19))
* update mock server docs ([776327c](https://github.com/railsinfra/rails-typescript/commit/776327c6e4ceff44cc25a90a72db4ed15ff4c3bd))
* update SDK settings ([3996d61](https://github.com/railsinfra/rails-typescript/commit/3996d61b22a552043adc4b99a7dc833fb38a99d6))

## 0.1.0 (2026-01-21)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/sibabale/rails-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** updated the sdk to be inline with rails features ([0c81504](https://github.com/sibabale/rails-typescript/commit/0c81504b37889bcbf5fdbb62e3902647a44d8828))


### Chores

* update SDK settings ([abaa4dd](https://github.com/sibabale/rails-typescript/commit/abaa4dd17b3190edc50e7d8cbce8865ddcb68448))
* update SDK settings ([31b72ce](https://github.com/sibabale/rails-typescript/commit/31b72ce15f5d819b4c27b99c53856826ea7a2fdd))
