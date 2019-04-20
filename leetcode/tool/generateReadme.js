let x = require("xtool.js"),
    path = require("path"),
    list = [],
    out = [],
    pointer = 0;

x.readDir(path.resolve(__dirname, "..", "done"), {
    find: "*.js",
    recursive: true
}).forEach(item => list[+item.replace(/.*(\d\d\d\d)\..*/, "$1")] = "done/" + item);
out.push("### Leetcode 已完成题目列表");
out.push("|      |`xxx0`|`xxx1`|`xxx2`|`xxx3`|`xxx4`|`xxx5`|`xxx6`|`xxx7`|`xxx8`|`xxx9`|");
out.push("|------|------|------|------|------|------|------|------|------|------|------|");

var tmpid, tmpLine = "";
while (pointer < list.length) {
    tmpid = ("000" + pointer).slice(-4);
    if (!(pointer % 10)) {
        tmpLine = "|`" + tmpid.slice(0, 3) + "x`";
    }
    if (list[pointer]) {
        tmpLine += "|[" + tmpid + "](" + list[pointer] + ")";
    } else {
        tmpLine += "| ";
    }
    pointer += 1;
    if (!(pointer % 10) || pointer === list.length) {
        tmpLine += "|";
        out.push(tmpLine);
    }
}

x.saveFile(path.resolve(__dirname, "..", "README.md"), out.join("\n"));

console.log()