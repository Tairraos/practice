let x = require("xtool.js"),
    args = x.getArgs(),
    fs = require("fs"),
    path = require("path"),
    questionData = require("./questionData");

if (args[1] !== "readme" && (!+args[2] || !["coding", "done"].includes(args[1]))) {
    console.log("\033[32m用法：");
    console.log("  npm run coding 题目编号");
    console.log("  npm run done 题目编号");
    console.log("  npm run readme\033[0m");
    process.exit();
}

if (args[1] === "readme") {
    let difficultyDict = ["", "容易", "中等", "困难"],
        findJSPatten = {
            find: "*.js",
            recursive: true
        },
        findPYPatten = {
            find: "*.py",
            recursive: true
        },
        doneListJS = x.readDir(path.resolve(__dirname, "..", "done"), findJSPatten).sort(),
        doneListPY = x.readDir(path.resolve(__dirname, "..", "done"), findPYPatten).sort(),
        titleDict = {},
        readme = [],
        list = [],
        paid = questionData.filter(item => item.isPaidOnly);

    questionData.forEach(item => titleDict[item.questionId] = item);

    readme.push("### Leetcode Javascript 已完成题目列表");
    readme.push(`完成度：${doneListJS.length}/${questionData.length-paid.length} (有${paid.length}题付费题未计算在总数内, 附[所有题目清单](LIST.md))`);
    doneListJS.forEach(
        item => {
            let qid = item.replace(/.*(\d\d\d\d)\.[\w-]+\.js/, "$1"),
                title = `${qid} - ${titleDict[+qid].titleCn}`,
                url = `done/${item}`,
                remote = `https://leetcode-cn.com/problems/${titleDict[+qid].titleSlug}/`,
                difficulty = difficultyDict[titleDict[+qid].level];
            readme.push(`- [${title}](${url}) 难度：${difficulty} [源](${remote})`);
        }
    );
    readme.push("");
    readme.push("### Leetcode Python 已完成题目列表");
    readme.push(`完成度：${doneListPY.length}/${questionData.length-paid.length} (有${paid.length}题付费题未计算在总数内, 附[所有题目清单](LIST.md))`);
    doneListPY.forEach(
        item => {
            let qid = item.replace(/.*(\d\d\d\d)\.[\w-]+\.py/, "$1"),
                title = `${qid} - ${titleDict[+qid].titleCn}`,
                url = `done/${item}`,
                remote = `https://leetcode-cn.com/problems/${titleDict[+qid].titleSlug}/`,
                difficulty = difficultyDict[titleDict[+qid].level];
            readme.push(`- [${title}](${url}) 难度：${difficulty} [源](${remote})`);
        }
    );

    x.saveFile(path.resolve(__dirname, "..", "README.md"), readme.join("\n"));

    list.push("### Leetcode 题目清单");
    list.push(`总题数：${questionData.length} / 未付费题：${questionData.length-paid.length} / 付费题：${paid.length}`);
    questionData.forEach(
        item => {
            let remote = `https://leetcode-cn.com/problems/${item.titleSlug}/`,
                difficulty = difficultyDict[item.level];
            list.push(`- [${item.qid} - ${item.titleCn || item.titleEn}](${remote}) 难度：${difficulty}${item.isPaidOnly?" / 付费题":""}`);
        }
    );
    x.saveFile(path.resolve(__dirname, "..", "LIST.md"), list.join("\n"));

    console.log(`已经生成新的Readme, 总题数: ${questionData.length-paid.length}, 已答: ${doneListJS.length}`);
    process.exit();
}

let id = +args[2],
    ext = args[3] || "js",
    ord = id - 1,
    dir = (("000" + (ord - ord % 100 + 1)).slice(-4) + "-" + ("000" + (ord - ord % 100 + 100)).slice(-4)),
    questionId = ("000" + id).slice(-4);

if (args[1] === "coding") {
    file = x.readDir(path.resolve(__dirname, "..", "template", dir), questionId + "*." + ext);
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
    file = x.readDir(path.resolve(__dirname, "..", "coding"), questionId + "*." + ext);
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