/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 3 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 4 用 node 执行 "3.generateTemplate.js" 生成模板
 * 5 生成完后把 "data.js" 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具会生成leetcode答题模板
 * 按题目编号每100题一个目录
 * 题目中间有不连号的情况，那些缺少的题目是付费题目
 */

let x = require("xtool.js"),
    data = require("./data");

data.forEach(item => {
    let numMod = !!item.questionId.match(/^\d+$/),
        id = numMod ? +item.questionId : item.questionId,
        fid = item.questionId,
        jscode = item.codeSnippets.js,
        pycode = item.codeSnippets.py,
        desc = item.translatedContent,
        dif = item.difficulty,
        title = fid + "." + item.translatedTitle,
        jsname = fid + "." + item.titleSlug + ".js",
        pyname = fid + "." + item.titleSlug + ".py",
        url = "https://leetcode-cn.com/problems/" + item.titleSlug + "/",
        ord = id - 1,
        dir = numMod ? (("000" + (ord - ord % 100 + 1)).slice(-4) + "-" + ("000" + (ord - ord % 100 + 100)).slice(-4)) : fid.replace(/ .*$/, ""),
        jsout = [],
        pyout = [];
    if (jscode !== "N/A") {
        var jsFuncName = jscode.match(/var (\w*) = function/)[1];
        jsout.push("/**");
        jsout.push(" * " + url);
        jsout.push(" * " + title);
        jsout.push(" * 难度：" + dif);
        jsout.push(" * ");
        jsout.push(desc.map(line => " * " + line).join("\n"));
        jsout.push(" */");
        jsout.push("");
        jsout.push(jscode);
        jsout.push("");
        jsout.push("// Local test");
        jsout.push("let assert = require(\"assert\");");
        jsout.push("console.time(\"Time cost\");");
        jsout.push("");
        jsout.push("assert.deepEqual(" + jsFuncName + "(\"param\"), \"expect\", \"Case 1\");");
        jsout.push("assert.deepEqual(" + jsFuncName + "(\"param\"), \"expect\", \"Case 2\");");
        jsout.push("");
        jsout.push("console.log(\"Good job! We have passed all test case.\");");
        jsout.push("console.timeEnd(\"Time cost\");");
        jsout.push("");
        x.saveFile("./leetcode/template/" + dir + "/" + jsname, jsout.join("\n"));
        console.log("\033[32m", jsname, "\033[0m已经生成。");
    }
    
    if (pycode !== "N/A") {
        var pyFuncName = pycode.match(/\n +def (\w*)\(self/)[1];

        pyout.push("# " + url);
        pyout.push("# " + title);
        pyout.push("# 难度：" + dif);
        pyout.push("# ");
        pyout.push(desc.map(line => "# " + line).join("\n"));
        pyout.push("");
        pyout.push(pycode + "\"put solution here\"");
        pyout.push("");
        pyout.push("");
        pyout.push("# Local test");
        pyout.push("if __name__ == '__main__':");
        pyout.push("    import time");
        pyout.push("    launch_start = time.time()");
        pyout.push("    unit = Solution()");
        pyout.push("");
        pyout.push("    assert unit." + pyFuncName + "('param') == 'expect', 'Case 1'");
        pyout.push("    assert unit." + pyFuncName + "('param') == 'expect', 'Case 2'");
        pyout.push("");
        pyout.push("    print('Good job! We have passed all test case.')");
        pyout.push("    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')");
        pyout.push("");
        x.saveFile("./leetcode/template/" + dir + "/" + pyname, pyout.join("\n"));
        console.log("\033[32m", pyname, "\033[0m已经生成。");
    }
});
