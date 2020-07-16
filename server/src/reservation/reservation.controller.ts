import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';

import { Reservation } from './reservation.model';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  public constructor(private readonly reservationService: ReservationService) {}

  @Post('add')
  public async addReserve(
    @Body() reservation: Reservation,
  ): Promise<Reservation> {
    return this.reservationService.addReserve(reservation);
  }

  @Delete(':id/delete')
  public async removeReserve(@Param() id: string): Promise<Reservation> {
    return this.reservationService.removeReserve(id);
  }

  @Patch(':id/update')
  public async updateReservation(
    @Param('id') id: string,
    @Body() reservation: Reservation,
  ): Promise<Reservation> {
    return this.reservationService.updateReservation(id, reservation);
  }
}
