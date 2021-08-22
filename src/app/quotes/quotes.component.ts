import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [ 
    new Quote('Japheth', 'Expect the unexpected and whenever possible expect everything', 'Anonymous'),
    new Quote('Wycliffe','Awise man once said nothing.....', 'Anonymous'),
    new Quote('Nyaranga', 'Life is chaos, success is relative and confidence is everything','Gina Laneti'),
    new Quote('Buttercup', 'I am  not superstitious but i am a little stitious.','Michael Scott')

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

  constructor() { }

  ngOnInit(): void {
  }

}
