

export function CuentaBancaria (saldo,numeroCuenta,) {
    let _saldo = saldo // Variable privada
    this.numeroCuenta = numeroCuenta

    this.retirarSaldo = function(cantidad,numeroCuenta){
        if(numeroCuenta == this.numeroCuenta){
            if(cantidad <= _saldo && cantidad > 0){
                _saldo -= cantidad;
            }
        }
    }

    this.añadirSaldo = function(cantidad,numeroCuenta){
        if(numeroCuenta == this.numeroCuenta){
            if(cantidad > 0){
                _saldo += cantidad;
               
            }
        }
    }
    this.getInfo = function(){
        return `Numero-cuenta: ${this.numeroCuenta} - saldo: ${_saldo}`;
    }
}