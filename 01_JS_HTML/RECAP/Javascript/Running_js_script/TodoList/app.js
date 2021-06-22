let todos =[];
const commands = ['quit', 'new', 'delete', 'list'];
let input = prompt("Enter a command");
let todo = "";
while(input !== 'quit')
{   
    if(input === 'new')
    {
        todo = prompt("Enter a new Todo");
        todos.push(todo);
        console.log(`'${todo}' added to your list`)
    }
    else if(input === 'delete')
    {
        let index = parseInt(prompt("Please enter a valid index"));
        while(Number.isNaN(index) || index > todos.length - 1)
        {
            index = parseInt(prompt("Please enter a valid index"));
            if(index === 0) break;
        }
        todo = todos.splice(index, 1);
        console.log(`'${todo}' removed from your list`)
    }
    else if(input === 'list')
    {
        console.log("*************")
        for(let i = 0; i < todos.length; i++)
        {
            console.log(`${i} : ${todos[i]}`)
        }
        console.log("*************")
    }
    else if(input === 'commands')
    {   
        console.log("The available commands are:")
        for(let item of commands)
        {
            console.log(item);
        }
    }
    else{
        console.log("Type 'commands' to see the available commands");
    }
    input = prompt("Enter a command");
}