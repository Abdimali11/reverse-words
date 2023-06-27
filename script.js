// Good Luck 💪🏾
function reverseWords(sentence) {
 
    const words = sentence.split(" ");
    
    const reversedWords = words.reverse();
    
    const reversedSentence = reversedWords.join(" ");
    
    return reversedSentence;
  }
  
  console.log(reverseWords("fikrcamp bootcamp")); 
  console.log(reverseWords("hello there!")); 
  console.log(reverseWords("welcome to my city")); 