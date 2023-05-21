var localDB = {
    name: "localDB",
    config: {
        msg: true
    },
    init: function () {
        if (!this.LS.Get("localDB")) {
            this.LS.Log("making localDB...");
            this.LS.Set("localDB", JSON.stringify({
                id: Date.now().toString() + Math.floor(Math.random() * 100000000).toString,
                DataBase: [
                    {
                        index: {
                            type: "object",
                            data: {
                                name: "hello",
                                msg: "world!"
                            }
                        },
                        unindex: {
                            type: "list",
                            data: [
                                "hello",
                                "world!"
                            ]
                        }
                    },
                ]
            }));
        } else {
            this.LS.Log("booting localDB...");
        }
    },
    LS: {
        Set: function (key, value) {
            return localStorage.setItem(key, value);
        },
        Get: function (key) {
            return localStorage.getItem(key);
        },
        Log: function (msg) {
            if (this.config.msg) {
                return console.log("localDB : " + msg);
            }
        }// Debug
    },
    DB: localStorage.getItem("localDB"),
    DBS: localStorage.getItem("localDB").DataBase[0],
    addDB: function (name, type) {
        if (!JSON.parse(this.DB).DataBase[0][name]) {
            let DBcontent = JSON.parse(this.DB);
            if (type == "obj") {

                DBcontent.DataBase[0].push({
                    [name]: {
                        type: "object",
                        data: {

                        }
                    }
                })
            } else if (type == "list") {

                DBcontent.DataBase[0].push({
                    [name]: {
                        type: "list",
                        data: [

                        ]
                    }
                })
            }
            this.LS.Set("localDB", JSON.stringify(DBcontent));
        }
    },
    deleteDB: function (name) {
        delete JSON.parse(this.DB).DataBase[0][name];
    },
    obj: {
        setData: function (name, key,data ) {
            let DBcontent = JSON.parse(this.DB);
            DBcontent.DataBase[0]["name"]["data"][key] = data;
            this.LS.Set("localDB", JSON.stringify(DBcontent));
        },
        getData: function (name, key) {
            return JSON.parse(this.DB).DataBase[0][name]["data"][key];
        },
        deleteData: function (name, key) {
            let DBcontent = JSON.parse(this.DB);
            DBcontent.DataBase[0][name]["data"].splice(key, 1);
            this.LS.Set("localDB", JSON.stringify(DBcontent));
        }
    },
    list: {
        setData: function (name, data) {
            let DBcontent = JSON.parse(this.DB);
            DBcontent.DataBase[0][name]["data"].push(data);
            this.LS.Set("localDB", JSON.stringify(DBcontent));
        },
        getData: function (name) {
            return JSON.parse(this.DB).DataBase[0][name]["data"];
        },
        deleteData: function (name, key) {
            let DBcontent = JSON.parse(this.DB);
            DBcontent.DataBase[0][name]["data"].splice(key, 1);
            this.LS.Set("localDB", JSON.stringify(DBcontent));
        }
    }
}// Obj => text DB{{}}

//--

localDB.init();
localDB.addDB("Status", "obj");