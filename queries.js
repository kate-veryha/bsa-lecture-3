db.people.find({
	scores: {
		"$elemMatch" : { score: { $gt: 50, $lt: 90}}
	}
})



db.people.aggregate([
	{$unwind: '$scores'},
	{$match: {
		'scores.type': 'exam',
		'scores.type.exam': {$gt 90}
	}}
])
