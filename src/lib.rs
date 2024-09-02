#![no_std]

extern crate alloc;
use alloc::{
    string::{String, ToString},
    vec::Vec,
};

use unicode_segmentation::UnicodeSegmentation;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn collect(val: &str) -> Vec<String> {
    val.graphemes(true).map(|s| s.to_string()).collect()
}
