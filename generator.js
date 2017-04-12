var BasicCard = function(front, back){
    this.front = front;
    this.back = back;
}

var firstCard = new BasicCard("Who was the first president of the United States?", "George Washington")

console.log(firstCard.front);
console.log(firstCard.back);
