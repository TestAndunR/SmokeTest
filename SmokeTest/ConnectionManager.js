module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["smokeDB"] = {
            host: process.env.EndPoint_rdsSmokeDB,
            port: process.env.Port_rdsSmokeDB,
            user: process.env.User_rdsSmokeDB,
            password: process.env.Password_rdsSmokeDB,
            database: "andunDB",
        };
    };