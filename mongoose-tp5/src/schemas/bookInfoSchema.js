export const BookInfoSchema = {

    type: "object",
    properties: {
        titre: {type: "string"},
        auteur: {type: "string"},
        desc: {type: "string", default: " "},
        format: {
            type: 'string',
            enum: ["poche", "manga", "audio"],
            default: "poche"
        },
    },
    required: ["titre", "auteur"],

}




