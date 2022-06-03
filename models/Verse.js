import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const VerseSchema = new mongoose.Schema({
    book: { type: Number },
    chapter: { type: Number },
    verse: { type: Number },
    // context: { type: String },
});

export default mongoose.models.Verse || mongoose.model("Verse", VerseSchema);
