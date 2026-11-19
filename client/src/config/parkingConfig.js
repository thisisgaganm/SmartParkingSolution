
export const PROJECT_CONFIG = {
    name: "Smart Parking System",
    version: "1.0.0",
    environment: "development",
    applicationType: "web",
    database: "PostgreSQL",
    hardware: "Arduino Nano",
    connectivity: "WiFi"
};

export const USER_ROLES = {
    CUSTOMER: "CUSTOMER",
    WATCHMAN: "WATCHMAN",
    ADMIN: "ADMIN"
};

export const PARKING_LOCATIONS = [
    {
        id: "LOT_A",
        name: "Lot A",
        totalSlots: 20,
        codePrefix: "A"
    },
    {
        id: "LOT_B",
        name: "Lot B",
        totalSlots: 30,
        codePrefix: "B"
    }
];

export const RESERVATION_STATUS = {
    PENDING_PAYMENT: "PENDING_PAYMENT",
    CONFIRMED: "CONFIRMED",
    CANCELLED: "CANCELLED",
    EXPIRED: "EXPIRED",
    COMPLETED: "COMPLETED"
};

export const OCCUPANCY_STATUS = {
    AVAILABLE: "AVAILABLE",
    OCCUPIED: "OCCUPIED",
    SENSOR_ERROR: "SENSOR_ERROR",
    UNKNOWN: "UNKNOWN"
};

export const PAYMENT_STATUS = {
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    REFUNDED: "REFUNDED"
};

export const PAYMENT_METHODS = {
    ONLINE: "ONLINE",
    FASTAG: "FASTAG",
    ONSPOT: "ONSPOT",
    FREE: "FREE"
};

export const GATE_STATUS = {
    OPEN: "OPEN",
    CLOSED: "CLOSED",
    OPENING: "OPENING",
    CLOSING: "CLOSING",
    ERROR: "ERROR",
    OFFLINE: "OFFLINE"
};

export const VEHICLE_TYPES = {
    TWO_WHEELER: "TWO_WHEELER",
    FOUR_WHEELER: "FOUR_WHEELER",
    OTHER: "OTHER"
};

export const USER_CATEGORIES = {
    STUDENT: "STUDENT",
    STAFF: "STAFF",
    VISITOR: "VISITOR"
};

export const IOT_DEVICE_TYPES = {
    ARDUINO: "ARDUINO",
    ULTRASONIC_SENSOR: "ULTRASONIC_SENSOR",
    SERVO_MOTOR: "SERVO_MOTOR",
    LCD: "LCD",
    CAMERA: "CAMERA",
    DISPLAY: "DISPLAY"
};

export const DEVICE_STATUS = {
    ONLINE: "ONLINE",
    OFFLINE: "OFFLINE",
    ERROR: "ERROR"
};
