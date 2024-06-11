const mongoose = require("mongoose")

const schema =  mongoose.Schema({
    role_id: {type: mongoose.SchemaType.ObjectId, required: true},
    permission: {type: String, required: true},
    created_by: {type: mongoose.SchemaType.ObjectId, required: true}
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

});

class RolePriveleges extends mongoose.Model {

}

schema.loadClass(RolePriveleges);
module.exports = mongooose.model("rolepriveleges", schema);