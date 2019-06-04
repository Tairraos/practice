/**
 * https://leetcode-cn.com/problems/remove-comments/
 * 0722.删除注释
 * 难度：中等
 * 
 * 给一个 C++ 程序，删除程序中的注释。这个程序source是一个数组，其中source[i]表示第i行源码。 这表示每行源码由"
 * 分隔。
 * 在 C++ 中有两种注释风格，行内注释和块注释。
 * 字符串// 表示行注释，表示//和其右侧的其余字符应该被忽略。
 * 字符串/* 表示一个块注释，它表示直到*\/的下一个（非重叠）出现的所有字符都应该被忽略。（阅读顺序为从左到右）非重叠是指，字符串/*\/并没有结束块注释，因为注释的结尾与开头相重叠。
 * 第一个有效注释优先于其他注释：如果字符串//出现在块注释中会被忽略。 同样，如果字符串/*出现在行或块注释中也会被忽略。
 * 如果一行在删除注释之后变为空字符串，那么不要输出该行。即，答案列表中的每个字符串都是非空的。
 * 样例中没有控制字符，单引号或双引号字符。比如，source = "string s = "/* Not a comment. *\/";" 不会出现在测试样例里。（此外，没有其他内容（如定义或宏）会干扰注释。）
 * 我们保证每一个块注释最终都会被闭合， 所以在行或块注释之外的/*总是开始新的注释。
 * 最后，隐式换行符可以通过块注释删除。 有关详细信息，请参阅下面的示例。
 * 从源代码中删除注释后，需要以相同的格式返回源代码。
 * 
 * 示例 1：
 * 输入：
 * source = ["/*Test program *\/", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing *\/", "a = b + c;", "}"]
 * 
 * 示例代码可以编排成这样：
 * /*Test program *\/
 * int main()
 * {
 *   // variable declaration
 * int a, b, c;
 * /* This is a test
 *    multiline
 *    comment for
 *    testing *\/
 * a = b + c;
 * }
 * 
 * 输出: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
 * 
 * 编排后：
 * int main()
 * {
 * 
 * int a, b, c;
 * a = b + c;
 * }
 * 
 * 解释：
 * 第 1 行和第 6-9 行的字符串 /* 表示块注释。第 4 行的字符串 // 表示行注释。
 * 
 * 示例 2：
 * 输入：
 * source = ["a/*comment", "line", "more_comment*\/b"]
 * 输出: ["ab"]
 * 解释: 原始的 source 字符串是 "a/*comment"
 * line"
 * more_comment*\/b", 其中我们用粗体显示了换行符。删除注释后，隐含的换行符被删除，留下字符串 "ab" 用换行符分隔成数组时就是 ["ab"].
 * 
 * 注意：
 *   - source的长度范围为[1, 100].
 *   - source[i]的长度范围为[0, 80].
 *   - 每个块注释都会被闭合。
 *   - 给定的源码中不会有单引号、双引号或其他控制字符。
 */

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
    let sp, mp; //single/multi line comment pointer
    source = source.join("\f") + "\f"; //用 "\f" 连接数组，代码里不可能出现 "\f"
    do {
        sp = source.indexOf("//"), mp = source.indexOf("/*");
        if (mp !== -1 && (mp < sp || sp === -1)) { //有 "/*", 且 "/*" 在前面 或者 没有 "//" 了 
            source = source.slice(0, mp) + source.slice(source.indexOf("*/", mp + 2) + 2); //处理掉第一对 "/* */"
        } else if (sp !== -1 && (sp < mp || mp === -1)) { //有 "//", 且 "//" 在前面 或者 没有 "/*" 了 
            source = source.slice(0, sp) + source.slice(source.indexOf("\f", sp + 2)); //处理掉 "//" 到 "\f" 之间的注释
        }
    } while (sp !== -1 || mp !== -1) // 直到 "//" 和 "/*" 都找不到了
    return source.replace(/\f+/g, "\f").replace(/^\f|\f$/g, "").split("\f"); //删除多余的空行，题目没有要求，但test case这样设计的
};

// Local test
let assert = require("assert");
console.time("leetcode");

assert.deepEqual(
    removeComments(["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"]),
    ["struct Node{","    ","    int size;","    int val;","};"], "case 9");

assert.deepEqual(
    removeComments(["a//*b//*c","blank","d//*e/*/f", ""]),
    ["a","blank","d"], "case 25");
    
assert.deepEqual(removeComments([
    "//remove remove remove", //remove whole line
    "//remove /* remove remove", //remove whole line
    "//remove /* remove */ remove", //remove whole line
    "//remove remove */ remove", //remove whole line
    "//*remove remove */ remove", //remove whole line
    "//*remove remove //*/ remove", //remove whole line
    "keep1 //remove ( remove )remove */ /* remove",
    "/* //remove remove remove */", //remove whole line
    "/* remove // remove remove */", //remove whole line
    "/* remove // remove */ keep2",
    "/* remove /* remove */ keep3",
    "keep4 /* remove // remove */ keep5",
    "keep6 /* remove // remove */",
    "-----",
    "keep7 /* remove",
    "remove",
    "remove */ keep8",
    "-----",
    "keep9 /* remove",
    "// remove */ keepA",
    "-----",
    "keepB // /* remove",
    "keepC // remove */ remove",
    "-----",
    "keepD /* // remove",
    "remove /* // */ keepE",
    "/* remove remove //*/ keepF"
]), [
    "keep1 ",
    " keep2",
    " keep3",
    "keep4  keep5",
    "keep6 ",
    "-----",
    "keep7  keep8",
    "-----",
    "keep9  keepA",
    "-----",
    "keepB ",
    "keepC ",
    "-----",
    "keepD  keepE",
    " keepF"
], "case self 1");

console.log("Good job! We have passed all test case.");
console.timeEnd("leetcode");