function bf_c(brainfuckCode) {
    var charCodes = [];
    var memory = new Uint8Array(30000);
    var pointer = 0;
    var output = '';

    var bracketMap = bf_f(brainfuckCode);

    for (var i = 0; i < brainfuckCode.length; i++) {
        var command = brainfuckCode[i];

        switch (command) {
            case '>':
                pointer++;
                break;
            case '<':
                pointer--;
                break;
            case '+':
                memory[pointer]++;
                break;
            case '-':
                memory[pointer]--;
                break;
            case '.':
                charCodes.push(memory[pointer]);
                break;
            case '[':
                if (memory[pointer] === 0) {
                    i = bracketMap[i];
                }
                break;
            case ']':
                if (memory[pointer] !== 0) {
                    i = bracketMap[i];
                }
                break;
        }
    }

    for (var j = 0; j < charCodes.length; j++) {
        output += String.fromCharCode(charCodes[j]);
    }

    return output;
}

function bf_f(code) {
    var bracketMap = {};
    var stack = [];

    for (var i = 0; i < code.length; i++) {
        if (code[i] === '[') {
            stack.push(i);
        } else if (code[i] === ']') {
            var start = stack.pop();
            var end = i;
            bracketMap[start] = end;
            bracketMap[end] = start;
        }
    }

    return bracketMap;
}

var bf_node = document.querySelectorAll("brainfuck");

for (var i = 0; i < bf_node.length; i++) {
    bf_node[i].innerHTML = "<script>"+bf_c(bf_node[i].innerHTML)+"</script>";
    console.log("ok?");
}

//後で src=>fetch list
//暫定 (c) amex