function skillsMember() {
    // console.log("skillsMember called");
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM member WHERE id = ?`;
        db.query(query, [1], (err, result) => {
            if (err) {
                // console.log("Error in member.js");
                reject(err);
            }
            // console.log("Skills Member Result: ", result);
            resolve(result);
        });
    });
}