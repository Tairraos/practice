/**
 * 这个代码不是在node里跑的。
 * 代码功能是把所有问题的描述和空方法名数据都抓回来，生成代码模板，可以在IDE里离线写代码
 * 访问问题列表页：https://leetcode-cn.com/problemset/all/  每页题数选择“全部”
 * 然后右键，检查，打开console，把代码帖在console里执行 getQuestionData()
 * 右键，save as，把console信息存成js文件即是数据
 */

/**
 * 该页面引入了jQuery，所以可以直接用jQuery从页面上获取问题数据
 */
function getQuestionData() {
    $(".reactable-data tr").each((i, j) => {
        //调用getQues方法把每道题目的titleSlug信息抓回来, graphql需要用titleSlug索引数据
        getQues($("a", $("td", j).eq(2)).attr("href").replace(/\/problems\//, ""));
    });
}

/**
 * 用Jquery以送graphql请求，把每一题的信息抓回来
 * @param {string} name - titleSlug
 */
function getQues(name) {
    $.ajax({
        url: "https://leetcode-cn.com/graphql",
        async: false,
        dataType: "json",
        type: "POST",
        data: {
            operationName: "questionData",
            query: "query questionData { question(titleSlug: \"" + name + "\") { questionFrontendId titleSlug translatedTitle translatedContent difficulty codeSnippets { lang code } }}",
        },
        beforeSend: function (jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", "xwGEGZjNDeo4AYrr6UmjytR9Ix7N2nUwInyNfPAON1ixbv04TWCD8DKnatfgqiws");
        },
        success: data => {
            var question = data.data.question,
                code = "N/A";
            //抓回来所有语言的题目，只保留JS的
            question.codeSnippets.forEach(i => {
                if (i.lang === "JavaScript") code = i.code;
            });
            question.codeSnippets = code;
            console.log(JSON.stringify(question) + ",");
        }
    });
}