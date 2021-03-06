//collectionName - people

db.people.find({
	scores: {
		"$elemMatch" : { score: { $gt: 87, $lt: 93}}
	}
})



db.people.aggregate([
	{$unwind: '$scores'},
	{$match: {
		'scores.type': 'exam',
	}},
	{$match: {
		'scores.score': { $gt: 90}
	}}
])

db.people.update(
	{name: "Dusti Lemmond"},
	{$set : {
		"accepted" : true
	}},
	{multi: true}
)