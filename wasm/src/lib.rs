use wasm_bindgen::prelude::*;

// This function will be accessible from JavaScript
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
