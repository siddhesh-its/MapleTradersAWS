function subfun() {

    let age = document.getElementById('age').value;
    let ret = document.getElementById('ret').value;
    let inc = document.getElementById('inc').value;
    let retSpending = document.getElementById('retinc').value;

    let spendAge = (85 - ret)*12;
    let ammountRequired = retSpending*spendAge;
    
    let tta = (ret - age)*12;

    let savingNeeded = ammountRequired / tta;

    let sn = savingNeeded.toFixed(2)

    let percent = (savingNeeded / inc) * 100;

    let p = percent.toFixed(2);
    

    document.getElementById('result').innerHTML = `You will need to save ${sn} &dollar; every month which is about ${p} &percnt; of your current monthly income, to meet your retirement requirements`;

    }