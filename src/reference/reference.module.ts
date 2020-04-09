import { Module } from '@nestjs/common';
import { VideoModule } from './video/video.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { DeviceModule } from './device/device.module';
import { DeviceCategoryModule } from './device-category/device-category.module';
import { LanguageModule } from './language/language.module';
import { CategoryModule } from './category/category.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [VideoModule, UserModule, LocationModule, DeviceModule, DeviceCategoryModule, LanguageModule, CategoryModule, CountryModule],
  exports: [DeviceModule]
})
export class ReferenceModule {}
