function filter(elemResults) {
    let text = location.hash.substring(1).toLowerCase();
    let adjustedTxtList = text.split("%20");

    const allResultsElem = elemResults.getElementsByClassName("result");
    for (result of allResultsElem) {
        let resultHead = result.getElementsByClassName("head")[0];
        let resultDesc = result.getElementsByClassName("desc")[0];
        
        let resultHeadTitle = resultHead.getElementsByClassName("title")[0];
        let resultHeadTags = resultHead.getElementsByClassName("tags")[0];
        let resultHeadTagList = resultHeadTags.children;
        let tagList = [];
        for (tagElem of resultHeadTagList) {
            tagList.push(tagElem.innerHTML);
        }
        // String list
        let resultStrings =
            resultHeadTitle.innerHTML.replace(/(\r\n|\n|\r)/gm, "").toLowerCase() +
            tagList.toString().replace(",", " ").replace(/(\r\n|\n|\r)/gm, "").toLowerCase() +
            resultDesc.innerHTML.replace(/(\r\n|\n|\r)/gm, "").toLowerCase();
        // Adjust 
        // let resultStringList = resultStrings.split(" ").filter(e => e !== "");

        // Check include
        let includePt = adjustedTxtList.length;
        for (let i=0; i < adjustedTxtList.length; i++) {
            if (resultStrings.includes(adjustedTxtList[i])) {
                includePt += 1;
            } else {
                includePt -= 1;
            }
        }
        // Toggle display
        if (includePt > (adjustedTxtList.length / 2)) {
            result.style.display = "block";
        } else {
            result.style.display = "none";
        }
    }
}

function setUrlHash(txt) {
    location.hash = txt;
}