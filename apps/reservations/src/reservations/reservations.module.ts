import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { AppLoggerModule, DatabaseModule } from '@app/common';
import { ReservationRepository } from './reservation.repository';
import { ReservationDocument, ReservationSchema } from '../models/reservation.schema';
import { LoggerModule } from 'nestjs-pino';
import { single } from 'rxjs';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([
    { name: ReservationDocument.name, schema: ReservationSchema },
  ])
, AppLoggerModule],
  controllers: [ReservationsController],
  providers: [ReservationsService , ReservationRepository],
})

export class ReservationsModule {}
