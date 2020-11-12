let x = require("xtool.js"),
    args = x.getArgs(),
    fs = require("fs"),
    path = require("path"),
    questionData = require("./questionData"),
    backupData = require("./backupData");

if (args[1] === undefined) {
    args[1] = "readme";
}

if (args[1] !== "readme" && (!args[2] || !["coding", "done"].includes(args[1]))) {
    console.log("\033[32m用法：");
    console.log("  npm run coding 题目编号 <js|py>");
    console.log("  npm run done 题目编号 <js|py>");
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
        tempList = [],
        paid = questionData.filter(item => item.isPaidOnly),
        jsQues = backupData.filter(item => item.codeSnippets.js !== "N/A"),
        pyQues = backupData.filter(item => item.codeSnippets.py !== "N/A"),
        quesNum = {
            total: questionData.length,
            paid: paid.length,
            js: jsQues.length,
            py: pyQues.length,
            doneJs: doneListJS.length,
            donePy: doneListPY.length
        };
    console.log("JS已完成：", doneListJS);
    console.log("PY已完成：", doneListPY);
    questionData.forEach(item => {
        item.questionId = item.questionId.match(/^\d+$/) ? ("000" + item.questionId).slice(-4) :
            item.questionId.replace(/(\d+|-)/g, " $1 ").replace(/ +/g, " ").replace(/^ | $| (?=[.-])|(?<=[.-]) /g, "");
        quesDict[item.questionId] = Object.assign(item, {
            codeSnippets: {}
        })
    });
    backupData.forEach(item => {
        if(quesDict[item.questionId]){
            quesDict[item.questionId].codeSnippets = item.codeSnippets;
        } else {
            console.log("有问题：",item.questionId+"."+item.titleSlug+".js");
        }
    });

    readme.push("### Leetcode Javascript 已完成题目列表");
    readme.push(`完成度：${quesNum.doneJs}/${quesNum.js} (付费题和非JS题未计算在内, 附[所有题目清单](LIST.md))`);
    doneListJS.forEach(
        item => {
            let qid = item.replace(/.*\/([^\.]+)\.[\w-]+\.js/, "$1"),
                title = `${qid} - ${quesDict[qid].titleCn}`,
                url = `done/${item}`.replace(/ /g, "%20"),
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
                url = `done/${item}`.replace(/ /g, "%20"),
                remote = `https://leetcode-cn.com/problems/${quesDict[qid].titleSlug}/`,
                difficulty = difficultyDict[quesDict[qid].level];
            readme.push(`- [${title}](${url}) 难度：${difficulty} [源](${remote})`);
        }
    );

    x.saveFile(path.resolve(__dirname, "..", "README.md"), readme.join("\n"));

    questionData.forEach(
        item => {
            let qid = item.questionId,
                remote = `https://leetcode-cn.com/problems/${item.titleSlug}/`,
                difficulty = difficultyDict[item.level],
                paidStr = item.isPaidOnly ? " / 付费题" : "",
                jsDtr = quesDict[qid].codeSnippets.js !== "N/A" ? " / JS题" : "",
                pyStr = quesDict[qid].codeSnippets.py !== "N/A" ? " / PY题" : "";
            list.push(`- [${item.questionId} - ${item.titleCn || item.titleEn}](${remote}) 难度：${difficulty}${paidStr}${jsDtr}${pyStr}`);
        }
    );
    list.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    list.unshift(`总题数：${quesNum.total} / 免费题：${quesNum.total - quesNum.paid}（其中JS题 ${quesNum.js} 题，PY题 ${quesNum.py} 题） / 付费题：${paid.length}`);
    list.unshift("### Leetcode 题目清单");
    x.saveFile(path.resolve(__dirname, "..", "LIST.md"), list.join("\n"));

    console.log(`已经生成新的Readme, JS完成度：${quesNum.doneJs}/${quesNum.js}，PY完成度：${quesNum.donePy}/${quesNum.py}`);
    process.exit();
}

let ext = args[3] || "*",
    numMod = !!args[2].match(/^\d+$/),
    id = numMod ? +args[2] : args[2],
    ord = id - 1,
    dir = numMod ? (("000" + (ord - ord % 100 + 1)).slice(-4) + "-" + ("000" + (ord - ord % 100 + 100)).slice(-4)) : id.replace(/ .*$/, ""),
    questionId = numMod ? ("000" + id).slice(-4) : id;

if (args[1] === "coding") {
    file = x.readDir(path.resolve(__dirname, "..", "template", dir), questionId + "*." + ext);
    if (file.length) {
        file.forEach(filename => {
            fs.renameSync(
                path.resolve(__dirname, "..", "template", dir, filename),
                path.resolve(__dirname, "..", "coding", filename)
            );
        });
        console.log("\033[32m编号为 " + questionId + " 的模板已经移到到 coding 目录。\033[0m");
    } else {
        console.log("\033[31m编号为 " + questionId + " 的模板不存在。\033[0m");
    }
} else if (args[1] === "done") {
    file = x.readDir(path.resolve(__dirname, "..", "coding"), questionId + "*." + ext);
    if (file.length) {
        file.forEach(filename => {
            fs.renameSync(
                path.resolve(__dirname, "..", "coding", filename),
                path.resolve(__dirname, "..", "done", dir, filename)
            );
        });
        console.log("\033[32m编号为 " + questionId + " 的模板已经移到到 done 目录。\033[0m");
    } else {
        console.log("\033[31m编号为 " + questionId + " 的模板不存在。\033[0m");
    }
}
