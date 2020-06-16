import { ObjectId } from 'mongodb'
import { Entity } from '@nindoo/mongodb-data-layer/dist/structures/interfaces/Entity'

export type RoundtripData = {
  isRoundtrip: Boolean
  waitTime: string
}

export type TripData = {
  origin: string
  destination: string
  departureDate: Date
  expectedArrivalDate: Date
  roundtrip: RoundtripData
}

export class Expedition implements Entity {
  constructor (
    public _id: ObjectId,
    public name: string,
    public owner: string,
    public trip: TripData,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) { }
}
