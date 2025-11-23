import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    idea: {
        type: mongoose.Schema.Types.Mixed, 
    
    },
});

const Idea = mongoose.model("Idea", ideaSchema);
export default Idea;
