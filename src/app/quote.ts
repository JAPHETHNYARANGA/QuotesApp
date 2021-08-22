export class Quote {
    showQuotes:boolean;
    constructor(public name:string, public word:string, public author:string,public completeDate:Date, public likes:number, public dislikes:number){
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
