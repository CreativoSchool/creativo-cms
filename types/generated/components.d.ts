import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAgeTarget extends Struct.ComponentSchema {
  collectionName: 'components_shared_age_targets';
  info: {
    displayName: 'age_target';
  };
  attributes: {
    adult: Schema.Attribute.Boolean;
    junior: Schema.Attribute.Boolean;
    kids: Schema.Attribute.Boolean;
    teen: Schema.Attribute.Boolean;
  };
}

export interface SharedProgramGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_program_gallery_items';
  info: {
    displayName: 'program_gallery_item';
  };
  attributes: {
    caption: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.age-target': SharedAgeTarget;
      'shared.program-gallery-item': SharedProgramGalleryItem;
    }
  }
}
