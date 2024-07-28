# Data pakan RTC dengan data serial monitor
rtc_times = ["11:15:55", "11:16:41", "11:17:23", "11:19:43", "11:33:24", "11:43:23", "12:05:25", "12:07:45", "12:25:46", "12:27:42"]
real_times = ["11:17:33", "11:18:20", "11:19:01", "11:21:21", "11:35:03", "11:45:02", "12:07:04", "12:09:24", "12:27:25", "12:29:21"]

delays_pakan = []
for rtc, real in zip(rtc_times, real_times):
    rtc_seconds = time_to_seconds(rtc) # type: ignore
    real_seconds = time_to_seconds(real) # type: ignore
    delay = real_seconds - rtc_seconds
    delays_pakan.append(delay)

print("Delays (RTC to REAL TIME):", delays_pakan)

# Data mqtt dengan hardware pakan
mqtt_times_pakan = ["11:31:02", "11:35:42", "11:40:15", "11:42:38", "11:58:28", "12:03:09", "12:05:47", "12:22:56", "12:24:30", "12:28:25"]
mqtt_values_pakan = ["15 gram", "29 gram", "30 gram", "30 gram", "33 gram", "34 gram", "33 gram", "40 gram", "39 gram", "45 gram"]
sensor_values_pakan = ["15 gram", "30 gram", "30 gram", "34 gram", "34 gram", "34 gram", "33 gram", "40 gram", "39 gram", "45 gram"]

delays_mqtt_pakan = []
for mqtt, sensor in zip(sensor_times_pakan, mqtt_values_pakan): # type: ignore
    delay = int(sensor.split()[0]) - int(mqtt.split()[0])
    delays_mqtt_pakan.append(delay)

print("Delays (Hardware Pakan):", delays_mqtt_pakan)

# Data mqtt dengan hardware minum
mqtt_times_minum = ["11:24:55", "11:27:23", "11:35:44", "11:44:06", "11:59:26", "12:23:05", "12:26:49", "12:27:48", "12:31:46", "12:32:10"]
sensor_values_minum = ["318 ml", "310 ml", "423 ml", "550 ml", "573 ml", "773 ml", "1062 ml", "1072 ml", "875 ml", "909 ml"]
mqtt_values_minum = ["298 ml", "304 ml", "402 ml", "550 ml", "545 ml", "720 ml", "1056 ml", "1042 ml", "848 ml", "850 ml"]

delays_mqtt_minum = []
for sensor, mqtt in zip(sensor_values_minum, mqtt_values_minum):
    delay = int(sensor.split()[0]) - int(mqtt.split()[0])
    delays_mqtt_minum.append(delay)

print("Delays (Hardware Minum):", delays_mqtt_minum)

# Data waktu mqtt dengan hardware minum
hardware_times = ["10:28:53", "10:29:10", "10:31:43", "10:31:58", "10:32:07", "10:32:19", "10:34:08", "10:34:12", "10:38:29", "10:38:56"]
mqtt_times = ["10:28:54", "10:29:11", "10:32:14", "10:32:53", "10:32:44", "10:32:35", "10:34:10", "10:34:25", "10:39:02", "10:39:47"]

delays_hardware_mqtt = []
for hardware, mqtt in zip(hardware_times, mqtt_times):
    hardware_seconds = time_to_seconds(hardware) # type: ignore
    mqtt_seconds = time_to_seconds(mqtt) # type: ignore
    delay = mqtt_seconds - hardware_seconds
    delays_hardware_mqtt.append(delay)

print("Delays (Hardware to MQTT):", delays_hardware_mqtt)
