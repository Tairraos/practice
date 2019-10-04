let x = require("xtool.js"),
    args = x.getArgs(),
    fs = require("fs"),
    path = require("path"),
    questionData = require("./questionData"),
    oldData = require("./oldData");

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
        quesDict = {},
        readme = [],
        list = [],
        paid = questionData.filter(item => item.isPaidOnly),
        jsQues = oldData.filter(item => item.codeSnippets.js !== "N/A"),
        pyQues = oldData.filter(item => item.codeSnippets.py !== "N/A"),
        quesNum = {
            total: questionData.length,
            paid: paid.length,
            js: jsQues.length,
            py: pyQues.length,
            doneJs: doneListJS.length,
            donePy: doneListPY.length
        };
    console.log(doneListJS);
    console.log(doneListPY);
    questionData.forEach(item => quesDict[item.questionId.length < 4 ? ("0000" + item.questionId).slice(-4) : item.questionId] = Object.assign(item, {
        codeSnippets: {}
    }));
    oldData.forEach(item => quesDict[item.questionId].codeSnippets = item.codeSnippets);

    readme.push("### Leetcode Javascript 已完成题目列表");
    readme.push(`完成度：${quesNum.doneJs}/${quesNum.js} (付费题和非JS题未计算在内, 附[所有题目清单](LIST.md))`);
    doneListJS.forEach(
        item => {
            let qid = item.replace(/.*\/([^\.]+)\.[\w-]+\.js/, "$1"),
                title = `${qid} - ${quesDict[qid].titleCn}`,
                url = `done/${item}`,
                remote = `https://leetcode-cn.com/problems/${quesDict[qid].titleSlug}/`,
                difficulty = difficultyDict[quesDict[qid].level];
            readme.push(`- [${title}](${url}) 难度：${difficulty} [源](${remote})`);
        }
    );
    readme.push("");
    readme.push("### Leetcode Python 已完成题目列表");
    readme.push(`完成度：${quesNum.donePy}/${quesNum.py} (付费题和非JS题未计算在内, 附[所有题目清单](LIST.md))`);
    doneListPY.forEach(
        item => {
            let qid = item.replace(/.*\/([^\.]+)\.[\w-]+\.py/, "$1"),
                title = `${qid} - ${quesDict[qid].titleCn}`,
                url = `done/${item}`,
                remote = `https://leetcode-cn.com/problems/${quesDict[qid].titleSlug}/`,
                difficulty = difficultyDict[quesDict[qid].level];
            readme.push(`- [${title}](${url}) 难度：${difficulty} [源](${remote})`);
        }
    );

    x.saveFile(path.resolve(__dirname, "..", "README.md"), readme.join("\n"));

    list.push("### Leetcode 题目清单");
    list.push(`总题数：${quesNum.total} / 免费题：${quesNum.total - quesNum.paid}（其中JS题 ${quesNum.js} 题，PY题 ${quesNum.py} 题） / 付费题：${paid.length}`);
    questionData.forEach(
        item => {
            let qid = item.questionId.length < 4 ? ("0000" + item.questionId).slice(-4) : item.questionId,
                remote = `https://leetcode-cn.com/problems/${item.titleSlug}/`,
                difficulty = difficultyDict[item.level],
                paidStr = item.isPaidOnly ? " / 付费题" : "",
                jsDtr = quesDict[qid].codeSnippets.js !== "N/A" ? " / JS题" : "",
                pyStr = quesDict[qid].codeSnippets.py !== "N/A" ? " / PY题" : "";
            list.push(`- [${item.questionId} - ${item.titleCn || item.titleEn}](${remote}) 难度：${difficulty}${paidStr}${jsDtr}${pyStr}`);
        }
    );
    x.saveFile(path.resolve(__dirname, "..", "LIST.md"), list.join("\n"));

    console.log(`已经生成新的Readme, JS完成度：${quesNum.doneJs}/${quesNum.js}，PY完成度：${quesNum.donePy}/${quesNum.py}`);
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
