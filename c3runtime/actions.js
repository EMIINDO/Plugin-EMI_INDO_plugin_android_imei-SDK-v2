"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_plugin_android_imei.Acts = {
        Imei()
        {
            const globalThis = this;
            if (typeof window['cordova'] == 'undefined')
            {
                return;
            }
            else
            {
                window['cordova']['plugins']['IMEI'](function(_0x174277, _0xf3889e)
                {
                    globalThis['eventResponse'] = _0xf3889e;
                    globalThis['_trigger'](C3['Plugins']['EMI_INDO_plugin_android_imei']['Cnds']['Imi']);
                    globalThis['_trigger'](globalThis['Conditions']['Imi']);
                });
            }
        }
    };
}