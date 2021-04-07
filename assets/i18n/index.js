const fs = require('fs');

var dataEs = require('./es.json');
var dataEn = require('./en.json');
const translate = require('google-translate-open-api');

async function translateLang(dataLangJSON, lang = 'en') {
    console.log(`**************Traduciendo hacia ${lang} ***********`)
    let total = Object.keys(dataLangJSON).length;
    errors = [];
    let i = 0;

    for (let key in dataLangJSON) {
        try {
            if (!dataLangJSON[key]) {
                let result = await translate.default(key, {
                    to: lang,
                })
                await waits(100);
                const data = result.data[0];
                dataLangJSON[key] = data;
                console.log(i, '/', total, ' : ', Math.floor((i / total) * 100), '%');
            }
            i++;
        } catch (err) {
            if (err) {
                errors.push({
                    item: key,
                    code: err.response.status
                })
                await waits(500);
                i++;
                console.log("********Error traduciendo: ", key, ' status: ', err.response.status);
            } else {
                console.log("********Error desconocido: ", );
            }
        }
    }

    fs.writeFileSync(`./${lang}.json`, JSON.stringify(dataLangJSON, null, 2));
    console.log("Terminado todo el proceso de traducción");
    console.log("Resumen: ");
    console.log("Errores: ", errors.length);
    for (let i = 0; i < errors.length; i++) {
        console.log("Error al traducir ", errors[i].item, ' code:', errors[i].code);
    }
}

function waits(delay = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(true);
        }, delay);
    })
}

translateLang(dataEn, 'en');
