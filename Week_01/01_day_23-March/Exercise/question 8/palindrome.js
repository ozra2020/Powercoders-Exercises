//A palindrome is a word or sentence that is written the same forward and backwards.
//Punctuation and spaces between the words or lettering is allowed. Here are some
//examples:
//★ Otto
//★ Eva, can I see bees in a cave?
//★ No lemon, no melon
//Describe in words how you would write a program that can detect Palindromes. Make
//sure to write out each step clearly. Additionally, write a Javascript program that can
//detect palindromes.

function checkPalindrome(word) {    
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("1122332211")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}

// Resultat The word is a palindrome.