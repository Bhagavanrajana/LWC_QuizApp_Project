import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}  //Storing Answers

    correctAnswers=0
    isSubmitted=false

    //Collection of questions
    myQuestions=[
        {
            id:"Question1",
            question: "My Full Name of mine?",
            answers:{
                a:"Sravani Ch",
                b:"Bhagavan R",
                c:"Pavani P"
            },
            correctAnswer:"b"
        },
        {
            id:"Question2",
            question: "My Birth place?",
            answers:{
                a:"Duggada",
                b:"Hyderabad",
                c:"Usa"
            },
            correctAnswer:"a"
        },
        {
            id:"Question3",
            question: "My Laptop Company?",
            answers:{
                a:"Hp",
                b:"Lenovo",
                c:"Dell"
            },
            correctAnswer:"c"
        },
    ]

    //used for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
    //ChangeHandler gets called on every click on the options
    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        const {name,value}=event.target //storing values into name and value for real
        this.selected={...this.selected, [name]:value}
    }

    //for applying dynamic styling to our result
    get isScoreFull(){ 
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?`slds-text-color_success`:`slds-text-color_error`}`
    }
    //Submit Button Handler
    submitHandler(event){
        event.preventDefault()
        let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers=correct.length
        console.log(this.correctAnswers)
        this.isSubmitted=true
    }
    //Reset Button Handler
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }

}