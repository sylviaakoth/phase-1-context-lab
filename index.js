/* Your Code Here */

function createEmployeeRecord (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[] 
    }
    
    }
    function createEmployeeRecords(record) {
        return record.map(function (two){
            return createEmployeeRecord(two)
        })
    
    }
    function createTimeInEvent (record) {
        let [date, hour] = record.split(" ") 
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    })
    return this
    }
    function createTimeOutEvent (record) {
        let [date, hour] = record.split(" ") 
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    })
    return this
    }
    function hoursWorkedOnDate (date) {
        let timeIn = this.timeInEvents.find( function (event){
            return event.date === date
        })
        let timeOut = this.timeOutEvents.find(function(event){
            return event.date === date
        })
    return (timeOut.hour - timeIn.hour) / 100
    }
    function wagesEarnedOnDate (date) {
        let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
        return parseInt(wage.toString())
    }
    
    
    /*
     We're giving you this function. Take a look at it, you might see some usage
     that's new and different. That's because we're avoiding a well-known, but
     sneaky bug that we'll cover in the next few lessons!
     As a result, the lessons for this function will pass *and* it will be available
     for you to use if you need it!
     */
    
    const allWagesFor = function () {
        const eligibleDates = this.timeInEvents.map(function (e) {
            return e.date
        })
    
    
        const payable = eligibleDates.reduce(function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d)
        }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
        return payable
    }
    function findEmployeeByFirstName (collection, firstName) {
        return collection.find(function (event){
            return event.firstName === firstName
        })
    
    }
    function calculatePayroll (collection) {
        return collection.reduce(function(accumulator, value){
            return accumulator + allWagesFor.call(value)
        },0)
    
    }
