import { TripData, Expedition } from '../domain/Expedition'
import { ExpeditionRepository } from '../data/repositories/ExpeditionRepository'
import { ObjectId } from 'mongodb'

export class ExpeditionService {
  constructor (
    private readonly repository: ExpeditionRepository
  ) { }

  async create (name: string, owner: string, trip: TripData) {
    const id = new ObjectId()
    const expedition = new Expedition(id, name, owner, trip)

    await this.repository.save(expedition)

    return expedition
  }
}
