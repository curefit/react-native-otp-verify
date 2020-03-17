import { DeviceEventEmitter, NativeModules } from 'react-native';


interface OtpVerify {
    getOtp: () => Promise<boolean>;
    getHash: () => Promise<string[]>;
    addListener: (handler: (value: string) => any) => import("react-native").EmitterSubscription;
    removeListener: () => void;
}

const OtpVerify: OtpVerify = {
    getOtp: () =>  Promise.resolve(false),
    getHash: () => Promise.resolve([""]),
    addListener: (handler) => DeviceEventEmitter.addListener('com.faizalshap.otpVerify:otpReceived', handler),
    removeListener: () => DeviceEventEmitter.removeAllListeners('com.faizalshap.otpVerify:otpReceived'),
}

export default OtpVerify;
