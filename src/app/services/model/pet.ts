/*
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/T-Systems-MMS/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

import { ValidatorFn, Validators } from '@angular/forms';
import { BaseFormControlFactory } from 'openapi-typescript-angular-generator';

import { Category } from './category';
import { Tag } from './tag';


export interface Pet { 
    id?: number;
    category?: Category;
    name: string;
    photoUrls: Array<string>;
    tags?: Array<Tag>;
    /**
     * pet status in the store
     */
    status?: Pet.StatusEnum;
}

/**
 * Namespace for property- and property-value-enumerations of Pet.
 */
export namespace Pet {
    /**
     * All properties of Pet.
     */
    export enum Properties {
        id = 'id',
        category = 'category',
        name = 'name',
        photoUrls = 'photoUrls',
        tags = 'tags',
        /**
         * pet status in the store
         */
        status = 'status'
    }

    /**
     * All possible values of status.
     */
    export enum StatusEnum {
        Available = 'available',
        Pending = 'pending',
        Sold = 'sold'
    }

    /**
    * A map of tuples with error name and `ValidatorFn` for each property of Pet.
    */
    export const ModelValidators: {[K in keyof Pet]: [string, ValidatorFn][]} = {
        id: [
        ],
        category: [
        ],
        name: [
                ['required', Validators.required],
        ],
        photoUrls: [
                ['required', Validators.required],
        ],
        tags: [
        ],
        status: [
        ],
    };

    /**
    * The FormControlFactory for Pet.
    */
    export class FormControlFactory extends BaseFormControlFactory<Pet> {

        /**
         * Constructor.
         *
         * @param model An existing model for Pet.
         *              If given, all form-controls of the factory automatically have the value of this model. If this
         *              model is not given, all values are `null`.
         */
        constructor(
          model: Pet = {
            id: null,
            category: null,
            name: null,
            photoUrls: null,
            tags: null,
            status: null,
          }
        ) {
            super(model, Pet.ModelValidators);
        }
    }

}


