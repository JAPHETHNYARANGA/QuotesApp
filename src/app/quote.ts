export class Quote {
    showQuotes:boolean;
    constructor(public id:number, public name:string, public word:string, public author:string,public completeDate:Date, public likes:number, public dislikes:number){
        this.showQuotes = false;
    }
   
}
