var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var anonSchema = new Schema({
	moniker: { type: String, minlength: 8, required: true },
	hair_style: { 
		type: String, 
		enum: [
			"on fleek", 
			"busy bee",
			"SOS"
		] 
	}
	facial_hair: { type: boolean, default: false }
	number_of_eyes: { type: Number, max: 3 }
})

module.export = mongoose.model("", anonSchema);