
//camada de serviço
function converteTemperatura(f){
    let c = (f - 32)*5/9;
    return c;
}

function validaParametro(parametro){
    if(isNaN(parametro))
    {
        return false;
    }
    else
    {
        return true;
    }
}

exports.validaParametro = validaParametro;
exports.converteTemperatura = converteTemperatura;