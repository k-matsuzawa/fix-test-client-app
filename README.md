# fix-test-client-app

## development

### using application

- corepack (package manager manager for pnpm)
- rustc
- perl (for rust's openssl-sys build)
  - or using git bash for windows

### dev build and debug

```sh
pnpm tauri:dev
```

### release build

```sh
pnpm tauri:build
```

### format, lint

```sh
cargo fmt
pnpm format
pnpm lint
```
