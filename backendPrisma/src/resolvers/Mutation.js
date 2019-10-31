function create_event(parent, args, context, info) {
  return context.prisma.createEvent({
    title: args.title,
    pricePerPerson: args.pricePerPerson,
    popularity: args.popularity,
    address: args.address,
    activities: args.activities,
  })
}

module.exports = {
  create_event,
}
