import {formatCurrency as moneyC} from '../script/utility/money.js';

if (moneyC(2000.5) === '20.01'){
    console.log('passed')
}else {
    console.log('failed')
}