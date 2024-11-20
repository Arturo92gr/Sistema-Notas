import { Panel } from '../classes/Panel.js';
import { Component } from '../classes/Component.js';
import { Note } from '../classes/Note.js';

export const Factory = {
    create(type, ...args) {
        switch (type) {
            case 'panel':
                return new Panel(...args);
            case 'component':
                return new Component(...args);
            case 'note':
                return new Note(...args);
            default:
                throw new Error('Invalid type');
        }
    }
};