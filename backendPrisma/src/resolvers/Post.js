const Post = {
  author: ({ id }, args, context) => {
    return context.prisma.post({ id }).author()
  },
  comments: ({ id }, args, context) => {
    return context.prisma.post({ id }).comments()
  }
}

module.exports = {
  Post,
}
