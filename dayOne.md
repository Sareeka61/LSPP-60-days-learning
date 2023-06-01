## How to handle keypress events in JavaScript???

When we press a certain key in keyboards, there are three possible keyboard events to occur, i.e. *keydown*, *keypress*, *keyup* . 

Keydown - when key is pressed down.

Keypress - when alphanumeric keys or punctuation key is pressed down.

Keyup - when key is released.

For example: We have this code to illustrate about keydown event. 

```
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden'){
        closeTheModal();
    })
})
```

The given code example calls the function named closeTheModal if the user pressed the key Escape in the keyboard and then the modal does not contain hidden class.

The 'e' in the given code is often used as a shorthand to represent an event object. The event object contains information about an event that has occurred, such as the type of event, the target element, and additional properties and methods that allow developers to interact with and manipulate the event.

The sequence followed during the keyboard presses is: 

Keydown--> Keypress --> Keyup

