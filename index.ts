import * as wamp from './wamp-promise';
import {ak} from './waapi';

function onNameChanged(args?: any[], kwargs?: any){
    console.log(`name changed: ${kwargs}`);
}

async function main(){

    try{
        var connection = await wamp.connect('ws://localhost:8080/waapi');
        var results = await connection.call(ak.wwise.core.getInfo, {});

        //var subscription = await connection.subscribe(ak.wwise.core.object.nameChanged, onNameChanged, {});

        console.log(`Hello ${results.displayName} ${results.version.displayName}!`);

        //await connection.unsubscribe(subscription);
    }
    catch(e){
        console.log(e);
    }

    process.exit();
}

main();


