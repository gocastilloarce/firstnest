const Joi  = require('joi')

// Usando joi para validar los datos
export const createBirdSchema = Joi.object({
    name: Joi.string().required(),
    age:Joi.number().required(),
    breed:Joi.string().required(),
    sound:Joi.string()
})

export class CreateBirdDto {
    name: string;
    age: number;
    breed: string;
    sound: string;
}