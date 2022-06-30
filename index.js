// code your solution here

function saturdayFun(activity){
    return `This Saturday, I want to ${activity || 'roller-skate'}!`;
}

function mondayWork(work){
    return `This Monday, I will ${work || "go to the office"}.`;
}

function wrapAdjective(wrap = "*"){
    return function(adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`;
    }
}
