const bcrypt = require("bcrypt");
const saltRounds = 10;

function computeHash(plainText){
    return bcrypt.hashSync(plainText, saltRounds);
}

function compare(plainText, hash){
    return bcrypt.compareSync(plainText,hash);
}

module.exports = {
    computeHash, compare
}