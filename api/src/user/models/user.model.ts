import { Schema, Document } from 'mongoose';
const UserSchema = new Schema(
  {
    name: String,
    address: String,
    gender: String,
    phone: String,
    email: String,
    password: String,
    profileImage: String,
  },
  {
    collection: 'users',
  },
);

export { UserSchema };

export interface User extends Document {
  name: string;
  address: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
  profileImage: string;
}
