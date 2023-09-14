import Todo from "./interfaces/interface";

export function UpdateStorage(todos:Todo[]):void{
    localStorage.setItem('todos',JSON.stringify(todos))
}

function LocalStorage() {
    const todos: string | null = localStorage.getItem('todos')
    if(todos){
        return JSON.parse(todos)
    }else{
        return []
    }
}

export default LocalStorage