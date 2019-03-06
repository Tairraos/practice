#!/usr/bin/env checkio --domain=js run the-ship-teams

// https://js.checkio.org/mission/the-ship-teams/

// 你好, 冒险家! 你现在开始要进行一次危险又非常令人兴奋的旅程。
// 在这期间, 你将不得不解决许多谜语, 破解几个陷阱, 并超越你的追踪者..。
// 而这一切, 唯一的目的就是寻找宇宙中最有价值的文物之一, 无限能量的来源--超立方体。

// 超级立方体位于城堡的中心, 由几个世纪前古怪的埃舍勋爵建造。这个人在岛上建造了他的城堡, 因为他很欣赏孤独。
// 自从他去世 (在非常神秘的情况下), 他的仆人回到欧洲大陆告诉世界发生在那里的奇怪的事情和现象, 
// 许多研究探险和财富猎人团体去了那里。但他们都没有回来.....。

// 祝你好运, 伙计!也许你一定会比别人有更多的运气。

// 所以, 东西都收拾好了, 设备都收拾好了, 该上路了。目前你在欧洲大陆, 站在港口。考虑到你在岛上可能面临的危险, 
// 你已经决定不单独去那里, 而是招募一个团队, 装备两艘船。你唯一的目标就是抓住一个立方体, 你希望找到的其他珍宝将被认为是球队的报酬。

// 而第一项任务很简单--你必须把所有船员分成两个小组 (为两艘船)。
// 你必须按照以下规则把你所有的船员分成两队: 40岁以上或20岁以下的船员应该在第一艘船上, 其他的都应该在第二艘船上。
// 它将帮助年轻的水手获得老同事的经验。输入数据将是字典, 其中的钥匙将是水手的姓氏, 值将是他们的年龄。船员组成后, 你应该按照每个姓氏列表中的字母顺序对所有的水手进行分类。

// 输入: 字典与水手和他们的年龄。

// 输出: 包含2个团队的列表列表。

// END_DESC

"use strict";

function twoTeams(sailors) {
    let members = Object.keys(sailors).sort();
    return [
        members.filter(p => sailors[p] > 40 || sailors[p] < 20),
        members.filter(p => sailors[p] <= 40 && sailors[p] >= 20)
    ];
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(twoTeams({
        'Smith': 34,
        'Wesson': 22,
        'Coleman': 45,
        'Abrahams': 19
    }))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.deepEqual(twoTeams({
        'Smith': 34,
        'Wesson': 22,
        'Coleman': 45,
        'Abrahams': 19
    }), [
        ['Abrahams', 'Coleman'],
        ['Smith', 'Wesson']
    ])

    assert.deepEqual(twoTeams({
        'Fernandes': 18,
        'Johnson': 22,
        'Kale': 41,
        'McCortney': 54
    }), [
        ['Fernandes', 'Kale', 'McCortney'],
        ['Johnson']
    ])

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}