set dotenv-load

echo:
    echo $API_URL

serve-css:
    cd {{justfile_directory()}}/app-ui; pnpm dev:css

serve-dioxus-web-release:
    cd {{justfile_directory()}}/app-ui; dioxus serve --release --platform web

# watch sample:
#     watchexec -e rs -r -w ./{{sample}} just run {{sample}}

# serve:
#     npx browser-sync start -c bs-config.js

# wasmtime: (build "level0_wasmtime" "--target wasm32-wasi")
#     wasmtime target/wasm32-wasi/debug/level0_wasmtime.wasm

# run sample: (build sample "--target wasm32-wasi")
#     wagi -c modules.toml --env TEMPLATE_PATH="/templates" --log-dir ./logs

# run-native sample:
#     cd {{justfile_directory()}}/{{sample}}; export TEMPLATE_PATH=$(pwd)/templates; echo '{"foo": "bar"}' | cargo run

# build sample target:
#     cd {{justfile_directory()}}/{{sample}}; cargo build {{target}}

# push sample:
#     wasm-to-oci push target/wasm32-wasi/debug/{{sample}}.wasm rustlinzwasm.azurecr.io/wagi-{{sample}}-oci:latest