import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'deliveryTimeRange',
  title: 'Delivery Time Range',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'minValue',
        title: 'Minimum Value',
        type: 'number',
    validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
        name: 'maxValue',
        title: 'Maximum Value',
        type: 'number',
    validation: (Rule) => Rule.required().min(Rule.valueOfField('minValue')),
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
})
