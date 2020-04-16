import * as mongoose from "mongoose";

export const IntegratedVisitSchema = new mongoose.Schema({
    id_visit: Number,
    // visit_date: Date,
    user: {
        id_user: Number,
        user_name: String,
        email: String,
        gender: String,
        birth_date: Date,
        phone_number: String,
        country: {
            id_country: Number,
            country_code: String,
            country_name: String,
        },
    },
    video: {
        id_video: Number,
        title: String,
        upload_date: String,
        language: {
            id_language: Number,
            language_code: String,
            language_name: String,
        },
        category: {
            id_category: Number,
            category_name: String,
        },
    },
    location: {
        id_location: Number,
        location_name: String,
        country: {
            id_country: Number,
            country_code: String,
            country_name: String,
        }
    },
    device: {
        id_device: Number,
        device_model: String,
        device_brand: String,
        device_client: String,
        device_catgory: {
            id_device_category: Number,
            device_category_name: String,
        }
    }
});

