import { Document } from "mongoose";

export class Country extends Document{
    id_country: number;
    country_code: string;
    country_name: string;
}
