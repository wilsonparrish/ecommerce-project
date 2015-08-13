var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ticketSchema = new Schema({
	raffle_item: { type: String, required: true },
	description: { type: String, maxlength: 200 },
	cost: { type: Number, min: 1 },
	donor: { type: String },
	image: { type: String }
})

mongoose.model("Ticket", ticketSchema);