var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorsList = [];
for (var i = 0; i <=2; i++) {
        monitorsList [i] = [newMonitorsList[i], i + 1];
}
return monitorsList;
}
console.log(myMonitorFunction(monitorsListArray));
module.exports = myMonitorFunction;