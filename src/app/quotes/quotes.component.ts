import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [ 
    {id:1, word:'Expect the unexpected and whenever possible expect everything', author:'Anonymous'},
    {id:2, word:'Awise man once said nothing.....', author:'Anonymous'},
    {id:3, word: 'Life is chaos, success is relative and confidence is everything', author:'Gina Laneti'},
    {id:4, word:'I am  not superstitious but i am a little stitious.', author:'Michael Scott'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
