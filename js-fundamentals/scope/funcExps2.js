
// Refactor the same functions from part 1 to use **only** `=>` arrow functions.

const printRecords = recordIds => {
	let records = []
	recordIds.forEach( id => {
		let record = studentRecords.find(stRec => stRec.id == id)
		record ? records.push(record) : null
	})
	records.sort((rec1, rec2) => {
		let minLen = Math.min(rec1.name.length, rec2.name.length)
		for(let i = 0; i < minLen; i++){
			let code1= rec1.name.charCodeAt(i)
			let code2= rec2.name.charCodeAt(i)
			if (code1 != code2) return code1 - code2
		}
		return rec1.name.length - rec2.name.length
	})
	const logRecord = rec => console.log(`${rec.name} (${rec.id}): ${rec.paid ? "" : "Not "}Paid`)
	records.forEach(logRecord)
}

const paidStudentsToEnroll= () => [
		...currentEnrollment,
		...studentRecords
	.filter(
		rec => rec.paid && !currentEnrollment.includes(rec.id)
	)
	.map(
		rec => rec.id
	)	
	]

const remindUnpaid = recordIds => printRecords(recordIds.filter(id => {
	let record = studentRecords.find(stRec => stRec.id == id)
	return record ? !record.paid : false
	}
))


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
