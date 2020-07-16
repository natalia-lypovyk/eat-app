import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

import { Reservation } from './reservation.model';

@Injectable()
export class ReservationService {
  public constructor(
    @InjectRepository(Reservation)
    private reservationRepo: MongoRepository<Reservation>,
  ) {}

  public async addReserve(reservation: Reservation): Promise<Reservation> {
    return this.reservationRepo.save(reservation);
  }

  public async removeReserve(id: string): Promise<Reservation> {
    const reservationToRemove = await this.findOneById(id);

    return this.reservationRepo.remove(reservationToRemove);
  }

  public async updateReservation(
    id: string,
    reservation: Reservation,
  ): Promise<Reservation> {
    const previousReservation = await this.findOneById(id);

    return this.reservationRepo.save({
      ...previousReservation,
      ...reservation,
    });
  }

  private async findOneById(id: string): Promise<Reservation> {
    const reservation = await this.reservationRepo.findOne({ id });

    if (reservation === undefined) {
      throw new NotFoundException(`Menu with id ${id} was not found.`);
    }

    return reservation;
  }
}
