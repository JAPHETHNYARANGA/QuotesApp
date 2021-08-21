export class Quote {
    showQuotes:boolean;
    constructor(public id:number, public word:string, public author:string){
        this.showQuotes = false;
    }
    // id:number;
    // word:string;
    // author:string;
    // constructor(id:number, word:string, author:string){
    //     this.id =id;
    //     this.word = word;
    //     this.author=author;
    // }
}
