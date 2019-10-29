const Comment = {
  writtenBy: ({ id }, args, context) => {
    return context.prisma.comment({ id }).writtenBy()
  },
  post: ({ id }, args, context) => {
    return context.prisma.comment({ id }).post()
  }
}

module.exports = {
  Comment,
}
