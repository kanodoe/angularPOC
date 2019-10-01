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



export interface Category { 
    id?: number;
    name?: string;
}

/**
 * Namespace for property- and property-value-enumerations of Category.
 */
export namespace Category {
    /**
     * All properties of Category.
     */
    export enum Properties {
        id = 'id',
        name = 'name'
    }

    /**
    * A map of tuples with error name and `ValidatorFn` for each property of Category.
    */
    export const ModelValidators: {[K in keyof Category]: [string, ValidatorFn][]} = {
        id: [
        ],
        name: [
        ],
    };

    /**
    * The FormControlFactory for Category.
    */
    export class FormControlFactory extends BaseFormControlFactory<Category> {

        /**
         * Constructor.
         *
         * @param model An existing model for Category.
         *              If given, all form-controls of the factory automatically have the value of this model. If this
         *              model is not given, all values are `null`.
         */
        constructor(
          model: Category = {
            id: null,
            name: null,
          }
        ) {
            super(model, Category.ModelValidators);
        }
    }

}

