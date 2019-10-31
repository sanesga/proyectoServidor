async function event(parent, { id }, context) {
  return context.prisma.event({ id })
}

async function events(parent, args, context) {
  return context.prisma.events({})
}

module.exports = {
  event,
  events,
}
