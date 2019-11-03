function create_event(parent, args, context, info) {
  return context.prisma.createEvent({
    title: args.title,
    description: args.description,
    price: args.price,
    category: args.category,
    location: args.location,
  })
}

module.exports = {
  create_event,
}


