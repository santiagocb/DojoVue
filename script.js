let taskApp = new Vue({
    el: '#taskApp',
    data: {
        tasks: []
    },
    mounted(){
        this.$http.get("http://142.93.202.10:8080/tasks")
            .then(result => {
                this.tasks = result.data
            }, error => {
                console.error(error)
            })
    },
    methods: {
        deleteTask: function(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        },
        addTask: function(e) {
            e.preventDefault()

            if(this.tasks.name) {
                let task = {
                    name: this.tasks.name,
                    done: false
                }
                this.$http.post("http://142.93.202.10:8080/tasks", task)
                    .then(result => {
                        this.tasks.push(result.data)
                        console.log(this.task);                        
                    }, error => console.error(error))
                this.tasks.name = ""
            }
        }
    }
}) 