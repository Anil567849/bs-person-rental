import mongoose, { Schema, Document, Model } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    price: string;
    gender: string;
    location: string;
    distance: string;
    dob: string;
    bio: string;
    pref: string;
    photoArrayBuffer: string;
    aadharCardArrayBuffer: string;
    join: Date;
}

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'], // You can customize gender options as needed
    },
    location: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    pref: {
        type: String,
        required: true,
    },
    photoArrayBuffer: {
        type: String, // You might want to consider using `Buffer` type if storing binary data
        required: true,
    },
    aadharCardArrayBuffer: {
        type: String, // Consider using `Buffer` here as well for storing files
        required: true,
    },
    join: {
        type: Date,
        default: Date.now,
    },
});

// Check if the model already exists before creating it
console.log(mongoose.models.User);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;