function filter(elemResults) {
    let searchText = decodeURI(location.hash.substring(1).toLowerCase());

    const allResultsElem = elemResults.getElementsByClassName("result");
    for (result of allResultsElem) {
        let resultHead = result.getElementsByClassName("head")[0];
        // Title
        let resultTitle = resultHead.getElementsByClassName("title")[0];
        resultTitle = resultTitle.innerHTML.trim().toLowerCase();
        // Tags
        let resultTags = resultHead.getElementsByClassName("tags")[0];
        let resultTagList = resultTags.children;
        let tagList = [];
        for (tagElem of resultTagList) {
            tagList.push(tagElem.innerHTML.trim().toLowerCase());
        }

        // Create String list
        let resultStrings = [].concat([resultTitle]).concat(tagList);
        
        // Check if the resultStrings includes the search text
        let cnt = 0;
        for (let i = 0; i < resultStrings.length; i++) {
            if (searchText.indexOf(resultStrings[i]) != -1) {
                cnt++;
            }
        }

        // Toggle display
        if (cnt >= 1) {
            result.style.display = "block";
        } else {
            result.style.display = "none";
        }
    }
}

function setUrlHash(txt) {
    location.hash = txt;
}