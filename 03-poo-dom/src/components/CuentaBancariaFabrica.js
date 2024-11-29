
export function CuentaBancariaFabrica (saldo,numeroCuenta,) {
    let _saldo = saldo // Variable privada
    return {
        numeroCuenta,
        retirarSaldo(cantidad,numeroCuenta){
            if(numeroCuenta == this.numeroCuenta){
                if(cantidad <= _saldo && cantidad > 0){
                    _saldo -= cantidad;
                   
                }
            }
        },
        añadirSaldo(cantidad,numeroCuenta){
            if(numeroCuenta == this.numeroCuenta){
                if(cantidad > 0){
                    _saldo += cantidad;
                    
                }
            }
        },
        getInfo(){
            return `Numero-cuenta: ${this.numeroCuenta} - saldo: ${_saldo}`;
        }
    } 
}