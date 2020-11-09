window.onload = function() {
    
    // Format Terminal Window
    var terminals = document.getElementsByTagName("terminal-snippet");
    for(var i = 0; len = terminals.length; i++)
    {
        var terminalContent = terminals[i].innerHTML;
        terminals[i].innerHTML = '\
        <div class="term-titlebar">\
            <div class="term-button" style="background-color: red;"></div>\
            <div class="term-button" style="background-color: orange;"></div>\
            <div class="term-button" style="background-color: limegreen;"></div>\
            <div style="float: left; margin-left: 17em">user@linux:~</div>\
        </div>\
        <div class="term-body">' + terminalContent + '</div>';
    }
};