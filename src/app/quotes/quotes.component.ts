import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [ 
    new Quote(1, 'Expect the unexpected and whenever possible expect everything', 'Anonymous'),
    new Quote(2,'Awise man once said nothing.....', 'Anonymous'),
    new Quote(3, 'Life is chaos, success is relative and confidence is everything','Gina Laneti'),
    new Quote(4, 'I am  not superstitious but i am a little stitious.','Michael Scott')

  ];

  quoteDetails(index:any){
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
