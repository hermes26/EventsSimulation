import { Document } from "mongoose";
import { User } from "src/reference/user/user.entity";
import { Video } from "src/reference/video/video.entity";
import { Location } from "src/reference/location/location.entity";
import { Device } from "src/reference/device/device.entity";

export class IntegratedVisit extends Document{

    id_visit: number;
    user: User;
    video: Video;
    location: Location;
    device: Device;


    // id_visit: number;
    // // visit_date: Date;
    // user: {
    //     id_user: number;
    //     user_name: string;
    //     email: string;
    //     gender: string;
    //     birth_date: Date;
    //     phone_number: string;
    //     country: {
    //         id_country: number;
    //         country_code: string;
    //         country_name: string;
    //     };
    // };
    // video: {
    //     id_video: number;
    //     title: string;
    //     upload_date: string;
    //     language: {
    //         id_language: number;
    //         language_code: string;
    //         language_name: string;
    //     };
    //     category: {
    //         id_category: number;
    //         category_name: string;
    //     };
    // };
    // location: {
    //     id_location: number;
    //     location_name: string;
    //     country: {
    //         id_country: number;
    //         country_code: string;
    //         country_name: string;
    //     }
    // };
    // device: {
    //     id_device: number;
    //     device_model: string;
    //     device_brand: string;
    //     device_client: string;
    //     device_catgory: {
    //         id_device_category: number;
    //         device_category_name: string;
    //     }
    // };
}
