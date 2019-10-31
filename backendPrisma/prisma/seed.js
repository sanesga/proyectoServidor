const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createEvent({
    title: 'Event_pilates',
    pricePerPerson: 75,
    popularity: 4,
    address: 'Salamanca',
    activities: 'Pilates restauratiu',
  })
  await prisma.createEvent({
    title: 'Event_ioga',
    pricePerPerson: 80,
    popularity: 5,
    address: 'Salamanca',
    activities: 'Ioga restauratiu',
  })
}

main()
