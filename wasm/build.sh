#!/bin/bash

if ! command -v wasm-pack &> /dev/null
then
    echo "wasm-pack could not be found, installing it..."
    cargo install wasm-pack
fi

cd /home/wyattgill/Github/personal

cd wasm

cargo clean

~/.cargo/bin/wasm-pack build --release --target web

echo "Build completed! The WASM package is located in the pkg/ directory."
