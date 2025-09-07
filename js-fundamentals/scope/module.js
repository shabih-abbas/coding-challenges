/*
Refactor some code that manages student enrollment records for a workshop, to use the module pattern.
*/

function defineWorkshop(){
	var currentEnrollment = []
	var studentRecords = []
	
	return {
		addStudent,
		enrollStudent,
		printCurrentEnrollment,
		enrollPaidStudents,
		remindUnpaidStudents,
	}

	function addStudent(id, name, paid){
		studentRecords.push({id, name, paid})
	}

	function enrollStudent(id){
		currentEnrollment.push(id)
	}

	function printCurrentEnrollment(){
		printRecords(currentEnrollment)
	}

	function enrollPaidStudents(){
		currentEnrollment = paidStudentsToEnroll()
	}

	function remindUnpaidStudents(){
		remindUnpaid(currentEnrollment)
	}

	// *************************

	function getStudentFromId(studentId) {
		return studentRecords.find(matchId);

	// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	}

	function printRecords(recordIds) {
		var records = recordIds.map(getStudentFromId);

		records.sort(sortByNameAsc);

		records.forEach(printRecord);
	}

	function sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	function printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}

	function paidStudentsToEnroll() {
		var recordsToEnroll = studentRecords.filter(needToEnroll);

		var idsToEnroll = recordsToEnroll.map(getStudentId);

		return [ ...currentEnrollment, ...idsToEnroll ];
	}

	function needToEnroll(record) {
		return (record.paid && !currentEnrollment.includes(record.id));
	}

	function getStudentId(record) {
		return record.id;
	}

	function remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(notYetPaid);

		printRecords(unpaidIds);
	}

	function notYetPaid(studentId) {
		var record = getStudentFromId(studentId);
		return !record.paid;
	}
}

var deepJs = defineWorkshop()

deepJs.addStudent(313,"Frank", true)
deepJs.addStudent(410,"Suzy", true)
deepJs.addStudent(709, "Brian", false)
deepJs.addStudent(105, "Henry", false)
deepJs.addStudent(502, "Mary", true)
deepJs.addStudent(664, "Bob", false)
deepJs.addStudent(250, "Peter", true)
deepJs.addStudent(375, "Sarah", true)
deepJs.addStudent(867, "Greg", false)

deepJs.enrollStudent(410)
deepJs.enrollStudent(105)
deepJs.enrollStudent(664)
deepJs.enrollStudent(375)

deepJs.printCurrentEnrollment();
console.log("----");
deepJs.enrollPaidStudents();
deepJs.printCurrentEnrollment();
console.log("----");
deepJs.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/


// ********************************

