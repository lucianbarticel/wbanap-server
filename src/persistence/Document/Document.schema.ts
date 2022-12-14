import { EntitySchema } from '@mikro-orm/core';
import { Document, Status } from '@domain/Document/Document';
import { BaseEntity } from '@domain/BaseEntity/BaseEntity';

export const DocumentSchema = new EntitySchema<Document, BaseEntity>({
  class: Document,
  extends: 'BaseEntity',
  properties: {
    // general
    title: { type: 'text', nullable: false },
    identifier: { type: 'string', nullable: false },
    publicationDate: { type: 'Date', nullable: false },
    source: { type: 'string', nullable: false }, // if Source will ever become entity, replace with relation
    // activity
    status: { enum: true, default: Status.NOU, items: () => Status },
    assignedUser: { reference: 'm:1', entity: 'User', nullable: true },
    project: { reference: 'm:1', entity: 'Project' },
    deadline: { type: 'Date', nullable: true },
    // AI
    isRulesBreaker: { type: 'boolean', nullable: true, default: false },
    originalFormat: { type: 'string', nullable: true },
    numberOfPages: { type: 'number', nullable: true },
    textInterpretationPrecision: { type: 'number', nullable: true },
    numberOfIdentifiedArticles: { type: 'number', nullable: true },
    numberOfIdentifiedTerms: { type: 'number', nullable: true },
    // attachments
    attachments: { type: 'string[]', default: [] }, // todo: create Attachement : { reference: '1:m', entity: 'Attachement' },
  },
});
