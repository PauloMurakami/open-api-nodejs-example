export function verifyFields(arrayFields:any[]) {
    for(let field of arrayFields){
        if(field == "" || field == undefined || field.valueof() == 0){
            throw new Error("Field :" + field + "empty");
        }
    }
}