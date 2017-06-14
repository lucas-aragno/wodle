const path = require('path')
const fs = require('fs')
const copydir = require('copy-dir')
const handlebars = require('handlebars')

const removeSlash = (appPath) => {
  if (appPath.charAt(appPath.length - 1) === '/') {
    return appPath.substring(0, appPath.length - 1)
  }
  return appPath
}

const applyTemplate = (inputPath, outputPath, data) => {
  const templateData = data || {}
  const text = fs.readFileSync(inputPath, 'utf8')
  const template = handlebars.compile(text)
  const result = template(templateData)
  fs.writeFile(outputPath, result, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log(`${outputPath} created!`)
  })
}

const copyFolder = (inputFolder, outputPath) => {
  copydir(inputFolder, outputPath, (err) => {
    if (err) {
      return console.error(err)
    }
    console.log(`${outputPath} created!`)
  })
}

const create = (appPath) => {
  const appName = removeSlash(appPath)

  fs.mkdirSync(appName)
  applyTemplate(`${__dirname}/templates/.gitignore-template`, `${appName}/.gitignore`)
  applyTemplate(`${__dirname}/templates/postcss.config.js`, `${appName}/postcss.config.js`)
  applyTemplate(`${__dirname}/templates/next.config.js`, `${appName}/next.config.js`)
  applyTemplate(`${__dirname}/templates/package.json`, `${appName}/package.json`, {'appName': appName})

  copyFolder(`${__dirname}/templates/pages/`, `${appName}/pages`)
  copyFolder(`${__dirname}/templates/components`, `${appName}/components`)
  copyFolder(`${__dirname}/templates/styles`, `${appName}/styles`)
  copyFolder(`${__dirname}/templates/content`, `${appName}/content`)
  copyFolder(`${__dirname}/templates/static`, `${appName}/static`)
  console.log(`Project created at ${path.resolve(appPath)}`)
}

module.exports = {
  create
}
