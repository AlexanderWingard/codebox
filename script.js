var preTags = document.getElementsByTagName("pre");

function count_indent(string) {
    for(var i = 0; i < string.length; i++) {
        if(string[i] != " ") {
            return i ;
        }
    }
    return string.length;
}

function blockify(preTag) {
    var lines = preTag.innerHTML.split('\n');
    lines.forEach(function(line) {
        var indent = count_indent(line);
        var div = document.createElement("code");
        if(indent > 0) {
            div.style.marginLeft = (indent) + "ex";
        }
        var trimmed = line.trim();
        if(trimmed == "") {
            trimmed = "&nbsp;";
        }
        div.innerHTML = trimmed;
        document.body.appendChild(div);
    });
    document.body.removeChild(preTag);
    hljs.highlightBlock(document.body);
    //preTag.style.display = "none";
}

blockify(preTags[0]);

