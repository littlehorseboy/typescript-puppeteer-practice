/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const merge = require('merge');
const tsPreset = require('ts-jest/jest-preset');
const puppeteerPreset = require('jest-puppeteer/jest-preset.json');
/* eslint-enable */

module.exports = merge.recursive(tsPreset, puppeteerPreset);
