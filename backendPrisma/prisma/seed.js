const { prisma } = require('../src/generated/prisma-client')

async function main() {
  await prisma.createEvent({
    title: 'Teatro',
    description: 'Teatro al aire libre',
    price: 3,
    category: 'Artes escénicas',
    location: 'Valencia',
  })
  await prisma.createEvent({
    title: 'Exposición',
    description: 'Fotografía en blanco y negro',
    price: 0,
    category: 'Fotografía',
    location: 'Massanassa',
  })
  await prisma.createEvent({
    title: 'Maratón',
    description: 'Subida al castillo',
    price: 5,
    category: 'Deportes',
    location: 'Xàtiva',
  })
}
main()


