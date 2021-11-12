// 1. crea un array di oggetti 
// 2. stampa l'array in pagina 
// 3. crea un input in modo che l'utente posso aggiungere delle task
// 4. le task con done true devvono sbarrarsi 
// 5. creare una x per togliere le task

var tobolist = new Vue (
    {
        el: "#container",
        data: {
            newTask: [
                {
                    text: "",
                    done: "false"  
                }
            ],
            tasks: [
                {
                    text: "Fare la spesa",
                    done: "false"
                },

                {
                    text: "Cucinare",
                    done: "false"
                },

                {
                    text: "Fare il bucato",
                    done: "false"
                },

                {
                    text: "Fare l'esercizio pomeridiano",
                    done: "false"
                },

                {
                    text: "Allenarsi",
                    done: "false"
                }
            ]
        },
        methods: { 
            removeTask(index) {
                this.tasks.splice(index, 1);
            },
            addTask() {
                if (this.newTask !== '') {
                    this.tasks.push(this.newTask);
                    this.newTask = "";
                }
            },
            lineTask() {
                this.tasks.done = "true";
            }
        }
    }
);