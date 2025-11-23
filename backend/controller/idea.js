import Idea from "../models/ideas";

async function idea(req, res) {
    try {
        const { data, name } = req.body;
       
        const existingIdea = await Idea.findOne({ "idea": data.description });
        
        if (existingIdea) {
            return res.status(400).json({ message: "Idea already exists" });
        }

        // Create a new idea
        const newIdea = new Idea({
            name,
            data
        });

        // Save the new idea to the database
        await newIdea.save();
        
        // Respond with success
        return res.status(201).json({ message: "Idea created successfully", idea: newIdea });

    } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}

export default idea;
