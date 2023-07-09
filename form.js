import "https://unpkg.com/react@18.2.0/umd/react.production.min.js";
import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(React.createElement);

export default function Form(){
    
    const items = [
        {
            id: '1',
            task: "menyapu"
        },
        {
            id: '2',
            task: "mengepel",
        }
    ];
    
    const inputRef = React.useRef(null);
    
    const [tasks, dispatch] = React.useReducer(tasksReducer, items);
    
    function adding(evt){
        dispatch({
            decision: "add",
            content: inputRef.current.value,    
        });
        inputRef.current.value="";
        evt.preventDefault();
    }
    
    function deleting(evt){
        dispatch({
            decision: "delete",
            id: evt.id,    
        });
    }
    
    function editing(evt){
        const newVal = prompt("hey",evt.task)
        dispatch({
            decision: "edit",
            id: evt.id,
            content: newVal
        });
    }
    const list = tasks.map(p=>html`<nav><ul><li key=${p.id}>
    <input name=${p.id} type="checkbox" />
        <label htmlFor=${p.id}>${p.task}</label>
    </li></ul> <ul id=${p.id} key=${p.id}>
        <li> <a onClick=${()=>editing(p)} role="button" href=${'#'+ p.id}>Edit</a> </li>
        <li> <a onClick=${()=>deleting(p)} className="contrast" role="button" href=${'#'+p.id}>Hapus</a> </li>
    </ul>
    </nav>
    `);
    
    return(html`
    <${React.Fragment}>
        ${list}
        <form className="container" onSubmit=${adding}>
            <input ref=${inputRef} type="text" placeholder="tulis sesuatu" />
            <button>tambah</button>
        </form>
    </${React.Fragment}>`
    );
}

function tasksReducer(tasks, action){
    switch(action.decision){
        case "add": {
            return [
                ...tasks,
                {
                    id: self.crypto.randomUUID(),
                    task: action.content,
                }
            ];
        }
        case "delete": {
            return (
              tasks.filter(c=>c.id!==action.id)  
            );
        }
        case "edit": {
            tasks.splice(tasks.findIndex(el=>el.id===action.id),1,{
                    id: self.crypto.randomUUID(),
                    task: action.content
                });
            return([...tasks]);
        }
        default:
        throw Error("unknown " + action.decision);
    }
}