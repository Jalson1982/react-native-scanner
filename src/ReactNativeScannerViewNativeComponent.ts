import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps, HostComponent } from 'react-native';
import type {
  DirectEventHandler,
  Int32,
  Double,
} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

type Event = Readonly<{
  bounds: Readonly<{
    width: Double;
    height: Double;
    origin: Readonly<{
      topLeft: Readonly<{ x: Double; y: Double }>;
      bottomLeft: Readonly<{ x: Double; y: Double }>;
      bottomRight: Readonly<{ x: Double; y: Double }>;
      topRight: Readonly<{ x: Double; y: Double }>;
    }>;
  }>;
  type: string;
  data: string;
  target: Int32;
}>;

interface NativeCommands {
  enableFlashlight: (
    viewRef: React.ElementRef<HostComponent<NativeProps>>
  ) => Promise<void>;
  disableFlashlight: (
    viewRef: React.ElementRef<HostComponent<NativeProps>>
  ) => Promise<void>;
  releaseCamera: (
    viewRef: React.ElementRef<HostComponent<NativeProps>>
  ) => Promise<void>;
  pausePreview: (
    viewRef: React.ElementRef<HostComponent<NativeProps>>
  ) => void;
  resumePreview: (
    viewRef: React.ElementRef<HostComponent<NativeProps>>
  ) => void;
}

interface NativeProps extends ViewProps {
  pauseAfterCapture?: boolean;
  isActive?: boolean;
  onQrScanned?: DirectEventHandler<Event>; // Event name should start with "on"
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: [
    'enableFlashlight',
    'disableFlashlight',
    'releaseCamera',
    'pausePreview',
    'resumePreview',
  ],
});

export default codegenNativeComponent<NativeProps>('ReactNativeScannerView');
