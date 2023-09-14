import * as React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from "./interfaces/interface";
import LocalStorage, { UpdateStorage } from "./LocalStorage";



const Input: React.FC = () => {

    const [isEditing, setIsEditing] = React.useState<boolean>(false)

    const notify = (info: string) => toast.success(`Todo is  ${info}!`, {
        position: "top-left"
    });



    const [todo, setTodo] = React.useState<{ name: string, id: number }>({
        name: '',
        id: 0
    })

    const [todos, setTodos] = React.useState<Todo[]>(LocalStorage())


    function submit(e: React.FormEvent) {
        e.preventDefault()
        if (isEditing) {
            todos?.map(e => {
                if (e.id == todo.id) {
                    return e.name = todo.name, e.id = todo.id
                } else {
                    return e
                }
            })
            notify('successfuly changed')
            setIsEditing(false)
        } else {
            setTodos([...todos, { name: todo.name, id: todos.length + 1 }])
            notify('successfuly added')
        }
        setTodo({ name: '', id: 0 })
        UpdateStorage(todos)
    }


    function edit(id: number, name: string) {
        setTodo({ name: name, id: id })
        setIsEditing(true)
    }

    function deleteF(id: number) {
        setTodos(todos.filter(t => t.id !== id))
        UpdateStorage(todos)
        notify('deleted')
    }

    return (
        <div className="container p-5 bg-slate-600 mx-auto rounded-xl mt-5">
            <form onSubmit={submit} className='w-[50%] mx-auto bg-white relative flex items-center   p-1 border-4'>
                <input type="text" className="w-full border pr-10 p-2 outline-blue-600 hover:border-gray-600 transition duration-300 rounded-lg" onChange={(e) => setTodo({ ...todo, name: e.target.value })} value={todo.name} required />
                <span className="absolute left-[90%]">{isEditing ? '✍' : '✔'}</span>
                <button className="hidden"></button>
            </form>

            <div className="w-[50%] mx-auto mt-5">
                {todos.map((p, i) => {
                    return <div className="grid grid-cols-[1fr_auto_auto] bg-white my-2 p-1 rounded-lg" key={i}>
                        <h2 className="text-2xl font-bold">id:{i + 1}.{p.name}</h2>
                        <button className="mx-3" onClick={() => deleteF(p.id)}>❌</button>
                        <button onClick={() => edit(p.id, p.name)}>✍</button>
                    </div>

                })}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Input