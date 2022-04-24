var aLog = console.log;

Queue = {
    commands: [
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"},
    ],

    get property() {
        var aReturned = this.commands[0].command;
        for (var i = 1; i < this.commands.length; i++ ) {
            var aSplit = this.commands[i].id.split("-");
            var aNewCommand = i + "-" + aSplit[1];
            this.commands[i-1].id = aNewCommand;
            this.commands[i-1].command = this.commands[i].command;
        }
        this.commands = this.commands.slice(0,this.commands.length-1)
        return aReturned;
    },

    set property(command) {
        var aSplit = this.commands[0].id.split("-");
        var aNewCommand = this.commands.length+1 + "-" + aSplit[1];
        var aNewElement = {id: aNewCommand, command: command}
        this.commands = this.commands.concat(aNewElement);
    }
    ,

    showQueue: function() {
        for (var i = 0; i < this.commands.length; i++ ) {
            aLog( i+1 + ". " + this.commands[i].command )
        };
    }

};

Queue.showQueue();
aLog("");
Queue.property = "go back";
Queue.showQueue();
aLog("");
aLog(Queue.property);
aLog("");
Queue.showQueue();