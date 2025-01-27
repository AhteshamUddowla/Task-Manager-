export class Task{
    title: string
    description: string
    completed?: boolean

    constructor(){
        this.title = ''
        this.description = ''
        this.completed = false
    }
}