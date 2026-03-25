const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());

const db = new sqlite3.Database("college.db", (err) => {
    if (err) console.error(err);
    else console.log("SQLite connected ✅");
});

db.serialize(() => {

    db.run(`
    CREATE TABLE IF NOT EXISTS colleges (
        id INTEGER PRIMARY KEY,
        name TEXT,
        category TEXT,
        city TEXT,
        state TEXT,
        exam TEXT,
        fees TEXT,
        ranking TEXT,
        average_package TEXT,
        highest_package TEXT,
        website TEXT
    )
    `);

    db.get("SELECT COUNT(*) as count FROM colleges", (err, row) => {

        if (row.count === 0) {

            const stmt = db.prepare(`
            INSERT INTO colleges VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);

            let id = 1;

            // ================= IITs =================
            const iits = [
                ["IIT Bombay","Mumbai","Maharashtra","https://www.iitbombay.ac.in"],
                ["IIT Delhi","New Delhi","Delhi","https://home.iitd.ac.in"],
                ["IIT Madras","Chennai","Tamil Nadu","https://www.iitm.ac.in"],
                ["IIT Kanpur","Kanpur","UP","https://www.iitk.ac.in"],
                ["IIT Kharagpur","Kharagpur","West Bengal","https://www.iitkgp.ac.in"],
                ["IIT Roorkee","Roorkee","Uttarakhand","https://www.iitr.ac.in"],
                ["IIT Guwahati","Guwahati","Assam","https://www.iitg.ac.in"],
                ["IIT Hyderabad","Hyderabad","Telangana","https://www.iith.ac.in"],
                ["IIT BHU","Varanasi","UP","https://www.iitbhu.ac.in"],
                ["IIT Indore","Indore","MP","https://www.iiti.ac.in"],
                ["IIT Ropar","Rupnagar","Punjab","https://www.iitrpr.ac.in"],
                ["IIT Mandi","Mandi","Himachal Pradesh","https://www.iitmandi.ac.in"],
                ["IIT Gandhinagar","Gandhinagar","Gujarat","https://www.iitgn.ac.in"],
                ["IIT Jodhpur","Jodhpur","Rajasthan","https://www.iitj.ac.in"],
                ["IIT Patna","Patna","Bihar","https://www.iitp.ac.in"],
                ["IIT Bhubaneswar","Bhubaneswar","Odisha","https://www.iitbbs.ac.in"],
                ["IIT Tirupati","Tirupati","AP","https://www.iittp.ac.in"],
                ["IIT Palakkad","Palakkad","Kerala","https://www.iitpkd.ac.in"],
                ["IIT Dhanbad","Dhanbad","Jharkhand","https://www.iitism.ac.in"]
            ];

            iits.forEach(c => {
                stmt.run(id++, c[0], "IIT", c[1], c[2], "JEE Advanced", "₹2-2.5L", "Top", "₹12-20L", "₹40-80L", c[3]);
            });

            // ================= NITs =================
            const nits = [
                ["NIT Trichy","Tiruchirappalli","Tamil Nadu","https://www.nitt.edu"],
                ["NIT Surathkal","Mangalore","Karnataka","https://www.nitk.ac.in"],
                ["NIT Warangal","Warangal","Telangana","https://www.nitw.ac.in"],
                ["NIT Calicut","Calicut","Kerala","https://www.nitc.ac.in"],
                ["NIT Rourkela","Rourkela","Odisha","https://www.nitrkl.ac.in"],
                ["NIT Kurukshetra","Kurukshetra","Haryana","https://www.nitkkr.ac.in"],
                ["NIT Durgapur","Durgapur","West Bengal","https://www.nitdgp.ac.in"],
                ["NIT Silchar","Silchar","Assam","https://www.nits.ac.in"],
                ["NIT Jaipur","Jaipur","Rajasthan","https://www.mnit.ac.in"],
                ["NIT Bhopal","Bhopal","MP","https://www.manit.ac.in"],
                ["NIT Jalandhar","Jalandhar","Punjab","https://www.nitj.ac.in"],
                ["NIT Raipur","Raipur","Chhattisgarh","https://www.nitrr.ac.in"],
                ["NIT Agartala","Agartala","Tripura","https://www.nita.ac.in"],
                ["NIT Patna","Patna","Bihar","https://www.nitp.ac.in"],
                ["NIT Srinagar","Srinagar","J&K","https://www.nitsri.ac.in"],
                ["NIT Goa","Goa","Goa","https://www.nitgoa.ac.in"],
                ["NIT Meghalaya","Shillong","Meghalaya","https://www.nitm.ac.in"],
                ["NIT Nagaland","Dimapur","Nagaland","https://www.nitnagaland.ac.in"],
                ["NIT Mizoram","Aizawl","Mizoram","https://www.nitmz.ac.in"]
            ];

            nits.forEach(c => {
                stmt.run(id++, c[0], "NIT", c[1], c[2], "JEE Main", "₹1.5-2L", "Top", "₹8-15L", "₹20-40L", c[3]);
            });

            // ================= IIMs =================
            const iims = [
                ["IIM Ahmedabad","Ahmedabad","Gujarat","https://www.iima.ac.in"],
                ["IIM Bangalore","Bangalore","Karnataka","https://www.iimb.ac.in"],
                ["IIM Calcutta","Kolkata","West Bengal","https://www.iimcal.ac.in"],
                ["IIM Lucknow","Lucknow","UP","https://www.iiml.ac.in"],
                ["IIM Kozhikode","Kozhikode","Kerala","https://www.iimk.ac.in"],
                ["IIM Indore","Indore","MP","https://www.iimidr.ac.in"],
                ["IIM Shillong","Shillong","Meghalaya","https://www.iimshillong.ac.in"],
                ["IIM Rohtak","Rohtak","Haryana","https://www.iimrohtak.ac.in"],
                ["IIM Ranchi","Ranchi","Jharkhand","https://www.iimranchi.ac.in"],
                ["IIM Raipur","Raipur","Chhattisgarh","https://www.iimraipur.ac.in"],
                ["IIM Trichy","Tiruchirappalli","Tamil Nadu","https://www.iimtrichy.ac.in"],
                ["IIM Udaipur","Udaipur","Rajasthan","https://www.iimu.ac.in"],
                ["IIM Kashipur","Kashipur","Uttarakhand","https://www.iimkashipur.ac.in"],
                ["IIM Nagpur","Nagpur","Maharashtra","https://www.iimnagpur.ac.in"],
                ["IIM Visakhapatnam","Vizag","AP","https://www.iimv.ac.in"],
                ["IIM Bodh Gaya","Bodh Gaya","Bihar","https://www.iimbg.ac.in"],
                ["IIM Jammu","Jammu","J&K","https://www.iimj.ac.in"],
                ["IIM Amritsar","Amritsar","Punjab","https://www.iimamritsar.ac.in"]
            ];

            iims.forEach(c => {
                stmt.run(id++, c[0], "IIM", c[1], c[2], "CAT", "₹15-25L", "Top B-School", "₹15-30L", "₹30-60L", c[3]);
            });

            stmt.finalize();
            console.log("All colleges inserted ✅");
        }
    });
});

// API
app.get("/colleges", (req, res) => {
    db.all("SELECT * FROM colleges", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000 🚀");
});