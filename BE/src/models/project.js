import { array } from 'joi';
import mongoose from 'mongoose';
import slugify from 'slugify'
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    description: String,
    link: {
        type: String,
        default: ""
    },
    linkGithub: {
        type: String,
        default: ""
    },
    technologyId: [{
        type: mongoose.Types.ObjectId,
        ref: "Technology"
    }],
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    slug: {
        type: String,
        unique: true,
    },
},{timestamps: true, versionKey: false})

// Tạo slug từ trường name
projectSchema.pre('save', function(next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    });
    next();
});
export default mongoose.model('Project', projectSchema);