/**
 * 先在 node 里执行 getOperateList.js，抓回缺失的模板slugTitle列表，把列表替换第 11 行的 operateList
 * 然后把所有代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑，因为有 CSRF 校验，必须在这个页面跑
 * 如果有错误，需要更新本代码里的 x-csrftoken，可以从页面的 cookie 里看到有效的 token
 * 得到输出后，把它帖到 data.js 里，用 node 执行 getPageData.js 生成模板
 * 生成完后把 data.js 里的数据移动到 oldData.js 里备份。
 * 
 * 本工具会生成leetcode答题模板
 * 按题目编号每100题一个目录
 * 题目中间有不连号的情况，那些缺少的题目是付费题目
 */

let x = require("xtool.js"),
    data = require("./data");

data.forEach(item => {
    var id = +item.questionId,
        fid = item.questionId,
        jscode = item.codeSnippets,
        desc = item.translatedContent,
        dif = item.difficulty,
        title = fid + "." + item.translatedTitle,
        name = fid + "." + item.titleSlug + ".js",
        url = "https://leetcode-cn.com/problems/" + item.titleSlug + "/",
        ord = id - 1,
        dir = (("000" + (ord - ord % 100 + 1)).slice(-4) + "-" + ("000" + (ord - ord % 100 + 100)).slice(-4)),
        out = [];

    out.push("/**");
    out.push(" * " + url);
    out.push(" * " + title);
    out.push(" * 难度：" + dif);
    out.push(" * ");
    out.push(desc.map(line => " * " + line).join("\n"));
    out.push(" */");

    if (jscode !== "N/A") {
        var func = jscode.match(/var (.*) = function/)[1];
        out.push("");
        out.push(jscode);
        out.push("");
        out.push("// Local test");
        out.push("let assert = require(\"assert\");");
        out.push("console.time(\"leetcode\");");
        out.push("");
        out.push("assert.deepEqual(" + func + "(\"参数\"), \"期望结果\");");
        out.push("assert.deepEqual(" + func + "(\"参数\"), \"期望结果\");");
        out.push("");
        out.push("console.log(\"哈哈哈哈，所有Case都通过了\");");
        out.push("console.timeEnd(\"leetcode\");");
        out.push("");
    }

    x.saveFile("./leetcode/template/" + dir + "/" + name, out.join("\n"));
});