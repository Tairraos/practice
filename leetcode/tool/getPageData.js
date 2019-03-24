let x = require('xtool.js');


// https://leetcode-cn.com/problemset/all/
// 从UI上获得对象数据
function getQuestionData() {
    $(".reactable-data tr").each((i, j) => {
        let line = $("td", j),
            link = $("a", line.eq(2)),
            no = line.eq(1).text(),
            title = link.text(),
            slug = link.attr("href").replace(/\/problems\//, ""),
            url = "https://leetcode-cn.com" + link.attr("href");
        console.log(`"${no}": ["${title}", "${url}", "${slug}"],`);
    });
}

function getQues(name) {
    $.ajax({
        url: "https://leetcode-cn.com/graphql",
        async: false,
        dataType: "json",
        type: "POST",
        data: {
            operationName: "questionData",
            query: "query questionData { question(titleSlug: \"" + name + "\") { questionId questionFrontendId titleSlug translatedTitle translatedContent difficulty codeSnippets { lang code } }}",
        },
        beforeSend: function (jqXHR, settings) {
            jqXHR.setRequestHeader("x-csrftoken", "xwGEGZjNDeo4AYrr6UmjytR9Ix7N2nUwInyNfPAON1ixbv04TWCD8DKnatfgqiws");
        },
        success: data => {
            var question = data.data.question,
                code = "N/A";
            question.codeSnippets.forEach(i => {
                if (i.lang === "JavaScript") code = i.code;
            });
            question.codeSnippets = code;
            console.log(JSON.stringify(question));
        }
    });
}

function getQuestionData() {
    $(".reactable-data tr").each((i, j) => {
        let line = $("td", j),
            link = $("a", line.eq(2)),
            slug = link.attr("href").replace(/\/problems\//, "")
        getQues(slug);
    });
}
