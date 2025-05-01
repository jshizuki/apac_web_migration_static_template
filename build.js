const ssi = require("ssi");
const path = require('path');
const shell = require('shelljs');
const glob = require("glob");
const [SRC_PATH, DEST_PATH] = [path.join(__dirname, "src"), path.join(__dirname, "dist")];
const matcher = "/**/*.html"

try {
  shell.rm('-rf', DEST_PATH);
  shell.mkdir('-p', DEST_PATH);
  shell.cp('-R', glob.sync(path.join(SRC_PATH, "*")), DEST_PATH);
  const includes = new ssi(SRC_PATH, DEST_PATH, matcher, true);
  includes.compile();
} catch (e) {
  console.error(e);
}
