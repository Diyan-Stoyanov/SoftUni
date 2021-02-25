function jsonTable(input){
    let output = '<table>\n';
    let employees = [];
    input.forEach(el => {
        employees.push(JSON.parse(el));
    });

    output += arrayAsTable(employees) + '</table>';

    console.log(output);

    function arrayAsTable(employees){
        let result = '';
        employees.forEach(employee => {
            result += '\t<tr>\n';
            Object.values(employee).forEach(v =>{
            result += `\t\t<td>${v}</td>\n`
            })

            result += '\t</tr>\n';

        })

        return result;
        
    }
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])
