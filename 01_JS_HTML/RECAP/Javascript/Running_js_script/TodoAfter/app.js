let input = prompt("what?");
const todos = ['Collect', 'Clean'];
while(input !== 'quit' && input !== 'q')
{
    if(input === 'list'){
        console.log("************");
        for(let i = 0; i < todos.length; i++)
        {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("************");
    }
    else if(input === 'new')
    {
        const newTodo = prompt("What is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input === 'delete')
    {
        const index = prompt('Ok,enter the index');
        const deleted = todos.splice(index,1);
        console.log("ok, deleted");
    }
    input = promps("What??");
}
console.log("Okay you quit");