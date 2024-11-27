import { faker } from '@faker-js/faker';
import { F } from '@faker-js/faker/dist/airline-BLb3y-7w';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient
async function main() {

    for (let i = 1; i < 6; i++) {
        await prisma.team.create({
            data: {
                country: faker.location.country()
            }
        })
    }

    for (let i = 0; i < 15; i++) {
        await prisma.player.create({
            data: {
                name: faker.person.fullName(),
                goalCount: faker.number.int({min: 0, max: 100}),
                birthDate: faker.date.birthdate().toString(),
                teamid: faker.number.int({min: 1, max: 5})
            }
        })
    }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })