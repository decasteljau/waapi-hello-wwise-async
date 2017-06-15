import * as wamp from './wamp-promise';
import { ak } from './waapi';

function onNameChanged(args?: any[], kwargs?: any) {
    console.log(`name changed: ${kwargs.object.id}: ${kwargs.newName}`);
}

async function main() {

    try {
        // Connect to WAAPI
        // Ensure you enabled WAAPI in Wwise's User Preferences
        var connection = await wamp.connect('ws://localhost:8080/waapi');
        var wwiseInfo = await connection.call(ak.wwise.core.getInfo, {});
        console.log(`Hello ${wwiseInfo.displayName} ${wwiseInfo.version.displayName}!`);

        var subscription = await connection.subscribe(ak.wwise.core.object.nameChanged, onNameChanged, {});

        var created = await connection.call(ak.wwise.core.object.create, {
            parent: "\\Actor-Mixer Hierarchy\\Default Work Unit",
            type: "Sound",
            name: "MySound",
            onNameConflict:"rename" }
        );

        await connection.unsubscribe(subscription);
        await connection.disconnect();
    }
    catch (e) {
        console.log(e);
    }

    process.exit();
}

main();

