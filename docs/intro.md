---
sidebar_position: 1
---

# Node

Gem Node a fresh FRAME-based Web3 network, ready for hacking :rocket:

## Getting Started

### Rust Setup

First, complete the [basic Rust setup instructions](https://www.rust-lang.org/learn/get-started).

### Run

Use Rust's native `cargo` command to build and launch the Gem node:

```sh
cargo run --release -- --dev --tmp
```

### Build

The `cargo run` command will perform an initial build. Use the following command to build the node
without launching it:

```sh
cargo build --release
```

### Embedded Docs

Once the project has been built, the following command can be used to explore all parameters and
subcommands:

```sh
./target/release/gem -h
```

## Run

The provided `cargo run` command will launch a Gem node and its state will be discarded after
you terminate the process. After the project has been built, there are other ways to launch the
node.

### Single-Node Development Chain

This command will start the single-node development chain with persistent state:

```bash
./target/release/gem --dev
```

Purge the development chain's state:

```bash
./target/release/gem purge-chain --dev
```

Start the development chain with detailed logging:

```bash
RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/gem -lruntime=debug --dev
```

### Connect with Polkadot-JS Apps Front-end

Once the Gem node is running locally, you can connect it with **Polkadot-JS Apps** front-end
to interact with your chain. [Click here](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944) connecting the Apps to your local Gem node.
