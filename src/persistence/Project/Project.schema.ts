import { Project, BaseEntity, Document } from '@domain';
import { EntitySchema } from '@mikro-orm/core';

export const ProjectSchema = new EntitySchema<Project, BaseEntity>({
  class: Project,
  extends: 'BaseEntity',
  properties: {
    title: { type: 'text', nullable: false },
    presentsInterest: { type: 'boolean', default: false },
    // project technical details
    numarInregistrareSenat: { type: 'string', nullable: true },
    numarInregistrareGuvern: { type: 'string', nullable: true },
    proceduraLegislativa: { type: 'string', nullable: true },
    cameraDecizionala: { type: 'string', nullable: true },
    termenAdoptare: { type: 'string', nullable: true },
    tipInitiativa: { type: 'string', nullable: true },
    caracter: { type: 'string', nullable: true },
    esteProceduraDeUrgenta: { type: 'boolean', default: false },
    stadiu: { type: 'string', nullable: true },
    initiator: { type: 'string', nullable: true },
    consultati: { type: 'string', nullable: true },
    // end project technical details
    attachments: { type: 'string[]', default: [] }, // todo: create Attachement : { reference: '1:m', entity: 'Attachement' },
    documents: {
      reference: '1:m',
      entity: () => 'Document',
      mappedBy: (document: Document) => document.project,
    },
  },
});
