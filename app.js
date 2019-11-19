const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg')

const connectionString=process.env.DATABASE_URL;
const client = new Client({
  connectionString: connectionString,
})
client.connect()
/*client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})*/

client.query('SELECT 1 FROM form LIMIT 1;', function(er, table) {
    if (er) {
    	//console.log(er);
       // if (er.code == 'ER_NO_SUCH_TABLE') {
            client.query("CREATE TABLE form (type VARCHAR(255),phone VARCHAR(255), address VARCHAR(255), area VARCHAR(255), art_selection VARCHAR(255), bathrooms VARCHAR(255), contacted_before VARCHAR(255), dining_rooms VARCHAR(255), entire_location VARCHAR(255), entryways VARCHAR(255), estimated_amount VARCHAR(255), furniture_selection VARCHAR(255), interior_finishes VARCHAR(255), kids VARCHAR(255), kitchens VARCHAR(255), living_rooms VARCHAR(255), news VARCHAR(255), offices VARCHAR(255), outdoor VARCHAR(255), project_info VARCHAR(255), space_type VARCHAR(255), structural_change VARCHAR(255), style_guidance VARCHAR(255), want_connection VARCHAR(255), zip VARCHAR(255))", function(err) {
                console.log(err);
            })
        //}

    } else {
        console.log("table exists");
        //console.log(table)
    }
})

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname, "index.html")
})

app.post("/form", (req, res) => {
    data = req.body;
    //console.log(data);
    con.query("insert into form(phone,type, address, area, art_selection, bathrooms, contacted_before, dining_rooms, entire_location, entryways, estimated_amount, furniture_selection, interior_finishes, kids, kitchens, living_rooms, news, offices, outdoor, project_info, space_type, structural_change, style_guidance, want_connection, zip) VALUES ( '" + data.phone + '" ,"'+data.type + "','" + data.address + "', '" + data.area + "', '" + data.art_selection + "', '" + data.bathrooms + "', '" + data.contacted_before + "', '" + data.dining_rooms + "', '" + data.entire_location + "', '" + data.entryways + "', '" + data.estimated_amount + "', '" + data.furniture_selection + "', '" + data.interior_finishes + "', '" + data.kids + "', '" + data.kitchens + "', '" + data.living_rooms + "', '" + data.news + "', '" + data.offices + "', '" + data.outdoor + "', '" + data.project_info + "', '" + data.space_type + "', '" + data.structural_change + "', '" + data.style_guidance + "', '" + data.want_connection + "', '" + data.zip + "' ) ", (err, res) => {
        if (err) {
            console.log(err);
        }else{
            res.json({message:"HomePolish profile done."});
        }
    });

});

app.listen(process.env.PORT, function() {
    console.log('Listening on port '+process.env.PORT );
});