"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_plugin_android_imei;

    PLUGIN_CLASS.Instance = class plugin_android_imeiInstance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }

        Release() { }

        OnCreate() { }

        OnPropertyChanged(id, value) { }

        LoadC2Property(name, valueString) {
            return false; // not handled
        }
    };
}