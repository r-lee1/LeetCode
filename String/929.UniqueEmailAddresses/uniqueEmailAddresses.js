/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();
    uniqueEmails.add(parseEmail(emails[0]));

   for (let i = 1; i < emails.length; i++) {
       let isUniq = true;
       let parsedEmail = parseEmail(emails[i]);

       uniqueEmails.forEach(el => {
           if (parsedEmail === el) {
               isUniq = false;
               return;
           }
       });

       if (isUniq) uniqueEmails.add(parsedEmail);
   }

    return uniqueEmails.size;
};

const parseEmail = (str) => {
    let result = {
        local: "",
        domain: ""
    };
    let idx = str.indexOf("@");
    let localTemp = "";
    localTemp = str.slice(0, idx);
    result['domain'] = str.slice(idx+1);

    for (let c of localTemp.split("")) {
        if (c === "+") break;
        else if (c !== ".") result['local'] += c;
    }

    let resultStr = result['local'] + '@' + result['domain'];
    return resultStr;
};
