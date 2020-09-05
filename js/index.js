let fbook
let oldTestamentBooks = [
    {
        book: "Genesis",
        chapters: "50"
    }, {
        book: "Exodus",
        chapters: "40"
    }, {
        book: "Leviticus",
        chapters: "27"
    }, {
        book: "Numbers",
        chapters: "36"
    }, {
        book: "Deuteronomy",
        chapters: "34"
    }, {
        book: "Joshua",
        chapters: "24"
    }, {
        book: "Judges",
        chapters: "21"
    }, {
        book: "Ruth",
        chapters: "4"
    }, {
        book: "1 Samuel",
        chapters: "31"
    }, {
        book: "2 Samuel",
        chapters: "24"
    }, {
        book: "1 Kings",
        chapters: "22"
    }, {
        book: "2 Kings",
        chapters: "25"
    }, {
        book: "1 Chronicles",
        chapters: "29"
    }, {
        book: "2 Chronicles",
        chapters: "39"
    }, {
        book: "Ezra",
        chapters: "10"
    }, {
        book: "Nehemiah",
        chapters: "13"
    }, {
        book: "Esther",
        chapters: "10"
    }, {
        book: "Job",
        chapters: "42"
    }, {
        book: "Psalms",
        chapters: "150"
    }];
let newTestamentBooks = [
    {
        book: "Matthew",
        chapters: "28"
    }, {
        book: "Mark",
        chapters: "16"
    }, {
        book: "Luke",
        chapters: "24"
    }, {
        book: "John",
        chapters: "21"
    }, {
        book: "Acts Of The Apostles",
        chapters: "28"
    }, {
        book: "Romans",
        chapters: "16"
    }, {
        book: "1 Corinthians",
        chapters: "16"
    }, {
        book: "2 Corinthians",
        chapters: "13"
    }, {
        book: "Galatians",
        chapters: "6"
    }, {
        book: "Ephesians",
        chapters: "6"
    }, {
        book: "Philippians",
        chapters: "4"
    }, {
        book: "Colossians",
        chapters: "4"
    }, {
        book: "1 Thessalonians",
        chapters: "5"
    }, {
        book: "2 Thessalonians",
        chapters: "3"
    }, {
        book: "1 Timothy",
        chapters: "6"
    }, {
        book: "2 Timothy",
        chapters: "4"
    }, {
        book: "Titus",
        chapters: "3"
    }, {
        book: "Philemon",
        chapters: "1"
    }, {
        book: "Hebrews",
        chapters: "13"
    }, {
        book: "James",
        chapters: "5"
    }, {
        book: "1 Peter",
        chapters: "5"
    }, {
        book: "2 Peter",
        chapters: "3"
    }, {
        book: "1 John",
        chapters: "5"
    }, {
        book: "2 John",
        chapters: "1"
    }, {
        book: "3 John",
        chapters: "1"
    }, {
        book: "Jude",
        chapters: "1"
    }, {
        book: "Revelations",
        chapters: "22"
    }];

function getTestament() {
    let book = document.getElementsByName("testament");

    for (let i = 0; i < book.length; i++) {
        if (book[i].checked) {
            fbook = book[i].id;
            break;
        } else { fbook = "undefined" }
    }
    let randomNumber = pickRandomBook();
    document.getElementById("result").innerHTML = randomNumber[0].bold();
    document.getElementById("chapter").innerHTML = randomNumber[1];
}

function genRandomNumber(arr) {
    return Math.abs(Math.round(Math.random() * arr.length - 1));
}
function genChapter(num) {
    let correctNum = 0;
    while (correctNum === 0) {
        correctNum = Math.round(Math.random() * num);
    }
    return (correctNum)
}

function pickRandomBook() {
    let combination;
    let chapter;

    if (fbook === "neutral") {
        combination = oldTestamentBooks.concat(newTestamentBooks);
    } else if (fbook === "old-testament") {
        combination = oldTestamentBooks;
    }
    else if (fbook === "new-testament") {
        combination = newTestamentBooks;
    }
    else if (fbook === "undefined") {
        return (["<b b style = 'color:red'>PLEASE SELECT A VALID OPTION</b>", ""]);
    }

    let indexNumber = genRandomNumber(combination);
    chapter = genChapter(combination[indexNumber].chapters)
    return [combination[indexNumber].book, chapter];

}