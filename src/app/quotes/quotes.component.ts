import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [ 
    new Quote(1,'Japheth', 'Expect the unexpected and whenever possible expect everything', 'Anonymous', new Date(2021,8,22),0,0),
    new Quote(2,'Wycliffe','Awise man once said nothing.....', 'Anonymous',new Date(2021,8,21),0,0),
    new Quote(3,'Nyaranga', 'Life is chaos, success is relative and confidence is everything','Gina Laneti',new Date(2021,8,20),0,0),
    new Quote(4,'Buttercup', 'I am  not superstitious but i am a little stitious.','Michael Scott', new Date(2021,8,19),0, 0)

  ];

  quoteDetails(index:any){
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
  }

  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      let toDelete =confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }
}


  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }
    
  ngOnInit(): void {
  }

}
