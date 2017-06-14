#!/usr/bin/env node

const program = require('commander')
const wodle = require('../src/index.js')

program
  .version('1.0.0')
  .arguments('<site_name>')
  .action((site_name) => {
    wodle.create(site_name)
  })
  .parse(process.argv)
