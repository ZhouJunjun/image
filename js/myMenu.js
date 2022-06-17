/*
<li data-group="inline-style" class="has-btn-submenu">
    <style>
        .color_div {
            width: 20px;
            height: 20px;
            margin-top: 10px;
            margin-right: 5px;
            display: inline-block;
        }
    </style>
    <span class="menu-item-container">
        <a onclick="javascript:setColor('red');">
            <div class="color_div" style="background-color: red"></div>
        </a>
        <a onclick="javascript:setColor('#31849b');">
            <div class="color_div" style="background-color: #31849b"></div>
        </a>
    </span>
</li>
<li class="divider"></li>
 */
function addSetColorMenu() {

    var span = document.createElement("span");
    span.setAttribute("class", "menu-item-container");

    var colors = ["red", "#31849b", "#ffffff"];
    var divStyle = "width: 20px; height: 20px; margin-top: 10px; margin-right: 5px; display: inline-block; ";
    for (var i = 0; i < colors.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("style", divStyle + "background-color:" + colors[i]);

        var a = document.createElement("a");
        a.setAttribute("onclick", "javascript:setColor('" + colors[i] + "');");
        a.appendChild(div);

        span.appendChild(a);
    }

    var liColor = document.createElement("li");
    liColor.setAttribute("data-group", "inline-style");
    liColor.setAttribute("class", "has-btn-submenu");
    liColor.appendChild(span);

    var liLine = document.createElement("li");
    liLine.setAttribute("class", "divider");

    var contextMenu = document.getElementById("context-menu");
    contextMenu.innerHTML = liColor.outerHTML + liLine.outerHTML + contextMenu.innerHTML;
}

function setColor(color) {

    var targer = $(".md-focus span[md-inline=plain].md-expand");
    if(targer && targer.length==1){
        var parent =targer[0].parentNode;

        var font = document.createElement("font");
        font.setAttribute("color", color);
        font.innerHTML = targer[0].outerHTML;

        var spanBefore = document.createElement("span");
        spanBefore.setAttribute("class", "md-meta md-before md-raw-inline");
        spanBefore.innerHTML = '&lt;font color="' + color + '"&gt;';

        var spanAfter = document.createElement("span");
        spanAfter.setAttribute("class", "md-meta md-after md-raw-inline");
        spanAfter.innerHTML = '&lt;/font&gt;';

        var span = document.createElement("span");
        span.setAttribute("md-inline", "html_inline");
        span.setAttribute("class", "md-html-inline md-expand");
        span.setAttribute("spellcheck", "false");
        span.appendChild(spanBefore);
        span.appendChild(font);
        span.appendChild(spanAfter);

        parent.replaceChild(span, targer[0]);
        $(".context-menu").removeClass("show").find(".active").removeClass("active");
    }
}