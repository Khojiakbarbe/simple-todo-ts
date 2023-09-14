import { useReducer } from "react";


const fruits = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'melon' },
    { id: 4, name: 'watermelon' },
]

function Reducer() {

    type Actions = { type: 'add'; value: string } | { type: 'remove'; value: number };

    type Todos = {
        id: number
        name: string,
    }

    type State = Todos[];

    const [state, dispatch] = useReducer((state: State, action: Actions) => {
        switch (action.type) {
            case "add": return [...state, { id: state.length + 1, name: action.value }];
        }
        return state
    }, fruits)



    return (
        <div>
            {
                state.map((val) => {
                    return <h1>{val.name}</h1>
                })
            }
            <button onClick={() => dispatch({ type: 'add', value: 'Hello World' })} >Add</button>
        </div>
    )
}

export default Reducer