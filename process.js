let input_data = process.argv.slice(2);
let res = {};
const is_num = num => !isNaN(num);
if(input_data.length > 0){
    res = validateType(input_data);
}else{
    res.error = {
        descripcion: "Entrada Vacía"
    }
}

function validateType(input_data){
    if(input_data.every(is_num)){
        let promedio_reduce = input_data.reduce((p,c)=> Number(p)+Number(c));
        return {
            datos:{
                numeros: input_data,
                promedio: promedio_reduce/input_data.length,
                max: Math.max.apply(Math, input_data),
                min: Math.min.apply(Math, input_data),
                ejecutable: process.execPath,
                pid: process.pid
            }
        }
    }else{
        return {
            error: {
                descripcion: "Error de tipo", 
                numeros: input_data,
                tipos: input_data.map(element =>{
                    if(is_num(element)){
                        return 'number';
                    }
                    return typeof(element);
                })
            }
        }
    }
}
console.log(res);
