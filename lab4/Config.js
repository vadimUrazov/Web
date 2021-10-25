function createButtonBegin() {
    clear();
    whiteBeginPosition();
    blackBeginPosition();

}

function blackBeginPosition() {

    document.getElementById("b8").innerHTML =
        '<img src="black-checker.svg" id="b11" onclick="onClickChecker(id,`b8`)">';
    document.getElementById("d8").innerHTML =
        '<img src="black-checker.svg" id="b12" onclick="onClickChecker(id,`d8`)">';
    document.getElementById("f8").innerHTML =
        '<img src="black-checker.svg" id="b13" onclick="onClickChecker(id,`f8`)">';
    document.getElementById("h8").innerHTML =
        '<img src="black-checker.svg" id="b14" onclick="onClickChecker(id,`h8`)">';
    document.getElementById("a7").innerHTML =
        '<img src="black-checker.svg" id="b21" onclick="onClickChecker(id,`a7`)">';
    document.getElementById("c7").innerHTML =
        '<img src="black-checker.svg" id="b22" onclick="onClickChecker(id,`c7`)">';
    document.getElementById("e7").innerHTML =
        '<img src="black-checker.svg" id="b23" onclick="onClickChecker(id,`e7`)">';
    document.getElementById("g7").innerHTML =
        '<img src="black-checker.svg" id="b24" onclick="onClickChecker(id,`g7`)">';
    document.getElementById("b6").innerHTML =
        '<img src="black-checker.svg" id="b31" onclick="onClickChecker(id,`b6`)">';
    document.getElementById("d6").innerHTML =
        '<img src="black-checker.svg" id="b32" onclick="onClickChecker(id,`d6`)">';
    document.getElementById("f6").innerHTML =
        '<img src="black-checker.svg" id="b33" onclick="onClickChecker(id,`f6`)">';
    document.getElementById("h6").innerHTML =
        '<img src="black-checker.svg" id="b34" onclick="onClickChecker(id,`h6`)">';

}


function whiteBeginPosition() {

    document.getElementById("a1").innerHTML =
        '<img src="white-checker.svg" id="w11" onclick="onClickChecker(id,`a1`)">';
    document.getElementById("c1").innerHTML =
        '<img src="white-checker.svg" id="w12" onclick="onClickChecker(id,`c1`)">';
    document.getElementById("e1").innerHTML =
        '<img src="white-checker.svg" id="w13" onclick="onClickChecker(id,`e1`)">';
    document.getElementById("g1").innerHTML =
        '<img src="white-checker.svg" id="w14" onclick="onClickChecker(id,`g1`)">';
    document.getElementById("b2").innerHTML =
        '<img src="white-checker.svg" id="w21" onclick="onClickChecker(id,`b2`)">';
    document.getElementById("d2").innerHTML =
        '<img src="white-checker.svg" id="w22" onclick="onClickChecker(id,`d2`)">';
    document.getElementById("f2").innerHTML =
        '<img src="white-checker.svg" id="w23" onclick="onClickChecker(id,`f2`)">';
    document.getElementById("h2").innerHTML =
        '<img src="white-checker.svg" id="w24" onclick="onClickChecker(id,`h2`)">';
    document.getElementById("a3").innerHTML =
        '<img src="white-checker.svg" id="w31" onclick="onClickChecker(id,`a3`)">';
    document.getElementById("c3").innerHTML =
        '<img src="white-checker.svg" id="w32" onclick="onClickChecker(id,`c3`)">';
    document.getElementById("e3").innerHTML =
        '<img src="white-checker.svg" id="w33" onclick="onClickChecker(id,`e3`)">';
    document.getElementById("g3").innerHTML =
        '<img src="white-checker.svg" id="w34" onclick="onClickChecker(id,`g3`)">';

}

function clear() {
    let arr = ["a5", "c5", "e5", "g5", "b4", "d4", "f4", "h4"];
    arr.forEach((i) => {
        document.getElementById(i).innerHTML = '';
    })


}

function blackExamplePosition() {
    let arr = ["d8", "f8", "h8", "a7", "g7", "b6", "d6", "f6"];

    document.getElementById("c1").innerHTML = '<img src="black-damka.svg" id="c1" onclick="clickDamkaExample(id)">';
    document.getElementById("b8").innerHTML = '<img src="black-checker.svg" id="b11" onclick="onExampleBlackChecker(id)">';
    document.getElementById("c5").innerHTML = '<img src="black-checker.svg" id="b12" onclick="onExampleBlackChecker(id)">';
    document.getElementById("c7").innerHTML = '<img src="black-checker.svg" id="b13" onclick="onExampleBlackChecker(id)">';
    document.getElementById("e7").innerHTML = '<img src="black-checker.svg" id="b14" onclick="onExampleBlackChecker(id)">';
    document.getElementById("h6").innerHTML = '<img src="black-checker.svg" id="b21" onclick="onExampleBlackChecker(id)">';

    arr.forEach((j) => {
        document.getElementById(j).innerHTML = '';
    })

}
function onExampleWhiteChecker(idChecker,idCell) {
if(idCell==='f4'){
    if (condition.flag === false) {

        document.getElementById(idChecker).classList.add("yellow");
        condition.flag = true;
        condition.oldId = idChecker;
        document.getElementById('e5').classList.add("green");
        document.getElementById('g5').classList.add("green");

    } else if (condition.flag === true) {
        if (condition.oldId === idChecker) {

            condition.flag = false;
            document.getElementById(idChecker).classList.remove("yellow");
            document.getElementById('e5').classList.remove("green");
            document.getElementById('g5').classList.remove("green");

        }
    }
}else if (idCell==='h4'){
    if (condition.flag === false) {

        document.getElementById(idChecker).classList.add("yellow");
        condition.flag = true;
        condition.oldId = idChecker;
        document.getElementById('g5').classList.add("green");

    } else if (condition.flag === true) {
        if (condition.oldId === idChecker) {

            condition.flag = false;
            document.getElementById(idChecker).classList.remove("yellow");
            document.getElementById('g5').classList.remove("green");

        }
    }
}
}
function onExampleBlackChecker(idChecker) {
    if (condition.flag === false) {

        document.getElementById(idChecker).classList.add("yellow");
        condition.flag = true;
        condition.oldId = idChecker;

    } else if (condition.flag === true) {
        if (condition.oldId === idChecker) {

            condition.flag = false;
            document.getElementById(idChecker).classList.remove("yellow");
        }
    }
}

function whiteExamplePosition() {
    let arr = ["a1", "c1", "e1", "g1", "b2", "d2", "f2", "h2", "a3", "c3", "e3", "g3"];
    f4 = 'f4';
    h4 = 'h4';
    document.getElementById("f4").innerHTML = '<img src="white-checker.svg" id="w11"  onclick="onExampleWhiteChecker(id,f4)">';
    document.getElementById("h4").innerHTML = '<img src="white-checker.svg" id="w12"  onclick="onExampleWhiteChecker(id,h4)">';
    arr.forEach((i) => {
        document.getElementById(i).innerHTML = '';
    })

}

function createButtonExample() {
    whiteExamplePosition();
    blackExamplePosition();
}

function clickDamkaExample(idDamka) {
    if (condition.flag === false) {

        document.getElementById(idDamka).classList.add("yellow");
        condition.flag = true;
        condition.oldId = idDamka;
        document.getElementById('g5').classList.add("red");

    } else if (condition.flag === true) {
        if (condition.oldId === idDamka) {

            condition.flag = false;
            document.getElementById(idDamka).classList.remove("yellow");
            document.getElementById('g5').classList.remove("red");
        }
    }

}

function onClickChecker(idChecker, idCell) {
    if (condition.flag === false) {

        document.getElementById(idChecker).parentNode.classList.add("yellow");
        condition.flag = true;
        condition.oldId = idChecker;

        isGoClickChecker(idChecker, idCell);
    } else if (condition.flag === true) {
        if (condition.oldId === idChecker) {

            condition.flag = false;
            document.getElementById(idChecker).parentNode.classList.remove("yellow");
            isNoClickChecker(idChecker, idCell);
        }
    }
}

function isNoClickChecker(idChecker, idCell) {
    let posX, posY;
    let newPos = "";
    let newPos1 = "";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 5; j++) {
            if (boardCell[i][j] === idCell.toString()) {
                posX = i;
                posY = j;
            }
        }
    }

    if (idChecker[0] === 'b') {
        if (boardIsPos[posX + 1][posY] === 0 && boardIsPos[posX + 1][posY + 1] !== 0) {
            newPos1 = boardCell[posX + 1][posY];
            document.getElementById(newPos1).classList.remove("red");
        }
        if (boardIsPos[posX + 1][posY + 1] === 0) {
            newPos = boardCell[posX + 1][posY + 1];
            document.getElementById(newPos).classList.remove("green");
            if (boardIsPos[posX + 1][posY] === 0) {
                newPos1 = boardCell[posX + 1][posY];
                document.getElementById(newPos1).classList.remove("green");
            }
        }
    } else if (idChecker[0] === 'w'){
        if (boardIsPos[posX - 1][posY] === 0 && boardIsPos[posX - 1][posY - 1] !== 0) {
            newPos1 = boardCell[posX - 1][posY];
            document.getElementById(newPos1).classList.remove("red");
        }


        if (boardIsPos[posX - 1][posY - 1] === 0) {
            newPos = boardCell[posX - 1][posY - 1];
            document.getElementById(newPos).classList.remove("green");
            if (boardIsPos[posX - 1][posY] === 0) {
                newPos1 = boardCell[posX - 1][posY];
                document.getElementById(newPos1).classList.remove("green");
            }
        } else if (boardIsPos[posX - 1][posY - 1] === 1) {
            newPos = boardCell[posX - 2][posY - 2];
            document.getElementById(newPos).classList.remove("red");

        }

    }
}

function isGoClickChecker(idChecker, idCell) {
    let posX = "", posY = "";
    let newPos = "";
    let newPos1 = "";

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 5; j++) {
            if (boardCell[i][j] === idCell.toString()) {
                posX = i;
                posY = j;
            }

        }
    }

    if (idChecker[0] === 'b') {
        if (boardIsPos[posX + 1][posY] === 0 && boardIsPos[posX + 1][posY + 1] !== 0) {
            newPos1 = boardCell[posX + 1][posY];
            document.getElementById(newPos1).classList.add("red");
        }


        if (boardIsPos[posX + 1][posY + 1] === 0) {
            newPos = boardCell[posX + 1][posY + 1];
            document.getElementById(newPos).classList.add("green");
            if (boardIsPos[posX + 1][posY] === 0) {
                newPos1 = boardCell[posX + 1][posY];
                document.getElementById(newPos1).classList.add("green");
            }
        } else if (boardIsPos[posX + 1][posY + 1] === -1) {
            newPos = boardCell[posX + 2][posY + 2];
            document.getElementById(newPos).classList.add("red");
        }
    } else if (idChecker[0] === 'w') {
        if (boardIsPos[posX - 1][posY] === 0 && boardIsPos[posX - 1][posY - 1] !== 0) {
            newPos1 = boardCell[posX - 1][posY];
            document.getElementById(newPos1).classList.add("red");
        }


        if (boardIsPos[posX - 1][posY - 1] === 0) {
            newPos = boardCell[posX - 1][posY - 1];
            document.getElementById(newPos).classList.add("green");
            if (boardIsPos[posX - 1][posY] === 0) {
                newPos1 = boardCell[posX - 1][posY];
                document.getElementById(newPos1).classList.add("green");
            }
        } else if (boardIsPos[posX - 1][posY - 1] === 1) {
            newPos = boardCell[posX - 2][posY - 2];
            document.getElementById(newPos).classList.add("red");

        }

    }


}

