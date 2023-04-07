export class Add {
    test:string="";
    constructor() {
    }
    toggleOff(event:any){
        if(event.currentTarget !=null)
        {this.test=event.currentTarget .closest(".dropdown") .className;
        while(this.test.includes("is-active"))
        this.test=this.test.replace("is-active","")
        event.currentTarget.closest(".dropdown").className=this.test
          }
        }
    toggleOn(event:any){
        if(event.currentTarget !=null)
        {this.test=event.currentTarget .closest(".dropdown") .className;
        this.test+=" is-active";
        event.currentTarget.closest(".dropdown").className=this.test 
          }}   



  }