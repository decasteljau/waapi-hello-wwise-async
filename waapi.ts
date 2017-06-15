export const ak = {
    soundengine: {
        /** Set multiple positions for a single game object. Setting multiple positions for a single game object is a way to simulate multiple emission sources while using the resources of only one voice. This can be used to simulate wall openings, area sounds, or multiple objects emitting the same sound in the same area. See <tt>AK::SoundEngine::SetMultiplePositions</tt>. */
        setMultiplePositions: "ak.soundengine.setMultiplePositions", 
        /** Set the scaling factor of a game object. Modify the attenuation computations on this game object to simulate sounds with a larger or smaller area of effect. See <tt>AK::SoundEngine::SetScalingFactor</tt>. */
        setScalingFactor: "ak.soundengine.setScalingFactor", 
        /** Asynchronously post an Event to the sound engine (by event ID). See <tt>AK::SoundEngine::PostEvent</tt>. */
        postEvent: "ak.soundengine.postEvent", 
        /** Set the value of a real-time parameter control. See <tt>AK::SoundEngine::SetRTPCValue</tt>. */
        setRTPCValue: "ak.soundengine.setRTPCValue", 
        /** Set a game object's obstruction and occlusion levels. This function is used to affect how an object should be heard by a specific listener. See <tt>AK::SoundEngine::SetObjectObstructionAndOcclusion</tt>. */
        setObjectObstructionAndOcclusion: "ak.soundengine.setObjectObstructionAndOcclusion", 
        /** Set a single game object's active listeners. By default, all new game objects have no listeners active, but this behavior can be overridden with <tt>SetDefaultListeners()</tt>. Inactive listeners are not computed. See </tt>AK::SoundEngine::SetListeners</tt>. */
        setListeners: "ak.soundengine.setListeners", 
        /** Execute an action on all nodes that are referenced in the specified event in an action of type play. See <tt>AK::SoundEngine::ExecuteActionOnEvent</tt>. */
        executeActionOnEvent: "ak.soundengine.executeActionOnEvent", 
        /** Set a listener's spatialization parameters. This lets you define listener-specific volume offsets for each audio channel. See <tt>AK::SoundEngine::SetListenerSpatialization</tt>. */
        setListenerSpatialization: "ak.soundengine.setListenerSpatialization", 
        /** Reset the value of a real-time parameter control to its default value, as specified in the Wwise project. See <tt>AK::SoundEngine::ResetRTPCValue</tt>. */
        resetRTPCValue: "ak.soundengine.resetRTPCValue", 
        /** Unregister a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. Unregistering a game object while it is in use is allowed, but the control over the parameters of this game object is lost. For example, say a sound associated with this game object is a 3D moving sound. It will stop moving when the game object is unregistered, and there will be no way to regain control over the game object. See <tt>AK::SoundEngine::UnregisterGameObj</tt>. */
        unregisterGameObj: "ak.soundengine.unregisterGameObj", 
        /** Stop the current content, associated to the specified playing ID, from playing. See <tt>AK::SoundEngine::StopPlayingID</tt>. */
        stopPlayingID: "ak.soundengine.stopPlayingID", 
        /** Set the Auxiliary Busses to route the specified game object. See <tt>AK::SoundEngine::SetGameObjectAuxSendValues</tt>. */
        setGameObjectAuxSendValues: "ak.soundengine.setGameObjectAuxSendValues", 
        /** Seek inside all playing objects that are referenced in Play Actions of the specified Event. See <tt>AK::SoundEngine::SeekOnEvent</tt>. */
        seekOnEvent: "ak.soundengine.seekOnEvent", 
        /** Register a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. See <tt>AK::SoundEngine::RegisterGameObj</tt>. */
        registerGameObj: "ak.soundengine.registerGameObj", 
        /** Set a the default active listeners for all subsequent game objects that are registered. See </tt>AK::SoundEngine::SetDefaultListeners</tt>. */
        setDefaultListeners: "ak.soundengine.setDefaultListeners", 
        /** Set the position of a game object. See <tt>AK::SoundEngine::SetPosition</tt>. */
        setPosition: "ak.soundengine.setPosition", 
        /** Display a message in the profiler. */
        postMsgMonitor: "ak.soundengine.postMsgMonitor", 
        /** Set the output bus volume (direct) to be used for the specified game object. See <tt>AK::SoundEngine::SetGameObjectOutputBusVolume</tt>. */
        setGameObjectOutputBusVolume: "ak.soundengine.setGameObjectOutputBusVolume", 
        /** Set the State of a Switch Group. See <tt>AK::SoundEngine::SetSwitch</tt>. */
        setSwitch: "ak.soundengine.setSwitch", 
        /** Stop playing the current content associated to the specified game object ID. If no game object is specified, all sounds will be stopped. See <tt>AK::SoundEngine::StopAll</tt>. */
        stopAll: "ak.soundengine.stopAll", 
        /** Post the specified Trigger. See <tt>AK::SoundEngine::PostTrigger</tt>. */
        postTrigger: "ak.soundengine.postTrigger"
    }, 
    wwise: {
        debug: {
            /** Private use only. */
            testAssert: "ak.wwise.debug.testAssert", 
            /** Sent when an assert has failed. */
            assertFailed: "ak.wwise.debug.assertFailed", 
            /** Enables debug assertions. */
            enableAsserts: "ak.wwise.debug.enableAsserts"
        }, 
        core: {
            remote: {
                /** Retrieves the connection status. */
                getConnectionStatus: "ak.wwise.core.remote.getConnectionStatus", 
                /** Retrieves all consoles available for connecting Wwise Authoring to a Sound Engine instance. */
                getAvailableConsoles: "ak.wwise.core.remote.getAvailableConsoles", 
                /** Disconnects the Wwise Authoring application from a connected Wwise Sound Engine running executable. */
                disconnect: "ak.wwise.core.remote.disconnect", 
                /** Connects the Wwise Authoring application to a Wwise Sound Engine running executable. The host must be running code with communication enabled. */
                connect: "ak.wwise.core.remote.connect"
            }, 
            /** Retrieve global Wwise information. */
            getInfo: "ak.wwise.core.getInfo", 
            object: {
                /** Moves an object to the given parent. */
                move: "ak.wwise.core.object.move", 
                /** Sent when an attenuation curve's link/unlink is changed. */
                attenuationCurveLinkChanged: "ak.wwise.core.object.attenuationCurveLinkChanged", 
                /** Sent following an object's deletion. */
                postDeleted: "ak.wwise.core.object.postDeleted", 
                /** Sent when an object is added as a child to another object. */
                childAdded: "ak.wwise.core.object.childAdded", 
                /** Sent when the watched property of an object changes. */
                propertyChanged: "ak.wwise.core.object.propertyChanged", 
                /** Creates an object of type 'type', as a child of 'parent'. */
                create: "ak.wwise.core.object.create", 
                /** Sent when one or many curves are changed. */
                curveChanged: "ak.wwise.core.object.curveChanged", 
                /** Sent when an object is renamed. */
                nameChanged: "ak.wwise.core.object.nameChanged", 
                /** Performs a query, returns specified data for each object in query result. Refer to \ref waapi_query for more information. */
                get: "ak.wwise.core.object.get", 
                /** Sent when the object's notes are changed. */
                notesChanged: "ak.wwise.core.object.notesChanged", 
                /** Sent prior to an object's deletion. */
                preDeleted: "ak.wwise.core.object.preDeleted", 
                /** Renames an object. */
                setName: "ak.wwise.core.object.setName", 
                /** Sets the object's notes. */
                setNotes: "ak.wwise.core.object.setNotes", 
                /** Sets the specified attenuation curve for a given attenuation object. */
                setAttenuationCurve: "ak.wwise.core.object.setAttenuationCurve", 
                /** Sets a property value of an object for a specific platform. Refer to \ref wobjects_index for more information on the properties available on each object type. */
                setProperty: "ak.wwise.core.object.setProperty", 
                /** Copies an object to the given parent. */
                copy: "ak.wwise.core.object.copy", 
                /** Retrieves the status of a property. */
                isPropertyEnabled: "ak.wwise.core.object.isPropertyEnabled", 
                /** Sets an object's reference value. */
                setReference: "ak.wwise.core.object.setReference", 
                /** Sent when an attenuation curve is changed. */
                attenuationCurveChanged: "ak.wwise.core.object.attenuationCurveChanged", 
                /** Sent when an object is created. */
                created: "ak.wwise.core.object.created", 
                /** Sent when an object is removed from the children of another object. */
                childRemoved: "ak.wwise.core.object.childRemoved", 
                /** Gets the specified attenuation curve for a given attenuation object. */
                getAttenuationCurve: "ak.wwise.core.object.getAttenuationCurve", 
                /** Deletes the specified object. */
                delete_: "ak.wwise.core.object.delete"
            }, 
            undo: {
                /** Ends the last undo group. */
                endGroup: "ak.wwise.core.undo.endGroup", 
                /** Cancels the last undo group. Please note that this does not revert the operations made since the last ak.wwise.core.beginUndoGroup call. */
                cancelGroup: "ak.wwise.core.undo.cancelGroup", 
                /** Begins an undo group. Make sure to call ak.wwise.core.endUndoGroup exactly once for every ak.wwise.core.beginUndoGroup call you make. Calls to ak.wwise.core.beginUndoGroup can be nested. */
                beginGroup: "ak.wwise.core.undo.beginGroup"
            }, 
            project: {
                /** Sent when the after the project is completly closed. */
                postClosed: "ak.wwise.core.project.postClosed", 
                /** Sent when the project has been loaded. */
                loaded: "ak.wwise.core.project.loaded", 
                /** Sent when the project begins closing. */
                preClosed: "ak.wwise.core.project.preClosed", 
                /** Saves the current project. */
                save: "ak.wwise.core.project.save"
            }, 
            soundbank: {
                /** Retrieves a SoundBank's inclusion list. */
                getInclusions: "ak.wwise.core.soundbank.getInclusions", 
                /** Modifies a SoundBank's inclusion list.  The 'operation' argument determines how the 'inclusions' argument modifies the SoundBank's inclusion list; 'inclusions' may be added to / removed from / replace the SoundBank's inclusion list. */
                setInclusions: "ak.wwise.core.soundbank.setInclusions"
            }, 
            audio: {
                /** Scripted object creation and audio file import.  The contents of this command very closely mirror that of a tab-delimited import file. See \ref ak_wwise_core_audio_importtabdelimited. */
                import_: "ak.wwise.core.audio.import", 
                /** Scripted object creation and audio file import from a tab-delimited file. */
                importTabDelimited: "ak.wwise.core.audio.importTabDelimited"
            }, 
            transport: {
                /** Destroys the given transport object. */
                destroy: "ak.wwise.core.transport.destroy", 
                /** Creates a transport object for the given Wwise object.  The return transport object can be used to play, stop, pause and resume the Wwise object via the other transport functions. */
                create: "ak.wwise.core.transport.create", 
                /** Gets the state of the given transport object. */
                getState: "ak.wwise.core.transport.getState", 
                /** Executes an action on the given transport object, or all transports if no transport is specified. */
                executeAction: "ak.wwise.core.transport.executeAction", 
                /** Returns the list of transport objects. */
                getList: "ak.wwise.core.transport.getList"
            }, 
            plugin: {
                /** Retrieves the list of all plugins. */
                getList: "ak.wwise.core.plugin.getList", 
                /** Retrieves information about a plugin property. */
                getProperty: "ak.wwise.core.plugin.getProperty"
            }
        }, 
        ui: {
            project: {
                /** Closes the current project. */
                close: "ak.wwise.ui.project.close", 
                /** Opens a project, specified by path. */
                open: "ak.wwise.ui.project.open"
            }, 
            commands: {
                /** Executes a command. Some commands can take a list of objects as parameter. Refer to \ref globalcommandsids for the available commands. */
                execute: "ak.wwise.ui.commands.execute"
            }, 
            /** Retrieves the list of objects currently selected by the user in the active view. */
            getSelectedObjects: "ak.wwise.ui.getSelectedObjects", 
            /** Sent when the selection changes in the project. */
            selectionChanged: "ak.wwise.ui.selectionChanged"
        }
    }
}
