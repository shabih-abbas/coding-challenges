/*
Use only function declarations or named function expressions.

1. `printRecords(..)` should:
	- take a list of student Ids
	- retrieve each student record by its student Id (hint: array `find(..)`)
	- sort by student name, ascending (hint: array `sort(..)`)
	- print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status

2. `paidStudentsToEnroll()` should:
	- look through all the student records, checking to see which ones are paid but **not yet enrolled**
	- collect these student Ids
	- return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)

3. `remindUnpaid(..)` should:
	- take a list of student Ids
	- filter this list of student Ids to only those whose records are in unpaid status
	- pass the filtered list to `printRecords(..)` to print the unpaid reminders
*/

function printRecords(recordIds) {
	let records = []
	recordIds.forEach(function getStudentDetails(id){
		let record = studentRecords.find(function matchIds(stRec){
			return stRec.id == id
		})
		record ? records.push(record) : null
	})
	records.sort(function cmpNames(rec1, rec2){
		let minLen = Math.min(rec1.name.length, rec2.name.length)
		for(let i = 0; i < minLen; i++){
			let code1= rec1.name.charCodeAt(i)
			let code2= rec2.name.charCodeAt(i)
			if (code1 != code2) return code1 - code2
		}
		return rec1.name.length - rec2.name.length
	})
	function logRecord(rec){
		console.log(`${rec.name} (${rec.id}): ${rec.paid ? "" : "Not "}Paid`)
	}
	records.forEach(logRecord)
}

function paidStudentsToEnroll() {
	return [
		...currentEnrollment,
		...studentRecords
	.filter(
		function filterPaidUnenrolledStudents(rec){
			return rec.paid && !currentEnrollment.includes(rec.id)
		}
	)
	.map(
		function getId(rec){
			return rec.id
		}
	)	
	]
	
}

function remindUnpaid(recordIds) {
	printRecords(recordIds.filter(
		function filterUnpaid(id){
			let record= studentRecords.find(function matchIds(stRec){
			return stRec.id == id
		})
		return record ? !record.paid : false
		}
	))
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

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
