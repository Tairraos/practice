let x = require("xtool.js"),
    fs = require("fs"),
    path = require("path"),
    args = x.getArgs();

if (!+args[2] || !["coding", "done"].includes(args[1])) {
    console.log("\033[32m用法：npm run <coding|done> <#题目编号>\033[0m");
    process.exit();
}

let id = +args[2],
    ord = id - 1,
    dir = (("000" + (ord - ord % 100 + 1)).slice(-4) + "-" + ("000" + (ord - ord % 100 + 100)).slice(-4)),
    questionId = ("000" + id).slice(-4);

if (args[1] === "coding") {
    file = x.readDir(path.resolve(__dirname, "..", "template", dir), questionId + "*.js");
    if (file.length) {
        fs.renameSync(
            path.resolve(__dirname, "..", "template", dir, file[0]),
            path.resolve(__dirname, "..", "coding", file[0])
        );
        console.log("\033[32m编号为 " + questionId + " 的模板已经移到到 coding 目录。\033[0m");
    } else {
        console.log("\033[31m编号为 " + questionId + " 的模板不存在。\033[0m");
    }
} else if (args[1] === "done") {
    file = x.readDir(path.resolve(__dirname, "..", "coding"), questionId + "*.js");
    if (file.length) {
        fs.renameSync(
            path.resolve(__dirname, "..", "coding", file[0]),
            path.resolve(__dirname, "..", "done", dir, file[0])
        );
        console.log("\033[32m编号为 " + questionId + " 的模板已经移到到 done 目录。\033[0m");
    } else {
        console.log("\033[31m编号为 " + questionId + " 的模板不存在。\033[0m");
    }
}