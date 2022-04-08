// Write your solution in this file!
const employee = {
    name: "Anna",
    streetAddress: "123 Broadway"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmp = {...object};
    newEmp[key] = value;
    return newEmp
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newEmpDel = {...object};
    delete newEmpDel[key];
    return newEmpDel
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object
}

//const checkEmp = 
//destructivelyDeleteFromEmployeeByKey(employee, "name");
//console.log(employee);