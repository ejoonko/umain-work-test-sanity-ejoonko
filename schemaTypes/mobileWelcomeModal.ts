import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mobileWelcomeModal',
  title: 'Mobile Welcome Modal',
  type: 'document',
  fields: [
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array', 
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'array', 
        of: [{type: 'block'}],
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
