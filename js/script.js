

const app = Vue.createApp({

    data() {
        return {
            todoItem: "",
            indice: 2,
            todoList: [{
                id: 1,
                nome: "fare l'esercizio",
                stato: "da fare"
            },
            {
                id: 2,
                nome: "biastimarci dietro",
                stato: "work in progress"
            },
            ],
            statoList: [
                "da fare",
                "lavori in corso",
                "completato"
            ],
        }
    },

    methods: {
        onClickBtn() {
            if (this.todoItem.length === 0) return;

            this.todoList.push({
                id: ++this.indice,
                nome: this.todoItem,
                stato: "da fare"
            }
            ),
            this.todoItem= "";
        },
        onTrashBtn(todoId){
            // da chiedere bene il funzionamento
            const indiceDaCancellare = this.todoList.findIndex((todoItem) => todoItem.id === todoId)

            this.todoList.splice(indiceDaCancellare, 1)
        },
        
        onResetBtn(){
            this.todoList=  [],
            this.indice= 0

        },
        onStatoBtn(todoId){
            let cambiaStato = this.statoList.indexOf(this.todoList[todoId].stato);
            
            if(++cambiaStato > 2){
                cambiaStato = 0;
            }
            this.todoList[todoId].stato = this.statoList[cambiaStato];
        },
        letteraMaiusc(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

    },

    mounted() {


    },
}).mount("#app")