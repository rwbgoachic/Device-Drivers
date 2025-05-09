/**
 * Abstract base class for device drivers
 * Defines the standard contract that all device drivers must implement
 */
export abstract class DeviceDriver {
  /**
   * Initializes the device driver
   * @returns Promise that resolves when initialization is complete
   */
  abstract initialize(): void;
}