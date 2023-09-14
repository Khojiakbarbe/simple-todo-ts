import * as React from "react"
interface IndSignature {
    [index: string]: string | number;
}

interface UIUser extends IndSignature {
    name: string,
    surname: string,
    age: number,
}



const Input: React.FC<UIUser> = (props) => {

    const inpRef = React.useRef<HTMLInputElement>(null)

    interface About extends IndSignature {
        name: string,
        surname: string,
        age: number,
    }


    const [about, setAbout] = React.useState<About>({
        name: '',
        surname: '',
        age: 0,
        graduate: 0,
    })


    function submit(e: React.FormEvent): void {
        e.preventDefault()

        console.log(about.name);
        console.log(about.surname);
        console.log(about.age);
        console.log(about.graduate);
    }


    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" onChange={(e) => setAbout({ ...about, name: e.target.value })} value={about.name} />
                <input type="text" onChange={(e) => setAbout({ ...about, surname: e.target.value })} value={about.surname} />
                <input type="number" onChange={(e) => setAbout({ ...about, age: +e.target.value })} value={about.age} />
                <input type="number" onChange={(e) => setAbout({ ...about, graduate: +e.target.value })} value={about.graduate} />
                <button></button>
            </form>
        </div>
    )
}

export default Input