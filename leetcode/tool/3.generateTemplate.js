/**
 * 1 用 node 执行 "1.getOperateList.js"，抓回缺失的模板slugTitle列表，将会更新 "2.getPageData.js"
 * 2 把 "2.getPageData.js" 代码帖到 https://leetcode-cn.com/problemset/all/ 页面的 console 里跑
 * 3 从 console 得到输出后，把它更新到 "data.js" 和 "questionData.js" 里
 * 4 用 node 执行 "3.generateTemplate.js" 生成模板
 * 5 用 node 执行 "4.mergeData" 合并数据文件
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
        dir = numMod ? (("000" + (ord - ord % 100 + 1)).slice(-4) + "-" + ("000" + (ord - ord % 100 + 100)).slice(-4)) : id.replace(/ .*$/, ""),
        jsout = [],
        pyout = [];
    if (jscode !== "N/A") {
        var jsFuncName = jscode.match(/var (\w*) += +function/)[1];
        jsout.push("/**");
        jsout.push(" * " + url);
        jsout.push(" * " + title);
        jsout.push(" * 难度：" + dif);
        jsout.push(" * ");
        jsout.push(desc.map(line => " * " + line).join("\n"));
        jsout.push(" */");
        jsout.push("");
        jscode = jscode.replace(
            "* function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */",
            "*/\nfunction ListNode(val) {\n     this.val = val;\n     this.next = null;\n }\n"
        );
        jsout.push(jscode);
        jsout.push("");
        jsout.push("// Local test");
        jsout.push("let assert = require(\"assert\");");
        jsout.push("console.time(\"Time cost\");");
        jsout.push("");
        if (jscode.match(/function ListNode/)) {
            jsout.push("// Tool: Linked list to Array & Array to Linked list");
            jsout.push("let toArray = a => a ? a.next ? [a.val].concat(toArray(a.next)) : [a.val] : [],");
            jsout.push("    toLinked = a => a.length ? ({val: +a[0], next: a.slice(1).length ? toLinked(a.slice(1)) : null}) : null;");
            jsout.push("");
            jsout.push("assert.deepEqual(toArray(" + jsFuncName + "(toLinked([1,2,3]))), [1,2,3], \"Case 1\");");
            jsout.push("assert.deepEqual(toArray(" + jsFuncName + "(toLinked([1,2,3]))), [1,2,3], \"Case 2\");");
        } else {
            jsout.push("assert.deepEqual(" + jsFuncName + "(\"param\"), \"expect\", \"Case 1\");");
            jsout.push("assert.deepEqual(" + jsFuncName + "(\"param\"), \"expect\", \"Case 2\");");
        }
        jsout.push("");
        jsout.push("console.log(\"Good job! We have passed all test case.\");");
        jsout.push("console.timeEnd(\"Time cost\");");
        jsout.push("");
        x.saveFile("./leetcode/template/" + dir + "/" + jsname, jsout.join("\n"));
        console.log("\033[32m", jsname, "\033[0m已经生成。");
    }

    if (pycode !== "N/A") {
        var pyFuncName = pycode.match(/\n +def (\w*) *\(self/)[1];

        pyout.push("# " + url);
        pyout.push("# " + title);
        pyout.push("# 难度：" + dif);
        pyout.push("# ");
        pyout.push(desc.map(line => "# " + line).join("\n"));
        pyout.push("");
        pyout.push("");
        if (pycode.match(/-> List|: List/)) {
            pyout.push("from typing import *");
            pyout.push("");
            pyout.push("");
        }

        pycode = pycode.replace(
            "# class ListNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.next = None",
            "class ListNode:\n    def __init__(self, x, y = None):\n        self.val = x\n        self.next = y"
        );
        pycode = pycode.replace(/#     /g, "    ").replace(/# class/g, "class");
        pyout.push(pycode + (pycode.match(/    $/) ? "" : "\n        ") + "\"put solution here\"");
        pyout.push("");
        pyout.push("");
        pyout.push("# Local test");
        pyout.push("if __name__ == '__main__':");
        pyout.push("    import time");
        pyout.push("    launch_start = time.time()");
        pyout.push("    unit = Solution()");
        pyout.push("");
        if (pycode.match(/class ListNode/)) {
            pyout.push("    def toArray(a: ListNode): return ([a.val] + toArray(a.next) if a.next else [a.val]) if a else []");
            pyout.push("    def toLinked(a): return ListNode(a[0], toLinked(a[1:]) if len(a[1:]) else None) if len(a) else None");
            pyout.push("");
            pyout.push("    assert toArray(unit." + pyFuncName + "(toLinked([1,2,3]))) == [1,2,3], 'Case 1'");
            pyout.push("    assert toArray(unit." + pyFuncName + "(toLinked([1,2,3]))) == [1,2,3], 'Case 2'");
        } else {
            pyout.push("    assert unit." + pyFuncName + "('param') == 'expect', 'Case 1'");
            pyout.push("    assert unit." + pyFuncName + "('param') == 'expect', 'Case 2'");
        }
        pyout.push("");
        pyout.push("    print('Good job! We have passed all test case.')");
        pyout.push("    print('Time cast: ' + str(int((time.time() - launch_start) * 1000000)/1000) + 'ms')");
        pyout.push("");
        x.saveFile("./leetcode/template/" + dir + "/" + pyname, pyout.join("\n"));
        console.log("\033[32m", pyname, "\033[0m已经生成。");
    }
});
