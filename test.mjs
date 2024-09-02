import { collect } from './pkg/unicode_segmentation_wasm.js';

console.log(collect('܏ '));
console.log(collect(' ᯪ'));
console.log(collect('‍☀'));
console.log(collect('👩‍🦰👩‍👩‍👦‍👦🏳️‍🌈'));
