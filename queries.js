db.people.find({
	scores: {
		"$elemMatch" : { score: { $gt: 87, $lt: 93}}
	}
})



db.people.aggregate([
	{$unwind: '$scores'},
	{$match: {
		'scores.type': 'exam',
		'scores.type.exam': {$gt 90}
	}}
])
