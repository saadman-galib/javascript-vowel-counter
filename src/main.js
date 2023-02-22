const textarea = document.querySelector("textarea");
const result = document.querySelector(".result");
var vowelTotal = 0;
var textLength = 0;
var previousLength = 0;
var previousText = "";

textarea.addEventListener("keyup", (e) => {
    let keys = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let text = textarea.value;
    textLength = text.length;
    if (text.length > 0) {
        var lastChar = text[text.length - 1];
        var isVowel = keys.includes(lastChar);

        if (e.keyCode == 8) {
            vowelTotal = 0;
            for (let i = 0; i < textLength; i++) {
                if (keys.includes(text[i])) {
                    ++vowelTotal;
                }
            }
        } else if (e.keyCode == 229) {
            if (textLength < previousLength) {
                if (keys.includes(previousText[previousText.length - 1])) {
                    --vowelTotal;
                }
            } else {
                if (isVowel) {
                    ++vowelTotal;
                }
            }
        } else {
            vowelTotal = 0;
            for (let i = 0; i < textLength; i++) {
                if (keys.includes(text[i])) {
                    ++vowelTotal;
                }
            }
        }
    }
    previousLength = textLength;
    previousText = text;
    if (vowelTotal > 0) {
        result.textContent = `Vowels: ${vowelTotal}`;
    } else {
        result.textContent = `Vowel: ${vowelTotal}`;
    }
});
