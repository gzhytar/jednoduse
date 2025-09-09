import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import page from './page'
import hero from './hero'
import offering from './offering'
import testimonial from './testimonial'
import bio from './bio'
import cta from './cta'
import faq from './faq'
import richText from './richText'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    page,
    hero,
    offering,
    testimonial,
    bio,
    cta,
    faq,
    richText,
  ],
}
