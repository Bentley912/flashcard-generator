var BasicCard = function(front, back){
    this.front = front;
    this.back = back;
}

var firstCard = new BasicCard("Who was the first president of the United States?", "George Washington")

var ClozeCard = function(fullText,deletion){
    this.fullText = fullText;
    this.deletion = deletion;
    this.partial = this.fullText.replace(deletion, "...")
}


var firstDelete = new ClozeCard ("George Washington was the first President of the United States.", "George Washington");
var secondDelete = new ClozeCard ("Harriet Tubman freed many slaves.", "Harriet Tubman");




